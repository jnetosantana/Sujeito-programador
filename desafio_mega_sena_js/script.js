function validarNumero(num) {
    if (num < 6 || num > 9) {
        console.log("Não é possível usar esse número");
        return [];
    }

    let numeros = [];
    while (numeros.length < num) {
        let numeroAleatorio = Math.floor(Math.random() * 60) + 1
        if (!numeros.includes(numeroAleatorio)){
            numeros.push(numeroAleatorio)
        }
    }

    return numeros;
}



// Testes
console.log(validarNumero(5)); // Deve imprimir aviso e retornar []
console.log(validarNumero(6)); // Deve retornar uma lista de 6 números aleatórios entre 1 e 60
console.log(validarNumero(9)); // Deve retornar uma lista de 9 números aleatórios entre 1 e 60
console.log(validarNumero(10)); // Deve imprimir aviso e retornar []