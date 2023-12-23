const { createApp } = Vue;

const app = createApp(
    {
        data(){
            return{
                persone: [
                    {
                        nome: "SARA",
                        foto: "sara.png",
                        estratto: false
                    },
                    {
                        nome: "MARTINA",
                        foto: "martina.png",
                        estratto: false
                    },
                    {
                        nome: "GIADA",
                        foto: "giada.png",
                        estratto: false
                    },
                    {
                        nome: "LAURA",
                        foto: "laura.png",
                        estratto: false
                    },
                    {
                        nome: "MORENA",
                        foto: "morena.png",
                        estratto: false
                    },
                    {
                        nome: "TONY",
                        foto: "tony.png",
                        estratto: false
                    },
                    {
                        nome: "TULIO",
                        foto: "tulio.png",
                        estratto: false
                    }
                ],
                estrazione: []
            }
        },
        created() {
            let i=0;
                while(this.estrazione.length !== this.persone.length){
                    let n = Math.floor(Math.random() * this.persone.length);
                    if(!this.estrazione.includes(n) && i != n){
                        this.estrazione[i] = n;
                        i++;
                    }
                }
                console.log(this.estrazione);
        },
        methods: {
            mostra(i) {
                this.persone[i].estratto = !this.persone[i].estratto;
            }
        }
    }
).mount("#app");