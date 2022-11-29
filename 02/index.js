function statusDoCarro(ligado,velocidade){
    if(ligado){
        console.log(`carro ligado. Velocidade: ${velocidade}.`);
    }else{
        console.log(`carro desligado. Velocidade: 0.`)
    }
}

const carro={
    ligado: false,
    velocidade: 0,
    ligar:function(){
        if (this.ligado){
            console.log("Este carro já está ligado.");
        }else{
            this.ligado=true;
            statusDoCarro(this.ligado, this.velocidade);
        };
    },
    desligar: function(){
        if (!this.ligado){
            console.log("Este carro já está desligado");
        }else{
            this.ligado=false;
            this.velocidade=0;
            statusDoCarro(this.ligado, this.velocidade);
        };
    },
    acelerar: function(){
        if(!this.ligado){
            console.log("Não é possivel acelerar um carro desligado");
        }else{
            this.velocidade+=10;
            statusDoCarro(this.ligado, this.velocidade);
        };
    },
    desacelerar: function(){
        if(!this.ligado){
            console.log("Não é possivel desacelerar um carro desligado.");
        }else if(this.velocidade>0){
            this.velocidade= this.velocidade-10;
            statusDoCarro(this.ligado, this.velocidade);
        };
    }

}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();