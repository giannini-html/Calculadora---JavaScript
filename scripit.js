    function insert (num) {
       var numero = document.getElementById('output-value').innerHTML;
       document.getElementById('output-value').innerHTML = numero + num;
    } 

    function clean() {
        document.getElementById('output-value').innerHTML = ""; 
    }

    function back() {
        var resultado = document.getElementById('output-value').innerHTML;
        document.getElementById('output-value').innerHTML = resultado.substring(0, resultado.length -1)
    }

    function calcular () {
        var resultado = document.getElementById('output-value').innerHTML;
        if(resultado) {
            document.getElementById('output-value').innerHTML = eval(resultado);
        } else {
            document.getElementById('output-value').innerHTML = "Erro"
        }
    }