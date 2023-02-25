import { api } from '@/service/service';

export default {
    name: "CreateProduct",
    data() {
        return {
            product: {
                name: "",
                price: "",
                description: "",
                photos: null,
                sold: "false"
            }
        }
    },

    methods: {
        formatProduct() {
            this.product.user_id = this.$store.state.user.id;
        },

        adicionarProduto() {
            let receber = document.getElementById("photo").files;
            console.log(receber, "receber");

            if (receber.length > 0) {
                let carregar = receber[0];
                console.log(carregar, "carregar"); 
               }

            this.formatProduct();
            api.post("/product", this.product).then(() => {
                this.$store.dispatch("getProductUser");
            });
        }
    },
    
}