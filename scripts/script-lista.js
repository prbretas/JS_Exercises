const inCEP = document.getElementById('cep-input')
const divResult = document.getElementById("div-result")

/***************************************************/
const resLog = document.getElementById("res-log")
const resBai = document.getElementById("res-bai")
const resCid = document.getElementById("res-cid")
const resEst = document.getElementById("res-est")
const resUf = document.getElementById("res-uf")
const resCep = document.getElementById("res-cep")

/************************ BUTTONS ************************/
const btnAdd = document.getElementById('b-add')
const btnSave = document.getElementById('b-save')
const btnLoad = document.getElementById('b-load')


const ulItens = document.getElementById('lista-itens')

let itens = []
recuperarItens()
/***************** CONSULTA DE CEP ************************************ */

function buscaCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((resposta) => {
      resposta.json().then((json) => {
        console.log('SUCESSO', json)
      })
    })
    .catch((erro) => {
      console.log('FALHA', erro)
    })
    .finally(() => {
      console.log('FINALMENTE')
    })
}

async function buscaAsyncCEP(cep) {
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const json = await resposta.json()
    console.log('SUCESSO-ASYNC', json)
    resLog.innerText = `LOGRADOURO: ${json.logradouro}`
    resBai.innerText = `BAIRRO: ${json.bairro}`
    resCid.innerText = `CIDADE: ${json.localidade}`
    resUf.innerText = `UF: ${json.uf}`
    resEst.innerText = `ESTADO: ${json.uf}`
    resCep.innerText = `CEP: ${json.cep}`
  } catch (erro) {
    console.log('FALHA', erro)
  } finally {
    console.log('FINALMENTE')
  }
}

btnAdd.addEventListener('click', () => {
  //buscaCEP(inCEP.value)
  adicionaItem
  buscaAsyncCEP(inCEP.value)
})


/**************************************************************/
function atualizaLista() {
  ulItens.innerHTML = ''

  itens.forEach((inCEP, indice) => {
    const li = document.createElement('li')
    li.className = 'item-lista'
    li.innerHTML = `
    <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
    aria-expanded="false" aria-controls="collapseExample">
    ENDEREÇO ${indice + 1}
    </button>

    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <div id="div-result">
                <p id="res-log">LOGRADOURO:${resLog}</p>
                <p id="res-bai">BAIRRO: ${resBai}</p>
                <p id="res-cid">CIDADE: ${resCid}</p>
                <p id="res-est">ESTADO: ${resEst}</p>
                <p id="res-uf">UF: ${resUf}</p>
                <p id="res-cep">CEP: ${inCEP}</p>
            </div>
        </div>
    </div>
  `;

    const btnDel = document.createElement('button')
    btnDel.innerText = 'x'
    btnDel.classList = 'btnDel'

    btnDel.addEventListener('click', () => removeItem(indice))
    li.appendChild(btnDel)
    ulItens.appendChild(li)
  })
}

function adicionaItem() {
  const nomeItem = inCEP.value

  if (nomeItem === '') {
    alert('Informe o número de um CEP!')
  } else {
    itens.push(inCEP.value)
    atualizaLista()
    salvarItens()
    inCEP.value = ''
  }
}

function removeItem(indice) {
  const itensAtualizado = []
  for (let i = 0; i < itens.length; i++) {
    if (i !== indice) {
      itensAtualizado.push(itens[i])
    }
  }
  itens = itensAtualizado
  atualizaLista()
  salvarItens()
}

function salvarItens() {
  const itensJSON = JSON.stringify(itens)
  localStorage.setItem('itens', itensJSON)
}

function recuperarItens() {
  const itensJSON = localStorage.getItem('itens')
  if (itensJSON !== null) {
    itens = JSON.parse(itensJSON)
    atualizaLista()
  }
}



buscaAsyncCEP();
btnAdd.addEventListener('click', adicionaItem)
btnSave.addEventListener('click', salvarItens)
btnLoad.addEventListener('click', recuperarItens)



