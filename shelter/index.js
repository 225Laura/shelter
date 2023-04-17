// --------------------------Burger-Menu-------------------------
const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.burger__icon');

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    })
}

menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
    }
})

menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
    })
})



const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

// --------------------Carousel---------------------------

// const btnLeft = document.querySelector("#btn-left");
// const btnRight = document.querySelector("#btn-right");
// const carousel = document.querySelector("#carousel");
// const itemLeft = document.querySelector("#item-left");
// const itemRight = document.querySelector("#item-right");

// const moveLeft = () => {
//     carousel.classList.add('transition-left');
//     btnLeft.removeEventListener('click', moveLeft);
//     btnRight.removeEventListener('click', moveRight);
// };

// const moveRight = () => {
//     carousel.classList.add('transition-right');
//     btnRight.removeEventListener('click', moveRight);
//     btnLeft.removeEventListener('click', moveRight);
// }

// btnLeft.addEventListener('click', moveLeft);
// btnRight.addEventListener('click', moveRight);

// carousel.addEventListener('animationend', (animationEvent) => {
//     if (animationEvent.animationName === 'move-left') {
//         carousel.classList.remove('transition-left');
//         const leftItems = document.querySelector('#item-left').innerHTML;

//         document.querySelector('#item-active').innerHTML = leftItems;

//     } else {
//         carousel.classList.remove('transition-right');
//     }
    
//     btnLeft.addEventListener('click', moveLeft);
//     btnRight.addEventListener('click', moveRight);
// })


// const mainItem = document.querySelector('.slider-item__main');
// const leftItem = document.querySelector('.slider-item__left');
// const rightItem = document.querySelector('.slider-item__right');
// const slider = document.querySelector('.slider');
// const btnLeft = document.querySelector('btn-left');
// const btnRight = document.querySelector('btn-right');

// function createCard(id, curItem) {
//     let card = document.createElement('div');
//     card.classList.add('card');
//     let num = document.createElement('p');
//     num.classList.add('num');
//     num.textContent = `${id}`;
//     card.append(num);
//     curItem.append(card);
// }

// let arr = [1, 2, 3];
// function createCarousel() {
//     arr.forEach(el => {
//         createCard(el, mainItem)
//     })
// }

// createCarousel();

// let newArr;
// const sliderItem = () => {
//     newArr = [...arr];
//     while (newArr.length < 6) {
//         let number = Math.ceil(Math.random() * 9);
//         if (!newArr.includes(number)) {
//             newArr.push(number);
//         }
//     }
//     newArr.splice(0, 3);
//     console.log(newArr);
// }

// const createSlideItem = () => {
//     sliderItem();
//     newArr.forEach(el => {
//         createCard(el, leftItem);
//         createCard(el, rightItem);

//     })
// }

// createSlideItem();

// const moveLeft = () => {
//     slider.classList.add('transition-to-left');
//     btnLeft.removeEventListener('click', moveLeft);
//     btnRight.removeEventListener('click', moveRight);
// }

// const moveRight = () => {
//     slider.classList.add('transition-to-right');
//     btnLeft.removeEventListener('click', moveLeft);
//     btnRight.removeEventListener('click', moveRight);
// }

// btnRight.addEventListener('click', moveRight);
// btnLeft.addEventListener('click', moveLeft);

// slider.addEventListener('animationend', (animationEvent) => {
//     if (animationEvent.animationName === 'move-to-right') {
//         slider.classList.remove('transition-to-right');
//         mainItem.innerHTML = rightItem.innerHTML;
//     }
// })