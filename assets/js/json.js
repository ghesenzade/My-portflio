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

const projectContentFirst = document.querySelector('.first');
const projectContentSecond = document.querySelector('.second');
const projectContentThird = document.querySelector('.third');

data.projects.map((project) => {
    if (project.id >= 1 && project.id <= 4) {
        projectContentFirst.innerHTML += `
        <div class="project">
            <img src="${project.image}" alt="${project.name}">
            <div class="card-body">
                <h3 class="card-title">${project.name}</h3>
                <a href="${project.url}" target="_blank">Get Source Code</a>
            </div>
        </div>`;
    } else if (project.id >= 5 && project.id <= 9) {
        let projectHtml = `
        <div class="project">
            <img src="${project.image}" alt="${project.name}">
            <div class="card-body">
                <h3 class="card-title">${project.name}</h3>
                <a href="${project.url}">Get Source Code</a>
            </div>
        </div>`;
        
        if (project.id == 6) {
            projectHtml = projectHtml.replace('<img', '<img class="top"');
        }
        else if (project.id == 8) {
            projectHtml = projectHtml.replace('<img', '<img class="top"');
        }
        
        projectContentSecond.innerHTML += projectHtml;
    } else if (project.id >= 10 && project.id <=13) {
        const projectHtml = `
        <div class="project">
            <img src="${project.image}" alt="${project.name}">
            <div class="card-body">
                <h3 class="card-title">${project.name}</h3>
                <a href="${project.url}" target="_blank">Get Source Code</a>
            </div>
        </div>
        `;
        projectContentThird.innerHTML += projectHtml;
    }
});
