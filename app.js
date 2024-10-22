const input = document.getElementById('input')
const imagesContainer = document.getElementById('images-container')
const imageTemplate = document.getElementById('image-template')

input.addEventListener('change',()=> {
    let addUrl = input.value
    let imageClone = imageTemplate.content.cloneNode(true)
    let image = imageClone.querySelector('img')
    image.src= addUrl
    imagesContainer.appendChild(imageClone);
    input.value=""
})