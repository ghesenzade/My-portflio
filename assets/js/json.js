import data from "./data.json" assert { type: "json" };


// ...................................SLIDER...............................
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let success = data.product;
document.querySelector(".swiper-wrapper").innerHTML = success
.map((item) => {
    let { imgUrl, id } = item;
    return (
    `
        <div class="swiper-slide">
            <img src="${imgUrl}" alt="Image ${id}">
        </div>
    `
    );
})
.join("");


// .....................................PROJECT........................................
let project = data.projects;
project.map((data) => {
    if (data.id >= 1 && data.id <= 5) {
        document.querySelector('.first').innerHTML += `
        <div class="project">
        <img src="${data.image}" alt="${data.name}">
        <div class="card-body">
            <h3 class="card-title">${data.name}</h3>
            <a href="${data.url}" target="_blank">Get Source Code</a>
        </div>
    </div>
        `;
    } else if (data.id >= 6 && data.id <= 9) {
        let projectHtml = `
            <div class="project">
                <img src="${data.image}" alt="${data.name}">
                <div class="card-body">
                    <h3 class="card-title">${data.name}</h3>
                    <a href="${data.url}">Get Source Code</a>
                </div>
            </div>
        `;
        if (data.id === 6) {
            projectHtml = projectHtml.replace('<img', '<img class="hundle"');
        }
        // if (data.id === 7) {
        //     projectHtml = projectHtml.replace('<img', '<img class="balance"');
        // }
        document.querySelector('.second').innerHTML += projectHtml;
    } else {
        let projectHtml = `
            <div class="project">
                <img src="${data.image}" alt="${data.name}">
                <div class="card-body">
                    <h3 class="card-title">${data.name}</h3>
                    <a href="${data.url}">Get Source Code</a>
                </div>
            </div>
        `;
        // if (data.id >=10 && data.id <=12) {
        //     projectHtml = projectHtml.replace('<img', '<img class="top"');
        // }
        document.querySelector('.third').innerHTML += projectHtml;
    }
});