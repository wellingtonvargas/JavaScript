/*function limpaCombo () {
    var combo = document.getElementById('fetaria')
    while (combo.length) {
        combo.remove(0)
    }


function gerarfetaria() {
    
    
    
    
    
    if ( sexo == ''){
        limpaCombo()
        
    }
    if(sexo == "masculino") {
        limpaCombo()


    }

    if(sexo == 'feminino') {
        limpaCombo()

    }

    

}
}*/


function gerarImagem() {
    var sexo = window.document.getElementById('sexo').value
    var etaria = window.document.getElementById('fetaria')
    var res = window.document.getElementById('res')
    var img = window.document.createElement('img')
    img.setAttribute('id' , 'foto')
    

    
    res.innerHTML = ''

    if (etaria = '1') {
        img.setAttribute('src' , 'imagem/bebe-m.jpg')
    }else if (etaria = '2') {
        img.setAttribute('src' , 'imagem/jovem-m.jpg')
    }else if (etaria = '3') {
        img.setAttribute('src' , 'imagem/bebe-m.jpg')
    }else {
        img.setAttribute('src' , 'imagem/bebe-m.jpg')
    }

    res.appendChild(img)

}



