function tabuada() {
    var num = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    
    if (num.value.length == 0) {
        alert('[ERRO], por favor, digite um número!.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c < 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
        }
        
    }




}