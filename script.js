var valorPadrao;
var padrao = window.document.getElementById('txtpadrao').value
if (padrao === "baixo") {
    valorPadrao = 1800;
} else if (padrao === "medio") {
    valorPadrao = 2200;
} else if (padrao === "alto") {
    valorPadrao = 3000;
} else {
    valorPadrao = 0;
}

function indices() {
    var terreno = window.document.getElementById('txtterreno')
    var construida = window.document.getElementById('txtconstruida')
    // conversão dos dados digitados em números
    var nterreno = Number(terreno.value)
    var nconstruida = Number(construida.value)
    var ia = (nconstruida / nterreno) * 100
    var custo = nconstruida * valorPadrao
    var res = window.document.querySelector('div#res')
    res.innerHTML = `Resultados: <br>
                    Taxa de Uso de Solo = ${ia}% <br>
                    Estimativa de Custo: R$ ${custo}`
}