function carregar(){

var msg = window.document.getElementById('frase')
var img = window.document.getElementById('imagem')
var fabaixo = window.document.getElementById('fraseabaixo')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()




if (hora < 10){
hora = '0'+hora
}
if (minutos < 10){
minutos = '0'+minutos
}
if (segundos < 10){
segundos = '0'+segundos
}

msg.innerHTML = (`Agora são exatamente ${hora}:${minutos}:${segundos}`)
var tempo = setInterval(carregar,1000)  


if (hora >= -1 && hora < 6){
    img.src = 'madrugada.png'
    fabaixo.innerText = ('Boa madrugada!!!')
    document.body.style.backgroundImage= "url(gifmadruga.gif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover, contain";
} else if (hora > 6 && hora < 12){
    img.src = 'manha.png'
    fabaixo.innerText = ('Boa manhã!!!')
    document.body.style.backgroundImage= "url(gifmorning.gif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover, contain";
} else if (hora > 11 && hora < 19){
    img.src = 'tarde.png'
    fabaixo.innerText = ('Boa tarde!!!')
    document.body.style.backgroundImage= "url(gifsunset.gif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover, contain";
} else if (hora > 18){
    img.src = 'noite.png'
    fabaixo.innerText = ('Boa noite!!!')
    document.body.style.backgroundImage= "url(gifnight.gif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover, contain";
}

}