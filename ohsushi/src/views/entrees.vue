<template>
<h1> 
    <center>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E10')" >E10</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E11')" >E11</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E12')" >E12</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E13')" >E13</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E15')" >E15</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E16')" >E16</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E17')" >E17</button>
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('E18')" >E18</button>
    </center>
</h1>
    
</template>
<script>
    const axios = require('axios');

    const instance = axios.create({
    baseURL : 'http://137.74.198.192:3000/'
    })

    export default{
        name: "entrees",
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