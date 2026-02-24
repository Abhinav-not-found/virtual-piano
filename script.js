var intro = document.getElementById('intro')
var btn = document.querySelector('button')
var body = document.body
var btnA = document.getElementById('btnA')
var btnS = document.getElementById('btnS')
var btnD = document.getElementById('btnD')
var btnF = document.getElementById('btnF')
var btnG = document.getElementById('btnG')
var btnH = document.getElementById('btnH')
var btnJ = document.getElementById('btnJ')
var btnK = document.getElementById('btnK')
var btnL = document.getElementById('btnL')
var btnSemi = document.getElementById('btnSemi')

var audioA = new Audio()
var audioS = new Audio()
var audioD = new Audio()
var audioF = new Audio()
var audioG = new Audio()
var audioH = new Audio()
var audioJ = new Audio()
var audioK = new Audio()
var audioL = new Audio()
var audioSemi = new Audio()

body.addEventListener('keydown',(e)=>{
  switch(e.code){
    case 'KeyA':
      btnA.classList.add('pressed')
      audioA.src = 'https://www.musicca.com/files/audio/tools/piano/28.mp3'
      audioA.currentTime = 0
      audioA.play()
      break
    case 'KeyS':  
      btnS.classList.add('pressed')
      audioS.src = 'https://www.musicca.com/files/audio/tools/piano/29.mp3'
      audioS.currentTime = 0
      audioS.play()
      break
    case 'KeyD':
      btnD.classList.add('pressed')
      audioD.src = 'https://www.musicca.com/files/audio/tools/piano/30.mp3'
      audioD.currentTime = 0
      audioD.play()
      break
    case 'KeyF':
      btnF.classList.add('pressed')
      audioF.src = 'https://www.musicca.com/files/audio/tools/piano/31.mp3'
      audioF.currentTime = 0
      audioF.play()
      break
    case 'KeyG':
      btnG.classList.add('pressed')
      audioG.src = 'https://www.musicca.com/files/audio/tools/piano/32.mp3'
      audioG.currentTime = 0
      audioG.play()
      break
    case 'KeyH':
      btnH.classList.add('pressed')
      audioH.src = 'https://www.musicca.com/files/audio/tools/piano/33.mp3'
      audioH.currentTime = 0
      audioH.play()
      break
    case 'KeyJ':
      btnJ.classList.add('pressed')
      audioJ.src = 'https://www.musicca.com/files/audio/tools/piano/34.mp3'
      audioJ.currentTime = 0
      audioJ.play()
      break
    case 'KeyK':
      btnK.classList.add('pressed')
      audioK.src = 'https://www.musicca.com/files/audio/tools/piano/35.mp3'
      audioK.currentTime = 0
      audioK.play()
      break
    case 'KeyL':
      btnL.classList.add('pressed')
      audioL.src = 'https://www.musicca.com/files/audio/tools/piano/36.mp3'
      audioL.currentTime = 0
      audioL.play()
      break
    case 'Semicolon':
      btnSemi.classList.add('pressed')
      audioSemi.src = 'https://www.musicca.com/files/audio/tools/piano/37.mp3'
      audioSemi.currentTime = 0
      audioSemi.play()
      break
      
    }
    
    setTimeout(()=>{
      btnA.classList.remove('pressed')
      btnS.classList.remove('pressed')
      btnD.classList.remove('pressed')
      btnF.classList.remove('pressed')
      btnG.classList.remove('pressed')
      btnH.classList.remove('pressed')
      btnJ.classList.remove('pressed')
      btnK.classList.remove('pressed')
      btnL.classList.remove('pressed')
      btnSemi.classList.remove('pressed')
    },400)
    
})

setTimeout(() => {
  intro.style.transform = 'translateY(-100%)'
}, 1000);


