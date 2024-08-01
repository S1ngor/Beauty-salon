window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('scroll', window.scrollY > 0)
})


// tirar default



// MODAL

var btns = document.getElementsByClassName("a-zoom"); 
var header = document.getElementById("header");

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
        event.preventDefault();
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);

       
        modal.style.display = "block";
        var modalContent = modal.querySelector('.modal-content');
        modalContent.style.opacity = "0";
        modalContent.style.transform = "scale(0.7)";
        setTimeout(function() {
            // header.style.display = "none";
            modal.style.opacity = "1";
            modalContent.style.opacity = "1";
            modalContent.style.transform = "scale(1.7)";
        }, 10);
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.opacity = "0";
        var modalContent = event.target.querySelector('.modal-content');
        modalContent.style.opacity = "0";
        modalContent.style.transform = "scale(0.7)";
        setTimeout(function() {
            event.target.style.display = "none";
            header.style.display = "block";
        }, 500);
    }
}

//abas

const tabs = document.querySelectorAll('.nav-link');

tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        event.preventDefault();
        tabClicked(tab);
    });
});

const tabClicked = tab => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    setTimeout(() =>{
        contents.forEach(content => content.classList.remove('content-show'));
    },50);

    const contentId = tab.getAttribute('content-Id');
    const content = document.getElementById(contentId);


    setTimeout(() => {
        content.classList.add('content-show');
    }, 50);
};

//SCROLL ANIMATION

const observeElements = document.querySelectorAll('.observe');

const myObserver = new IntersectionObserver((entrie) => {
    entrie.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
})

observeElements.forEach((element)=> myObserver.observe(element))

// scroll top

window.addEventListener('scroll', function(){
    let scroll = this.document.querySelector('.scrollTop');
    scroll.classList.toggle('activeS', window.scrollY > 800)
})

function backTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}


const elementosComClasseB1 = document.getElementsByClassName('b1');


for (const elemento of elementosComClasseB1) {
  elemento.addEventListener('click', function(event) {
    event.preventDefault();
    backTop();
  });
}