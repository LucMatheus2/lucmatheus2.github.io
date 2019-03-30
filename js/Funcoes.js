isDark = false;

function Horas(){
    var data = new Date();
    var hora = data.getHours;

    if (hora > 18 || hora < 6){
        isDark = true;
        modoNoturno();
    }
}
function modoNoturno(){
    if(isDark == true){
        document.getElementById("Design").href="css/estiloOFF.css";
        document.getElementById("ModoNoturno").src="media/dia.png";
        isDark = false;
    } else {
        document.getElementById("Design").href="css/estiloON.css";
        document.getElementById("ModoNoturno").src="media/noite.png";
        isDark = true;
    }
}