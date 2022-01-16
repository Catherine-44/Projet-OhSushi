<template>
    <div id="commande">
        <head> 
            <meta charset="utf-8">
            <title> Commandes </title>
        </head>
        <center>
            <h1> Commandes </h1>
        </center>
        <li v-for="commande in commandes" :key="commande.Nom">
            <div>
            {{commande.Nom}}
            {{commande.nb}}
            <button type="button" class="btn btn-primary btn-lg mb-2" @click="retireun(commande.Nom)" >-1</button>
            </div>
        </li>
    </div>
</template>

<script>
    const axios = require('axios');
    const instance = axios.create({
        baseURL : 'http://137.74.198.192:3000/'
    })
    export default({
        name: 'commande',
        data : function(){
            return{
                commandes: '',
                nomsdescommandes: [],
                musiqueajouer: [],
                req:{
                    commande: ""
                }
            }
        },
        methods:{
            recherchenewcommand: function() {
                return new Promise((resolve, reject) => {
                    instance.get("/commande/get") 
                    .then((reponse) => {
                        var resul = reponse.data
                        var newnomdescommandes = []
                        for(let i = 0; i < resul.length; i++){
                            if (!(this.commandes)){
                                this.musiqueajouer.push("http://137.74.198.192:3000/audio/"+resul[i].Nom+".m4a")
                            }
                            else if(!(this.nomdescommandes.includes(resul[i].Nom))){
                                for (let j = 0; j < resul[i].nb; j++){
                                    this.musiqueajouer.push("http://137.74.198.192:3000/audio/"+resul[i].Nom+".m4a")
                                }
                            }
                            else if(this.commandes[this.nomdescommandes.indexOf(resul[i].Nom)].nb < resul[i].nb){
                                for (let j = this.commandes[this.nomdescommandes.indexOf(resul[i].Nom)].nb; j < resul[i].nb; j++){
                                    this.musiqueajouer.push("http://137.74.198.192:3000/audio/"+resul[i].Nom+".m4a")
                                }
                            }
                            newnomdescommandes.push(resul[i].Nom)
                        }
                        this.nomdescommandes = newnomdescommandes
                        this.commandes = resul
                        resolve()
                    }) 
                    .catch(function(err){
                        console.log(err)
                        reject()
                    })
                })
            },
            joueson: function(){
                if(this.musiqueajouer.length > 0){
                    var audio = new Audio(this.musiqueajouer[0])
                    audio.play()
                    this.musiqueajouer.shift()
                }
            },
            laboucle: function(){
                const b = this
                setTimeout(function run() {
                    b.recherchenewcommand()
                    b.joueson()
                    setTimeout(run, 2000);
                }, 2000);
            },
            retireun: function(nom){
                this.req.commande = nom
                instance.post("/commande/retireun", this.req)
                this.recherchenewcommand()
            },
        },
        mounted () {
            this.recherchenewcommand().then(() => {
                this.laboucle()
            })
        }
    })
</script>
