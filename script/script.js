// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

let listExp = document.querySelectorAll('.list-item-experiences');

listExp.forEach(function(item){
    item.addEventListener("click", myFunction);
});

function myFunction() {
    var itemActive = document.querySelector("li.list-item-experiences.active")
    var itemInactive = document.querySelector("li.list-item-experiences.inactive")

    if(itemActive){
        this.classList.add("inactive");
        this.classList.remove("active");
        let newUl = this.childNodes[3];
        newUl.style.display = 'none';
        this.style.listStyle = 'disclosure-closed' 
    } else {
        this.classList.add("active");
        this.classList.remove("inactive");
        let newUl = this.childNodes[3];
        newUl.style.display = 'block';
        this.style.listStyle = 'disclosure-open' 
    }

    if(itemActive == false && itemInactive == false){
        this.children.style.display = 'block';
    }   
}

let experience = document.querySelectorAll('.experience a');

experience.forEach(function(item){
    item.addEventListener('click',newFuntion);
})

function newFuntion() {
    var itemActive = document.querySelector(".experience.active")
    var itemInactive = document.querySelector(".experience.inactive")

    console.log(itemActive)
    if(itemActive){
        this.classList.add("inactive");
        this.classList.remove("active");
        document.querySelector(".experience ul").style.display = 'none';
    } else {
        this.classList.add("active");
        this.classList.remove("inactive");
        document.querySelector(".experience ul").style.display = 'block';

    }

    if(itemActive == false && itemInactive == false){
        this.children.style.display = 'block';
    }  
}