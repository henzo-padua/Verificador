function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex [0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','./img/criancam.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','./img/homemjovem.jpg')
            }
            else if (idade < 50 ){
                //adulto 
                img.setAttribute('src','./img/homemadulto.jpg')
            }
            else{
                // idoso
                img.setAttribute('src','./img/homemidoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','./img/criancaf.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','./img/mulherjovem.jpg')
            }
            else if (idade < 50 ){
                //adulto 
                img.setAttribute('src','./img/mulheradulta.jpg')
            }
            else{
                // idoso
                img.setAttribute('src','./img/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}