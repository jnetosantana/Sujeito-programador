function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log("Número gerado foi: " + numeros[numeroGerado])
}

sorteador(1, 4, 3, 32, 45, 67, 78, 98, 90)