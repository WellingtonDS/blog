import FormUser from '@/components/formUser/FormUser.vue';
export default {
    name: "CreateLogin",
    components: {
      FormUser
    },
    data() {
      return {
        create: false
      }
    },

    methods: {
      async createUser() {
        try{
          await this.$store.dispatch("createUser", this.$store.state.user);
          await this.$store.dispatch("getUser", this.$store.state.user.email);
          this.$router.push({name: "user"});

        } catch (error){
          console.log("erro")
        }
      }
    },

  };
  