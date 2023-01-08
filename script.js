let kontenjer = document.querySelector('.container')
let button = document.querySelector('#btn')
let input = document.querySelector('.inputLabel')

button.addEventListener('click', function(e){

    let novi_el = document.createElement('p')
    novi_el.classList = ('novi')
    kontenjer.appendChild(novi_el)

    novi_el.innerText = input.value 
   
    input.value = ''; 

    novi_el.addEventListener('click', function(e){
        novi_el.style.textDecoration = ' line-through'
    })
    novi_el.addEventListener('dblclick', function(e){
        kontenjer.removeChild(novi_el) 
    })
})