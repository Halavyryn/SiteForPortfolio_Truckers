// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTo({ top: 0, behavior: "smooth" });// For Safari
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}


/*Function for Popup*/
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

/*Burger menu*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("hamburger_active");
    navMenu.classList.toggle("nav-menu_active");
})

document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click",()=>{
        hamburger.classList.remove("hamburger_active");
        navMenu.classList.remove("nav-menu_active");
    }))


/*Function for transport__block*/
let parent = document.querySelector('.transport__block');
let menuItem = parent.querySelectorAll('.transport__block-item');

parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;

    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('transport__block-item')) {
        for(let i = 0; i < menuItem.length; i++) {
            // Убираем у других
            menuItem[i].classList.remove('transport__block-item-active');
        }
        // Добавляем тому на который нажали
        target.classList.add('transport__block-item-active');
    }
});

