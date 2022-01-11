function contar() {
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO], impossível contar.')
    } else {
        res.innerHTML = 'Iniciando a contagem... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido, será considerado passo 1')
            p = 1
        }
        if (p > f ) {
            res.innerHTML = `Impossível contar. O valor do passo (${p}) é maior que o valor final (${f}) `
            alert('[ERRO], revise os dados!')
        }

        else if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
                res.innerHTML += `\u{1f60e}`
            }
        } else {
            for (let c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1f449} `
                res.innerHTML += `\u{1f60e}`
        }
    }
}