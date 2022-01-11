function limpaCombo () {
    var combo = document.getElementById('fetaria')
    while (combo.length) {
        combo.remove(0)
    }
}

function gerarfetaria() {
    var sexo = window.document.getElementById('sexo').value
    var etaria = window.document.getElementById('fetaria')
    var res = window.document.getElementById('res')
    var option = ""
    var img = window.document.createElement('img')
    img.setAttribute('id' , 'foto')
    
    if ( sexo == ''){
        limpaCombo()
        
    }
    if(sexo == "masculino") {
        limpaCombo()

        option = document.createElement("option")
        option.value = "1"
        option.text = 'bebe'
        etaria.add(option)
       
    

        option = document.createElement("option")
        option.value = "2"
        option.text = 'Jovem'
        etaria.add(option)

        option = document.createElement("option")
        option.value = "3"
        option.text = 'Adulto'
        etaria.add(option)

        option = document.createElement("option")
        option.value = "4"
        option.text = 'Idoso'
        etaria.add(option)

    }

    if(sexo == 'feminino') {
        limpaCombo()

        option = document.createElement("option")
        option.value = "1"
        option.text = 'Bebe'
        etaria.add(option)

        option = document.createElement("option")
        option.value = "2"
        option.text = 'Jovem'
        etaria.add(option)

        option = document.createElement("option")
        option.value = "3"
        option.text = 'Adulto'
        etaria.add(option)

        option = document.createElement("option")
        option.value = "4"
        option.text = 'Idoso'
        etaria.add(option)


    }

    if (etaria = 'bebe') {
        img.setAttribute('src' , 'imagem/bebe-m.jpg')
    }

    res.appendChild(img)

}



