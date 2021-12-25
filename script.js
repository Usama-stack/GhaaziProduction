const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function () {
    if (topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

function saveData(){
    var name =document.getElementById("name");
    var email =document.getElementById("email");
}

var form = {
    name: name.value,
    email: email.value 

    console.log(form);
}