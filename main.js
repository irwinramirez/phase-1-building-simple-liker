// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hideError = document.querySelector("#modal")
const allHearts = document.querySelectorAll(".like-glyph")

  hideError.classList.add("hidden")

function globalLiker () {
 document.addEventListener("click", (event) => {
   if(event.target.classList[0] === "like-glyph"){
     mimicServerCall()
     .then((resp) => {
      const activated = event.target.classList.contains("activated-heart")
      if (activated) {
        event.target.classList.remove("activated-heart")
        event.target.innerHTML = EMPTY_HEART;
      }else 
        event.target.classList.add("activated-heart")
        event.target.innerHTML = FULL_HEART;
      

      activated;
     })
     
     .catch((error) => {
      hideError.classList.remove("modal")
      setTimeout(() => {
        hideError.classList.add("modal")},3000)
    })
   }
 })
}

globalLiker()





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
