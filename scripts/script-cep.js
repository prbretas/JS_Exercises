let itens = []



const listaCEPs = {
  ['99999999']: {
    logradouro: 'Insere logo um CEP AÍ!',
  },
}

function buscaCEPpromise(cep) {
  return new Promise((resolve, reject) => {
    const resultado = listaCEPs[cep]
    const erro = resultado ? null : 'CEP inválido!'
    if (erro) {
      reject(erro)
    } else {
      resolve(resultado)
    }
  })
}

let textoDoP = null
buscaCEPpromise('99999999')
  .then((result) => {
    console.log('SUCESSO', result)
    pElem.innerHTML = result.logradouro
  })
  .catch((error) => {
    console.log('FALHA', error)
  })
  .finally(() => {
    console.log('FIM')
  })

const btnBuscar = document.getElementById('buscar')
const pResult = document.getElementById('resultado')


const resLog = document.getElementById("res-log")
const resNum = document.getElementById("res-num")
const resComp = document.getElementById("res-comp")
const resBai = document.getElementById("res-bai")
const resCid = document.getElementById("res-cid")
const resEst = document.getElementById("res-est")
const resUf = document.getElementById("res-uf")
const resCep = document.getElementById("res-cep")

/*************************** INPUT ******************************/
const logInput = document.getElementById('log-input')
const numInput = document.getElementById("num-input")
const compInput = document.getElementById("comp-input")
const baiInput = document.getElementById("bai-input")
const cidInput = document.getElementById("cid-input")
const estInput = document.getElementById('est-input')
const ufInput = document.getElementById("uf-input")
const inCEP = document.getElementById('cep-input')

const endForm = document.getElementById('endForm')

// exemplo de promise fetch
function buscaCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((resposta) => {
      resposta.json().then((json) => {
        console.log('SUCESSO', json)
        resLog.innerText = json.logradouro
        resNum.innerText = `${numInput}`
        resComp.innerText = `${compInput}`
        resBai.innerText = json.bairro
        resCid.innerText = json.localidade
        resUf.innerText = json.uf
        resCep.innerText = json.cep
      })
    })
    .catch((erro) => {
      console.log('FALHA', erro)
      pResult.style.color = "#F00";
      pResult.innerText = 'CEP inválido!'
      
    })
    .finally(() => {
      console.log('FINALMENTE')
      pResult.innerText = 'SUCESSO!'
    })
}

// exemplo async await
async function buscaAsyncCEP(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const json = await resposta.json()
    console.log('SUCESSO-ASYNC', json)
     resLog.innerText = `LOGRADOURO: ${json.logradouro}`
     resNum.innerText = `NÚMERO: ${numInput.value}`
     resComp.innerText = `COMPLEMENTO: ${compInput.value}`
     resBai.innerText = `BAIRRO: ${json.bairro}`
     resCid.innerText = `CIDADE: ${json.localidade}`
     resUf.innerText = `UF: ${json.uf}`
     resEst.innerText = `ESTADO: ${json.uf}`
     resCep.innerText = `CEP: ${json.cep}`


     endForm.reset() // RESETAR O FORMULARIO DE ENDEREÇO ASSIM QUE O BOTAO FOR CLICADO

  } catch (erro) {
    console.log('FALHA', erro)
    pResult.style.color = "#F00";
    pResult.style.fontWeight = "bold";
    pResult.style.fontSize = "1.3rem";
    pResult.innerText = 'CEP inválido!'
  } finally {
    console.log('FINALMENTE')
  }
}

btnBuscar.addEventListener('click', () => {
  //buscaCEP(inCEP.value)
  buscaAsyncCEP(inCEP.value)
  inCEP.value = ''
  })

