const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight =  document.querySelector('.imagen-light');
const hamburguer1 = document.querySelector('.Hamburguer');

const btnAdelanta = document.querySelector('#btn-adelantar');
const btnRetrocede = document.querySelector('#btn-retroceder');
let indiceImegen = 0;

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click', (e)=>{

    if(e.target != imagenesLight)
    {
        if (e.target != btnAdelanta && e.target != btnRetrocede){
            contenedorLight.classList.toggle('show');
            imagenesLight.classList.toggle('showImage');
            hamburguer1.style.opacity = '1'
            console.log(e.target)
        }
    }
    console.log(e.target)
});

function aparecerImagen(imagen){
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    hamburguer1.style.opacity = '0'
    indiceImegen = Array.from(imagenes).indexOf(imagen.target);
}

//FUNCIONALIDAD CAMBIAR FOTO

const adelantaImage = () => {
    if(indiceImegen === imagenes.length - 1){
        indiceImegen = -1
    }
    imagenesLight.src = imagenes[indiceImegen + 1].src;
    indiceImegen++;
}

btnAdelanta.addEventListener('click', adelantaImage);

const retroceImagen = () => {
    if(indiceImegen ===0){
        indiceImegen = imagenes.length;
    }
    imagenesLight.src = imagenes[indiceImegen - 1].src;
    indiceImegen--;

}


btnRetrocede.addEventListener('click', retroceImagen);