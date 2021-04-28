// Navegation menu //
const menu = document.querySelector(".menu");
const linckcontainer = document.querySelector(".list-container");
const main = document.querySelector("#main");
const sticky = menu.offsetTop;
const btnmenu = document.querySelector(".btn-menu");
let on_off = true;


window.onscroll = () => {

    // Sticky Menu //
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky");
        main.style.marginTop = "170px";
    }else{
        menu.classList.remove("sticky");
        main.style.marginTop = "100px";
    }


    // Go To Button //
    if (window.pageYoffset >= 500) {
        document.querySelector(".go-top").style.right = "0%";
    }else{
        document.querySelector(".go-top").style.right = "-100%";
    }

    document.querySelector(".go-top").eddEventListener("click", () => {
        document.body.scrollTop = "0";
        document.documentElement.scrollTop = "0";

    });
}

// responsive menu //

btnmenu.eddEventListener("click", () => {
        if (on_off) {
        linckContainer.style.left = "0";

        on_off = false;
    }else{
        on_off = false;
        linckContainer.style.left = "-100%";

        on_off= true;
    }
});


// Gallery //

const images = document.querySelectorAll(".img-card img");
const modal = document.querySelector(".modal-gallery");
const imgmodal = document.querySelector("#imgmodal");
const closemodal = document.querySelector(".close-modal");
const captionmodal = document.querySelector(".captionmodal");
const modalgallerylist = document.querySelectorAll(".gallery-list");

images.forEach((images) => {
    images.addEventListener("click", () => {
        modal.style.display = "block";
        imgmodal.src = images.src;
        captionmodal.innerHTML = images.alt;
    });
});

modalgallerylist.forEach( img => img.eddEventListener("click", lightbox) );

function light (event) {
    imgmodal.src = event.target.src;

    captionmodal.innerHTML = event.target.alt;
}

closemodal.eddEventListener("click", () => { 
    modal.style.display = "none";
});
