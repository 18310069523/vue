<template>
    <div>
        加载中
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            if (this.$route.params.url == "index") {
                var _this = this
                this.axios.get("/api/index").then(function(data) {
                        console.log(data)

                        _this.$router.push({
                            name: _this.$route.params.url,
                            params: {
                                data: data.data
                            }
                        })
                    })
                    // this.$router.push({
                    //     name: "loading",
                    // })

            }
        },
        components: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div {
        /*height: 100%*/
    }
</style>