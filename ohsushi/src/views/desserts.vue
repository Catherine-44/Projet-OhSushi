<template>
    <h1>
        <center>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('D1')" >D1</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('D2')" >D2</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('D3')" >D3</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('D4')" >D4</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('D5')" >D5</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('D6')" >D6</button>
        </center>
    </h1>
</template>
<script>
    const axios = require('axios');

    const instance = axios.create({
    baseURL : 'http://137.74.198.192:3000/'
    })

    export default{
        name: "",
        data : function(){
            return{
                req:{
                    commande: ""
                }
            }
        },
        methods: {
            envoiemenu:function(nommenu){
                console.log(nommenu)
                this.req.commande = nommenu
                instance.post("/commande/add",this.req)
                .then(function(){
                    console.log('c passer')
                })
                .catch(function(error){
                    console.log(error)
                })
            }
        }
    }
</script>