const imagenes=document.querySelectorAll('.img-galeria')
const imagenesLight=document.querySelector('agregar-imagen')
const contenedorLight=document.querySelector('imagen-light')
const hamburguesa1=document.querySelector('.hamburguesa')


imagenes.forEach(imagenes=>{
    imagenes.addEventListener('click',()=>{
        aparecerImagenes(imagenes.getAttribute('src'))
    
    })
})

contenedorLight=addEventListener('click',(e)=>{
    if(e.target !==imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguesa1.style.opacity='1'
    }
})
const aparecerImagenes =(imagen)=>{
    imagenesLight.src=imagenes
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguesa1.style.opacity='0'


}