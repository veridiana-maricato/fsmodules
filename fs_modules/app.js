const path = require('path')

const caminhoArquivo = path.resolve(__dirname, 'arq.json')
const escreve = require('./modules/escrever')
const le = require(`./modules/ler`)
// const pessoas = [
//     {nome: 'joao'},
//     {nome: 'maria'},
//     {nome: 'edu'},
//     {nome: 'lula'},
//     {nome: 'fer'},
//     {nome: 'jan'}
// ]
// const json = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, json)

async function leArquivo(caminho){
   const dados = await le(caminho)
   renderizaDados(dados)
}
function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(0))
}
leArquivo(caminhoArquivo)