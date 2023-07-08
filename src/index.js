// write your code here

function renderOneRamen(ramen) {
 const card = document.createElement('div')
 card.classname = 'card'
 
 card.innerHTML = ` <img src = "${ramen.image}">`
 document.querySelector("#ramen-menu").appendChild(card)
 
}
function getAllRamen(){

document.addEventListener("DOMContentLoaded", () => {
    fetch("http:/localhost:3000/ramens")
    .then(response=> response.json())
    .then(ramens => ramens.forEach(ramen => renderOneRamen(ramen)))

})
};
getAllRamen()
function getRamenImage() {
const images = document.querySelectorAll('.ramen-menu');
images.forEach(image => {
    image.addEventListener('click', function() {
    image.src = ramen.image
    });
  });
}
getRamenImage()