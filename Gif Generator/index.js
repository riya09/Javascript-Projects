const api = "https://api.giphy.com/v1/gifs/random?",
  api_key = "&api_key=dc6zaTOxFJmzC",
  img_id = document.getElementById("placeholder");
let url = api + api_key;
generate_gif = function() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(giphy) {
      img_id.src = giphy.data.images.original.url;
      document.querySelector('.loader').style.display="none";
    })
    .catch(function(error) {
      console.log(error);
    });
};
window.addEventListener('load',function(){
  generate_gif();
})
document.querySelector('.generator').addEventListener('click',function(){
  generate_gif();
})
