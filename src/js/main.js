/**
 * Marcar data para copyright
 */
function apresentarData()
{
    var data_cpr = document.getElementById("data_cpr");
    var anoCorrente = new Date().getFullYear().toString();
    data_cpr.innerText = anoCorrente;
}

// Função principal/autoload
function main()
{
    apresentarData();
}

main();