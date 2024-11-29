let musica;

function preload(){
  musica = loadSound("musica.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}