function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'manha.png'
        img.style.marginLeft = '90px'
        msg.innerHTML += ' Bom dia!'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'tarde.png'
        img.style.marginLeft = '90px'
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#cc9b33'
    }
    else {
        //Boa noite!
        img.src = 'noite.png'
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = '#515154'
    }
}