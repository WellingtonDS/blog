<template>
    <section>
        <FormUser>
            <button class="btn" @click.prevent="editarUsuario">Atualizar dados</button>
        </FormUser>
    </section>
</template>

<script>
import FormUser from '@/components/formUser/FormUser.vue'
import { api } from '@/service/service'

export default {
    name: "editUser",
    components: {
        FormUser
    },

    methods: {
        editarUsuario() {
            api.put(`/user/${this.$store.state.user.id}`, this.$store.state.user).then(() => {
                this.$store.dispatch("getUser");
                this.$router.push({name: "usuario"});
            }).catch( error => {
                console.error(error.response);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>