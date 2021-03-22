const lista = [
    {cod:249,produto:'Barra Feliz Páscoa',valor:'R$ 12,00'},
    {cod:403,produto:'Bombonier',valor:'R$ 114,30'},
    {cod:8084,produto:'Bombonier C/Truffas',valor:'R$ 30,00'},
    {cod:8083,produto:'Bombonier C/Truffas',valor:'R$ 59,85'},
    {cod:110,produto:'Bombonier Choco Puro',valor:'R$ 36,00'},
    {cod:412,produto:'Bombonier Drágeas',valor:'R$ 36,00'},
    {cod:408,produto:'Cenoura C/Drágeas',valor:'R$ 11,85'},
    {cod:659,produto:'Cesta C/Alça',valor:'R$ 50,70'},
    {cod:9172,produto:'Cesta Especial',valor:'R$ 58,80'},
    {cod:87,produto:'Cesta Páscoa',valor:'R$ 50,25'},
    {cod:322,produto:'Cesta Páscoa',valor:'R$ 119,85'},
    {cod:390,produto:'Cesta Páscoa',valor:'R$ 148,80'},
    {cod:72,produto:'Cesta Páscoa',valor:'R$ 216,30'},
    {cod:209,produto:'Cesta Páscoa',valor:'R$ 26,70'},
    {cod:709,produto:'Cesta Rústica',valor:'R$ 67,95'},
    {cod:587,produto:'Chocolate Sortido',valor:'R$ 21,75'},
    {cod:586,produto:'Chocolate Sortido',valor:'R$ 43,50'},
    {cod:585,produto:'Chocolate Sortido',valor:'R$ 65,40'},
    {cod:377,produto:'Coelha',valor:'R$ 18,00'},
    {cod:155,produto:'Coelha',valor:'R$ 183,00'},
    {cod:429,produto:'Coelho',valor:'R$ 4,05'},
    {cod:7029,produto:'Coelho',valor:'R$ 4,80'},
    {cod:18,produto:'Coelho',valor:'R$ 9,60'},
    {cod:20,produto:'Coelho',valor:'R$ 24,00'},
    {cod:9240,produto:'Coelho Barra',valor:'R$ 7,20'},
    {cod:21,produto:'Coelho Casal',valor:'R$ 42,00'},
    {cod:39,produto:'Coração',valor:'R$ 15,60'},
    {cod:42,produto:'Coração',valor:'R$ 33,60'},
    {cod:448,produto:'Coração',valor:'R$ 12,00'},
    {cod:160,produto:'Coração',valor:'R$ 62,85'},
    {cod:256,produto:'Coração',valor:'R$ 114,30'},
    {cod:97,produto:'Coração C/Bombons',valor:'R$ 36,00'},
    {cod:302,produto:'Coração C/Bombons',valor:'R$ 65,85'},
    {cod:92,produto:'Coração C/Drágeas',valor:'R$ 12,45'},
    {cod:8075,produto:'Coruja',valor:'R$ 12,45'},
    {cod:8943,produto:'Cx Acrílica Truffas',valor:'R$ 32,55'},
    {cod:170,produto:'Cx Barras',valor:'R$ 6,75'},
    {cod:173,produto:'Cx Barras',valor:'R$ 13,20'},
    {cod:442,produto:'Cx Barras',valor:'R$ 25,80'},
    {cod:367,produto:'Cx Barras',valor:'R$ 51,45'}
]

const precos = []

const pegaPrecos = (array) => {
    lista.forEach((list,index) => array[index] = list.valor )
}

const imprimir = (list) => {
    list+= '1'
    console.log(list)
}


const chama = () => {
    imprimir("Deu certo cara")
    imprimir("Jenio")
}

chama()




