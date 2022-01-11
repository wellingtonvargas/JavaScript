var num = window.document.querySelector('input#fnum')
var lista = window.document.querySelector('select#flista')
var res = window.document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
}


document.addEventListener("keypress", function(e){
    if(e.key === 'Enter') {
        var btn = document.querySelector('input#adicionar')

        btn.click()
    }
})


function inLista(n, l)  {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}



function finalizar() {
    if (valores.length == 0) {
        window.alert('Por favor digite os dados')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0 

        /* OUTRA MANEIRA DE SER REALIZADO
        for(pos in valores) {
            soma += valores[pos]
            if(maior < valores[pos] ) {
                maior = valores[pos]
            }
            if (menor > valores[pos]) {
                menor = valores[pos]
            }

        }
        */
        //TOMAR MUITO CUIDADO PARA NÃO COLOCAR for(var pos = 0 ; pos <= valores.length ; pos++ )
        // O IGUAL FAZ COM QUE NÃO VIRE UM NÚMERO 
        for(var pos = 0 ; pos < valores.length ; pos++ ) {
            soma += valores[pos]
            if(maior < valores[pos] ) {
                maior = valores[pos]
            }
            if (menor > valores[pos]) {
                menor = valores[pos]
            }
        }

        media = soma / tot 
        res.innerHTML = `<p>Foram adicionados ${tot} números</p> `
        res.innerHTML += `<p>O maior Número é ${maior}</p> `
        res.innerHTML += `<p>O menor número é ${menor}</p> `
        res.innerHTML += `<p> A soma dos Números adicionados é ${soma} </p>`
        res.innerHTML += `<p> A média dos números adicionados é ${media} </p>`
    }
}




