<template>
    <h1>
        <center>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B1')" >B1</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B2')" >B2</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B3')" >B3</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B4')" >B4</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B5')" >B5</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B6')" >B6</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B7')" >B7</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B8')" >B8</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B9')" >B9</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('B10')" >B10</button>
        </center>
    </h1>
</template>
<script>
    const axios = require('axios');

    const instance = axios.create({
    baseURL : 'http://localhost:3000/'
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