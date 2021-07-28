const scene = document.querySelector('a-scene');

function setupPanel() {
  document.getElementById("lightsButton").addEventListener('click', handleLights);
  document.getElementById("lightsButton").addEventListener('click', handleMovie);
}

function handleLights() {
  const light = document.querySelector("#point-light");
  light.components['toggle-light'].toggle();

  const switchSound = document.querySelector('#switch-sound');
  switchSound.play();

  const room = document.querySelector('#room');
  room.components['toggle-lamp-materials'].toggleEmissiveNodes();
}

function handleMovie(button){
  const movie = document.querySelector('#movie');
  if (movie.paused){
    movie.play();
    button.innerHTML = 'Pause the movie'
  }else{
    movie.pause();
    button.innerHTML = 'Put the movie'
  }
}

function fadeLoadingOverlay() {
  const assetManager = document.querySelector('a-assets');

  assetManager.addEventListener('loaded', ()=>{
    setTimeout(()=>{
      const overlay = document.querySelector('.loading-overlay');
      overlay.classList.add('loading-overlay--disabled');
    },1500)
  });
}

fadeLoadingOverlay()

window.onload = ()=>{
  setupPanel()
}
