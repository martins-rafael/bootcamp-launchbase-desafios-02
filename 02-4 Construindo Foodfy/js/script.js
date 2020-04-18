const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function() {
        const img = recipe.getAttribute('id')
        const title = recipe.querySelector('.title').innerHTML
        const author = recipe.querySelector('.author').innerHTML

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `images/${img}.png`
        modalOverlay.querySelector('.modal-title').innerHTML = title
        modalOverlay.querySelector('.modal-author').innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})