// Autoload
function autoload()
{
	acionarCopyright();
}

/* Adicionar os direitos autorais no rodapé */
function acionarCopyright()
{
	var anoCorrente = "0000"; // type: <string>
	var containerAnoAtual = document.querySelector("#cp_ano"); // type: <HTMLElement span>

	anoCorrente = new Date().getFullYear().toString();
	containerAnoAtual.innerHTML = anoCorrente;
}

// Carregado
autoload();