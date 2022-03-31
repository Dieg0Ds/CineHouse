//ULTIMA VERSÃO CINEHOUSE

let filmes = require('./database/catalogo.json')
let cinema = 'Cine Belas Artes 2.4.5.6'

const filme4 = {
    codigo: 4,
    titulo: 'Rambo 2',
    duracao: 240,
    genero: 'terror',
    emCartaz: true
}

filmes.push(filme4)

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo
    })

    return filmeEncontrado
}

function adicionarFilme(codigo, titulo, duracao, genero, emCartaz) {
    const filme = { codigo, titulo, duracao, genero, emCartaz }
    filmes.push(filme)
}
adicionarFilme(5, 'Harry Potter 5', 180, 'fantasia', true)

function alterarFilmeEmCartaz(codigo, encontrarFilme) {
    const filmeEncontrado = encontrarFilme(codigo)

    filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true
}
alterarFilmeEmCartaz(5, buscarFilme)

const imprimeFilme = (filme, index) => console.log(index + ' - ' + filme.titulo + ' - ' + filme.emCartaz)

function listarTodosOsFilmes() {
    filmes.forEach(imprimeFilme)
}
// listarTodosOsFilmes()

const filmesFiltrados = filmes.filter(filme => filme.genero == 'terror')
// console.table(filmesFiltrados)


function listarFilmesDeLongaDuracao() {
    const resultado = filmes.filter(filme => filme.duracao >= 240)
    return resultado
}

const filmesDeLongaDuracao = listarFilmesDeLongaDuracao()
// console.table(filmesDeLongaDuracao)

const listarFilmesEmCartaz = () => filmes.filter(function (filme) {
    return !filme.emCartaz
})

console.table(listarFilmesEmCartaz())

//PARA EXPORTAR UM MÓDULO

module.exports = filmes

/* let pessoa = {
    nome: "Diego",
    cpf: '392.451.584-52',
    dataNascimento: '08/10/1984',
    email: 'diegoslv91@gmail.com',
    telefone: ['56145661', '981262617'],
    idade: 30,
    altura: 1.80,
    duracao: 120
}
pessoa.nome = "João" //para alterar a propriedade de um objeto literal
console.log(pessoa)
 */



