export default {
    name: "Header",
    computed: {
        name() {
            return this.$store.state.user.name.replace(/ .*/, "");
        }
    }
}