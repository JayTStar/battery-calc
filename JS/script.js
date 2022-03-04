let componentes = [];

function getInfo(){
    let status = [];
    const local = document.querySelector("main section ul");

    const nome = local.querySelector("#nome");
    const tensao = local.querySelector("#tensao");
    const corrente = local.querySelector("#corrente");
    const quantidade = local.querySelector("#quantidade");

    const componente = {nome: nome.value, tensao: parseFloat(tensao.value).toFixed(2), corrente: parseFloat(corrente.value).toFixed(2), quantidade: parseInt(quantidade.value).toFixed(0), potencia: parseFloat(corrente.value * tensao.value).toFixed(2)};

    if(componente.tensao === "NaN"){
        alert("A tensão deve ser um número");
        status.push(false);
    }
    if(componente.corrente === "NaN"){
        alert("A corrente deve ser um número");
        status.push(false);
    }
    if(componente.quantidade === "NaN"){
        alert("A quantidade deve ser um número");
        status.push(false);
    }

    console.log(status);

    if(status.length === 0){
        cleanInput();
        return componente;
    }

}

function showOnScreen(){
    const local = document.querySelector("main aside ul");
    const componente = getInfo();

    if(componente){
        const estrutura = `<div class="componente"> <div class="topo"><p>${componente.nome}</p>  <p>X${componente.quantidade}</p></div> <div> <p>${componente.tensao}V</p> <p>${componente.corrente}A</p> <p>${componente.potencia}W</p> </div> </div>`

        local.innerHTML += estrutura;

        console.log(componente);

        componentes.push(componente);
    }
    
}

function cleanInput(){
    document.querySelector("main section ul #nome").value = "";
    document.querySelector("main section ul #tensao").value = "";
    document.querySelector("main section ul #corrente").value = "";
    document.querySelector("main section ul #quantidade").value = "";    
}

function calcConsumo(){
    const tamanho = componentes.length;
    let resultado = 0;

    for(i=0; i<tamanho; i++){
        resultado += componentes[1].potencia * componentes[i].quantidade;
    }

    return resultado;
}