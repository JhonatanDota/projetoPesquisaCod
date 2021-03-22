const lista = [
    {cod:249,produto:'Barra Feliz Páscoa',valor:'R$ 12,00'},
    {cod:403,produto:'Bombonier',valor:'R$ 114,30'},
    {cod:8084,produto:'Bombonier C/Truffas',valor:'R$ 30,00'},
    {cod:8083,produto:'Bombonier C/Truffas',valor:'R$ 59,85'},
    {cod:110,produto:'Bombonier Choco Puro',valor:'R$ 36,00'},
    {cod:412,produto:'Bombonier Drágeas',valor:'R$ 36,00'},
    {cod:408,produto:'Cenoura C/Drágeas',valor:'R$ 11,85'},
    {cod:659,produto:'Cesta C/Alça',valor:'R$ 50,70'}
]
    
const pesquisaProduto = (codigo) => {
    let pesquisaPronta = lista.filter((lista) => lista.cod === codigo)
    console.log(pesquisaPronta.length)
    return pesquisaPronta[0].cod
}


const cod = lista.filter(cod => cod.cod === 408).map(prod => prod.produto).concat((lista.filter(cod => cod.cod === 408).map(prod => prod.valor)))

console.log(cod)

const muda = lista.map(a => a.valor.replace('R$',''))

const maiores =  lista.filter(prod => parseInt(prod.valor) > 30)

console.log(muda)

console.log(maiores)

console.log(lista)
const soma = (...nums) => {
    let somados = nums.reduce((a,b) => a+b)
    return somados
}

console.log(soma(3,3,3,4))

const lista = [
    {cod:249,produto:'Barra Feliz Páscoa',valor:'R$ 12,00'},
    {cod:403,produto:'Bombonier',valor:'R$ 114,30'},
    {cod:8084,produto:'Bombonier C/Truffas',valor:'R$ 30,00'},
    {cod:8083,produto:'Bombonier C/Truffas',valor:'R$ 59,85'},
    {cod:110,produto:'Bombonier Choco Puro',valor:'R$ 36,00'},
    {cod:412,produto:'Bombonier Drágeas',valor:'R$ 36,00'},
    {cod:408,produto:'Cenoura C/Drágeas',valor:'R$ 11,85'},
    {cod:659,produto:'Cesta C/Alça',valor:'R$ 50,70'}
]

const ss = [
    1,3,4
]

console.log(ss[2])