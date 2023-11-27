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

document.getElementById('more-1').addEventListener('click', function() {
    var modal = document.getElementById('modal-1');
    var myModal = new bootstrap.Modal(modal);
    myModal.show();
});
document.getElementById('more-2').addEventListener('click', function() {
    var modal = document.getElementById('modal-2');
    var myModal = new bootstrap.Modal(modal);
    myModal.show();
});
document.getElementById('more-3').addEventListener('click', function() {
    var modal = document.getElementById('modal-3');
    var myModal = new bootstrap.Modal(modal);
    myModal.show();
});
document.getElementById('more-4').addEventListener('click', function() {
    var modal = document.getElementById('modal-4');
    var myModal = new bootstrap.Modal(modal);
    myModal.show();
});
document.getElementById('more-5').addEventListener('click', function() {
    var modal = document.getElementById('modal-5');
    var myModal = new bootstrap.Modal(modal);
    myModal.show();
});

let experience = document.querySelectorAll('.experience a');

experience.forEach(function(item){
    item.addEventListener('click',newFuntion(item));
})

const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    const target = this.getAttribute('href');
    const tabPane = document.querySelector(target);

    document.querySelector('.list-group-item.active').classList.remove('active');
    this.classList.add('active');

    document.querySelector('.tab-pane.show.active').classList.remove('show', 'active');
    tabPane.classList.add('show', 'active');
  });
});
function mostrarPainel(painel) {
    // Oculta todos os painéis
    document.getElementById('painel1').style.display = 'none';
    document.getElementById('painel2').style.display = 'none';

    // Mostra o painel selecionado
    document.getElementById('painel' + painel).style.display = 'block';
  }


function newFuntion(item) {
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