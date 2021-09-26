var menuLateral = false;
document.onload(autoload());

function autoload() {
    colocarAsAcoesNosBotoes();
    atribuirOCopyright();
    escreverOsEventosNoMenuDeSelecao();
    mudarIdiomaDaPáginaQuandoNecessario();
}
function abrirOuFecharMenuLateral(){
    var menu = document.getElementsByTagName('header')[0];
    var btn = document.getElementById('btnMenu');
    if (menuLateral) {
        menu.style.left = 0;
        btn.src = "../src/img/geral/btnFecharMenu.svg";
        menuLateral = false;
    }
    else {
        menu.style.left = '-55%';
        btn.src = "../src/img/geral/btnAbrirMenu.svg";
        menuLateral = true;
    }
}
function colocarAsAcoesNosBotoes() {
    document.getElementById('btnMenu').addEventListener('click',abrirOuFecharMenuLateral);
}
function atribuirOCopyright() {
    var copyright = document.getElementById('cpr');
    var ano = new Date();
    let email = "contato.lucasmatheuscosta@outlook.com.br"
    let stringDoEmail = `<a href='mailto:${email}'>${email}</a>`;
    const INICIO = 2017;

    ano = String(ano.getFullYear());
    ano = ano.slice(2);
    copyright.innerHTML = `&copy;${INICIO}-${ano}  Lucas Matheus Costa - <${stringDoEmail}>`;
}
function mostrarCartaoDoSite(id) {
    // Esconder os cartões
    var cartoes = document.getElementsByClassName('CartaoSite');
    var TAM = cartoes.length;
    for(let i=0 ;i< TAM; i++) {
        cartoes[i].style.display = 'none';
    }

    // Pegar as informações do id
    let acharAHashtag = id.search('#')+1;
    id = id.slice(acharAHashtag);

    // Mostrar o selecionado
    document.getElementById(id).style.display = 'block';
}

function escreverOsEventosNoMenuDeSelecao() {
    var btnsDoMenuDeSelecao = document.getElementsByClassName('itemDeSelecao');
    let TAM = btnsDoMenuDeSelecao.length;
    for(let i=0; i< TAM; i++) {
        btnsDoMenuDeSelecao[i].addEventListener('click',(e) => {
            mostrarCartaoDoSite(btnsDoMenuDeSelecao[i].href);
        });
    }
}
function mudarIdiomaDaPáginaQuandoNecessario() {
    var caixinhaDeIdiomas = document.getElementsByName('idiomas')[0];
    caixinhaDeIdiomas.addEventListener('change',() => {
        location.href = `../${caixinhaDeIdiomas.value}/`;
    })
}