//start

let numeroDerrotas = 0
let numeroVitorias = 0
let nivelRank = "Sem Rank"

function calculadoraRank (numeroVitorias,numeroDerrotas){

    numeroVitorias -= numeroDerrotas

    if (numeroVitorias < 10)
        nivelRank = "Ferro"
    else if (numeroVitorias >= 11 && numeroVitorias < 21) /* pelas instruções o numero 10 não entra */
        nivelRank = "Bronze"
    else if (numeroVitorias >= 21 && numeroVitorias < 51) 
        nivelRank = "Prata"
    else if (numeroVitorias >= 51 && numeroVitorias < 81) 
        nivelRank = "Ouro"
    else if (numeroVitorias >= 81 && numeroVitorias < 91) 
        nivelRank = "Diamante"
    else if (numeroVitorias >= 91 && numeroVitorias < 101) 
        nivelRank = "Lendário"
    else if (numeroVitorias >= 101) 
        nivelRank = "Imortal"

    console.log ("O Herói tem de saldo de " + numeroVitorias + " e está no nível de "+ nivelRank)

}

calculadoraRank(100,5)
