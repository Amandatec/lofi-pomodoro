const musics = document.querySelectorAll('.card');

musics.forEach(music => {
  music.addEventListener('click', playMusic);
});

function playMusic(){
  let isPlaying = this.classList.contains('active')
  let audio = this.lastChild

  if(isPlaying) {
    this.classList.remove('active')
    audio.pause()
    return
  }
  this.classList.add('active')
  audio.play()


}