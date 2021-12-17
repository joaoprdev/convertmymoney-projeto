const axios = require('axios')
const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia%28dataCotacao=@dataCotacao%29?@dataCotacao=%2712-17-2021%27&$top=1&$format=json&$select=cotacaoCompra,cotacaoVenda'

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.value[0].cotacaoVenda

const getCotacao = async () => {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return cotacao
}

module.exports = {
    getCotacaoAPI,
    getCotacao,
    extractCotacao
}