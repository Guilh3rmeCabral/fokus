const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btnAtivado = document.querySelectorAll('.app__card-button');
const musicaFoco = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

// const startPause = document.querySelector('#start-pause');

// let tempoId = null;
// let tempoTotal = 5


musicaFoco.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    mudandoContexto('foco');  
    focoBt.classList.add('active'); 
})

curtoBt.addEventListener('click', () => {
    mudandoContexto('descanso-curto');
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    mudandoContexto('descanso-longo');
    longoBt.classList.add('active')
})

function mudandoContexto(contexto) {
    btnAtivado.forEach((contexto) => {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML= `Otimize sua produtividade<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML= `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

// const contagemRegressiva = () => {
//     iniciar()
//     tempoTotal -= 1;
// }

// startPause.addEventListener('click', contagemRegressiva);

// function iniciar () {
//     tempoId = setInterval (contagemRegressiva, 1000)
// }

