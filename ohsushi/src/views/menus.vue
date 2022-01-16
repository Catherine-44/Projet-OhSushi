<template>
    <h1>
        <center>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('FP')" >FP</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('FB')" >FB</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('BC5')" >BC5</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('P25')" >P25</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('P19')" >P19</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('P30')" >P30</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('P30a')" >P30a</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('P35a')" >P35a</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('P40')" >P40</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('C1')" >C1</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('C2')" >C2</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('C3')" >C3</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('C4')" >C4</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('C5')" >C5</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('C6')" >C6</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('BT1')" >BT1</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('BT2')" >BT2</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('NS1')" >NS1</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('NS2')" >NS2</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('NS3')" >NS3</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('NM1')" >NM1</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('NM2')" >NM2</button>
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="envoiemenu('TA1')" >TA1</button>
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