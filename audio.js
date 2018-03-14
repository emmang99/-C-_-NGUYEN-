const keys = document.querySelectorAll('.button');
const effect = document.querySelectorAll('nav>a');

function clickButton(e){
  let buttonKey = e.target.dataset['button'];
  let audio = document.querySelector(`audio[data-button="${buttonKey}"]`);
  audio.currentTime = 0;
  audio.play();

}

keys.forEach(function(key){
    key.addEventListener("click", clickButton);
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
