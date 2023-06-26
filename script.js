// Bring every thing we need
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// Getting slide of length as well
const slidesLength = slideRight.querySelectorAll('div').length

// console.log(slidesLength)

let activeSlideIndex = 0

//reaching last element in nodelist(array)
//multiply that by 100 view port height
slideLeft.style.top = `-${(slidesLength - 1)* 100}vh`

upButton.addEventListener('click', ()=> changeSlide('up'))
downButton.addEventListener('click', ()=> changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    // console.log(sliderHeight)
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            // To get back to the beginning
            activeSlideIndex = 0
        }}
        else if(direction == 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }

        }
    
    
    
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}

