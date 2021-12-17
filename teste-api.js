const axios = require('axios')

const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia%28dataCotacao=@dataCotacao%29?@dataCotacao=%2712-17-2021%27&$top=1&$format=json&$select=cotacaoCompra,cotacaoVenda'

axios.get(url).then(res => console.log(res.data.value[0].cotacaoVenda))