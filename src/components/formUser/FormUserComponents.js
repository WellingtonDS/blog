import { mapFields } from "@/helpers/Helpers";
import {getCep} from "@/service/service"

export default {
    name: "FormUser",
    computed: {
        ...mapFields({
            fields: ["name", "email", "password", "code", "street", "number", "district", "city", "state"],
            base: "user",
            mutation: "UPDATE_USER" 
        }),
         mostrarDados () {
            return (!this.$store.state.login || (this.$route.name === 'editar'))
         }
    },

    methods: {
        preencherCep() {
           const cep = this.code.replace(/\D/g, "");
           if(cep.length === 8) {
            getCep(cep).then(response => {
                this.street = response.data.logradouro;
                this.district = response.data.bairro;
                this.city = response.data.localidade;
                this.state = response.data.uf;
            })
           }

        }
    },
}