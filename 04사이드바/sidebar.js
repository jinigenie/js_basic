<<<<<<< HEAD


var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener('click', function() {

    console.log(sidenav.style.width);

    var wid = sidenav.style.width;

    // if(wid === '' || wid === '200px'){
    //     sidenav.style.width = '0px';
    // } else {
    //     sidenav.style.width = '200px';
    // }

    console.log(window.innerWidth);

    if (window.innerWidth <= 767) {

        if (wid === '' || wid === '0px') {
            sidenav.style.width = '200px';
        } else {
            sidenav.style.width = '0px';
        }

    } else {

        if (wid === '' || wid === '200px') {
            sidenav.style.width = '0px';
        } else {
            sidenav.style.width = '200px';
        }

    }


=======


var menuBtn = document.getElementById("menuBtn");
var sidenav = document.querySelector(".sidenav");

menuBtn.addEventListener('click', function() {

    console.log(sidenav.style.width);

    var wid = sidenav.style.width;

    // if(wid === '' || wid === '200px'){
    //     sidenav.style.width = '0px';
    // } else {
    //     sidenav.style.width = '200px';
    // }

    console.log(window.innerWidth);

    if (window.innerWidth <= 767) {

        if (wid === '' || wid === '0px') {
            sidenav.style.width = '200px';
        } else {
            sidenav.style.width = '0px';
        }

    } else {

        if (wid === '' || wid === '200px') {
            sidenav.style.width = '0px';
        } else {
            sidenav.style.width = '200px';
        }

    }


>>>>>>> b104f4c782b73562c42e89f1406d96d309be8a59
});