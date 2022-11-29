const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ],
    corrigirProva: function(){
        let acertos= 0;
        for (const item of this.questoes){
            if (item.resposta === item.correta){
                acertos+=1;
            }
        }
        let nota = acertos * (this.valor/this.questoes.length);
        console.log(`O aluno ${this.aluno}, acertou ${acertos} e obteve nota ${nota}`);
    }
};

prova.corrigirProva();
