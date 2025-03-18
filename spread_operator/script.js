//let primeiros = [1, 2, 3];

//let numeros = [...primeiros, 4, 5, 10];
//console.log(numeros);

let pessoa = {
    nome: "João",
    idade: 45,
    cargo: "RH"
}

let novaPessoa = {
    ...pessoas,
    status: "ATIVO",
    cidade: "Campo Grande / MS"
};
console.log(novaPessoa)