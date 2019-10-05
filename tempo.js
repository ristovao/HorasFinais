var repetir = setInterval(tempo ,1000);
function tempo() {
    var dataAgora = new Date();
    var dataFinal = new Date("12/18/2017 GMT-0300");
    var diferenca = Math.abs(dataFinal.getTime() - dataAgora.getTime());
    var dias = Math.floor(diferenca / (1000 * 3600 * 24));
    var horas = Math.floor(diferenca / (1000 * 3600 ))%24;
    var minutos = Math.floor(diferenca / (1000 * 60))%60;
    var segundos = Math.floor(diferenca / (1000))%60;
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas ;
    document.getElementById("minutos").innerHTML = minutos ;
    document.getElementById("segundos").innerHTML = segundos ;
}
