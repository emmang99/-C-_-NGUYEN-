const keys = document.querySelectorAll('.sound');
const effect = document.querySelectorAll('nav>a');

function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  audio.currentTime = 0;
  audio.play();

}

keys.forEach(function(key){
    key.addEventListener("click", clickSound);
});

function switchEffect(e){
  e.preventDefault();
  let movie = document.querySelector('#movie');
  let game = document.querySelector('#game');
  let quote = document.querySelector('#quote');
  let effect = e.target.dataset['effect'];
  if(effect=="movie"){
    movie.style.display = "flex";
    game.style.display = "none";
    quote.style.display = "none";
    return;
  }
  else if (effect=="game"){
    movie.style.display = "none";
    game.style.display = "flex";
    quote.style.display = "none";
    return;
}
  else (effect=="quote")
    movie.style.display = "none";
    game.style.display = "none";
    quote.style.display = "flex";
}


effect.forEach(function(effect){
  effect.addEventListener("click", switchEffect);
});
