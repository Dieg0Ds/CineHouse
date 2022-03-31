"Teste de commit"
let filmes = require('./database/catalogo.json') //não esquecer o .json
let cinema = "Cine Belas Artes 2.0"

// console.log(cinema)
//array []
//objeto{}
// console.log(listaFilmes)

// let filmes = [
//     {
//         codigo: 1,
//         titulo: "Rambo",
//         duracao: 150,
//         genero: "Ação",
//         emCartaz: true
//     },
//     {
//         codigo: 2,
//         titulo: "Star Wars",
//         duracao: 240,
//         genero: "Fictício/Fantasia",
//     emCartaz: false
// },
// {
//     codigo: 3,
//     titulo: "Pulp Fiction",
//     duracao: 180,
//     genero: "cult",
//     emCartaz: true
// }
// ]

//ADICIONA4R FILME

let filme4 = {
    codigo: 4,
    titulo: "Pokémon",
    duracao: 180,
    genero: "Desenho",
    emCartaz: false
}
filmes.push(filme4)
//

// codigo: codigo, //é passado como objeto apenas o nome da propriedade...
// titulo: titulo,  // ...cujo valor é atribuído como parâmetro da função

// function adicionarFilme(titulo, duracao, genero, emCartaz) {
//     const filme = {
//         codigo: catalogo.length + 1, 
//         titulo,                      
//         duracao, // duracao: duracao,
//         genero, // genero: genero,
//         emCartaz, // emCartaz: emCartaz
//     }
//     filmes.push(filme)
// }
// adicionarFilme(5, "Anaconda", 150, "Ação/Suspense", false)
// console.log(filmes)

//
// imprimeTitulo: function(){
//     console.log(titulo)
// filme.imprimeTitulo()
//

//find() USADO PARA LOCALIZAR UMA FUNÇÃO DENTRO DO CÓDIGO
//Busca somente pela localização index dentro do array

// let buscaF = filmes.at(5) 
// console.log(buscaF)

//Call back
//Função armazenada à variável para fazer a condição

function buscarFilmes(codigo) {
        const filmeEncontrado = filmes.find(function (filme){   
        return filme.codigo == codigo //
        })
        return filmeEncontrado
    }
//     const filmeEnc = buscarFilmes(4) 


//Se for DIFERENTE de undefined

// if (filmeEnc != undefined) { 
//         console.log(filmeEnc.titulo)
//     } else {
//             console.log("O filme não foi encontrado")
//         }

//ALTERAR FILME
//Ex: let só existe dentro do bloco de código

// function alterarFilmeEmCartaz(codigo,busca) {
//     let filmeEncontrado = buscarFilmes(codigo)
//     return filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
//     }
// //     return filmeEncontrado.emCartaz = filmeEncontrado.emCartaz? false:true
// // }
// console.log(alterarFilmeEmCartaz(5))
// let filmeEncontrado = 1 + 1 
// console.log(filmeEncontrado)

let encontrarFilme = codigo => filmes.find((filme) => filme.codigo == codigo);
let filmeEnc = (codigo, callback) =>
  
console.log(filmeEnc(1, encontrarFilme))


// const filmesFiltrados2 = filmes.filter(filme => filme.titulo.includes("o"))
// console.table(filmesFiltrados2)

// console.table(filmes)
// const filmesLongaDuracao = filmes.filter(filme => filme.duracao > 200)
// console.table(filmesLongaDuracao)

// // NÃO NECESSÁRIAMENTE PRECISA DO USO DO == true
// const filmeCartaz = filmes.filter(filme => filme.emCartaz == true) 
// console.table(filmeCartaz)

// // const emCartaz = () => filmes.emCartaz == true
// filmes.forEach(() => filmes.emCartaz == true)

// let emCartaz2 = () => filmes.map((filme) => filme.emCartaz)
// console.table(emCartaz2())










//Outra forma
// alterarStatusEmCartaz = function (status){
//     if (status){
//         emCartaz = false
//     } else {
//         emCartaz = true
//     }
// }



