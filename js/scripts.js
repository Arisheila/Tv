const app=Vue.createApp({
    data(){
        return {
            isOff:true,
            channels:[
                "/img/dance-cat.gif",
                "/img/snowflake-animated-gif-10.webp",
                "/img/cat-lick.gif",
                "/img/download.jpg"
            ],
            index:0
        };
        
    },
    methods:{
        power() {
            this.isOff=!this.isOff
        },
        prev(){
            this.index -=1
            this.channels[this.index]

        },
        forward(){
            this.index += 1
            this.channels[this.index]
            if (this.index > this.channels.length -1){
                this.index =0
            }
        }
    }
    
    })
    
    
    app.mount('#app')