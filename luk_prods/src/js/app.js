const INICIO_DE_TUDO = 2013;
var anoAtual = 0;
var categoriaAtual = "";

document.onload = autoload();

function autoload() {
    colocarAnoNoCopyright();
    recolherTodosOsAnos();
    aplicarEventosDOM();
}

function colocarAnoNoCopyright() {
    var ano = new Date();
    var container = document.getElementById('cp');
    
    ano = ano.getFullYear();
    anoAtual = ano;
    ano = String(ano);
    ano = ano.slice(2);

    container.innerHTML = `&copy;${INICIO_DE_TUDO}-${ano} - Lucas Matheus Costa (Luk,Luc e 卢卡斯)`;
}
function recolherTodosOsAnos() {
    var container = document.getElementsByName('timeMachine')[0];

    if (typeof(container) !== "undefined") {
        let opcao = null;
        
        for(let i = anoAtual; i >= INICIO_DE_TUDO; i--) {
            opcao = document.createElement('option');
            opcao.value = i;
            opcao.innerText = String(i);
            if (i == INICIO_DE_TUDO) {
                opcao.innerText = "200X-13";
            }
            container.appendChild(opcao);
            opcao = null;
        }
    }
}
function mapearObras() {
    var container = document.getElementById('containerConteudo');
    var tipo = categoriaAtual;

    fetch('../../src/data/db.json')
    .then((r) => r.json())
    .then((r) => {
        // Declaração de variáveis
        var vetorDados = [];
        var vetorDadosComFiltroDeTempo = [];
        var timeMachine = document.getElementsByName('timeMachine')[0].value;

        // Limpando o container
        container.innerHTML = "";

        // Ficando invertido o array primário
        r.reverse();

        // Colocando em um vetor secundário
        r.forEach(dado => {
            if (dado.tipo == tipo) {
                vetorDados.push(dado);
            }
        });

        // Fazendo o teste dos anos
        if (timeMachine != "todos") {
            vetorDados.forEach((dado) => {
                if (dado.ano == timeMachine) {
                    vetorDadosComFiltroDeTempo.push(dado);
                }
            });
            vetorDados = vetorDadosComFiltroDeTempo;
            vetorDadosComFiltroDeTempo = null;
        }

        // Construindo o array
        vetorDados.forEach((objeto) => {
            let novoItem = converterObjetoEmListaHTML(tipo,objeto);
            container.appendChild(novoItem);
        })
    })
    .catch((e) => {
        console.log(e);
    });
}
function converterObjetoEmListaHTML(tipo,objetoPost) {
    var novoItem = document.createElement('li');
    novoItem.className = `arquivo_${tipo}`;
        var novoLink = document.createElement('a');
        novoLink.target = '_blank';
        novoLink.href = objetoPost.url;
        novoLink.innerText = `${objetoPost.titulo} (${objetoPost.ano})`;
        novoItem.appendChild(novoLink);
    return novoItem;
}
function aplicarEventosDOM() {
    var containerTimeMachine = document.getElementsByName('timeMachine')[0];
    containerTimeMachine.addEventListener('change',(evento) => {
        mapearObras();
    });
}
function definirACategoriaNoEscopo(tipo) {
    categoriaAtual = tipo;
}
function contarONumeroDeProducoes() {
    fetch('src/data/db.json')
    .then((r) => r.json())
    .then((r) => {
        var qtdeDeVideos = r.length;
        
        document.getElementById('contadorDeVideos').innerHTML = `Até este momento, este site contabiliza ${qtdeDeVideos} produções feitas pelo Lucas`;
    })
    .catch((e) => {
        console.log(e);
    });
}