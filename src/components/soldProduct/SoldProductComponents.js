import FormUser from '@/components/formUser/FormUser.vue';
import { api } from '@/service/service';
import {mapState} from 'vuex';

export default {
    name: "SoldProduct",
    components: {
        FormUser
    },

    props: ["product"],

    computed: {
        ...mapState(["user"]),

        compra() {
            return {
                comprador_id: this.user.email,
                vendedor_id: this.product.user_id,
                product: this.product,
                endereco: {
                    code: this.user.code,
                    street: this.user.street,
                    number: this.user.number,
                    district: this.user.district,
                    city: this.user.city,
                    state: this.user.state
                }
            }
        }
    },

    methods: {
        criarTransacao() {
           return api.post("/transacao", this.compra).then(() => {
                this.$router.push({name: "compras"});
            })
        },

        async createUser() {
            try{
              await this.$store.dispatch("createUser", this.$store.state.user);
              await this.$store.dispatch("getUser", this.$store.state.user.email);
    
              await this.criarTransacao();
            } catch (error){
              console.log("erro")
            }
          },

        finalizarCompra() {
            if (this.$store.state.login) {
                this.criarTransacao();
            } else {
                this.createUser();
            }
        }
    },
}