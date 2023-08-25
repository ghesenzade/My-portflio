// changing nav color
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-list-item');

function updateActiveLink() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navItems.forEach(navItem => {
                navItem.querySelector('.nav-link').classList.remove('active');
            });
            navItems[index].querySelector('.nav-link').classList.add('active');
        }
    });
}
updateActiveLink();
window.addEventListener('scroll', updateActiveLink);

// function that when i click navigation links go to the section
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId); 
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function add bg to header when scrolling 100px from top 
// function updateClassesOnScroll() {
//     const scrollPosition = window.scrollY || window.pageYOffset;
//     const header = document.querySelector('.header');
//     if (scrollPosition >= 100) {
//         header.classList.add('bg');
//         const row = document.querySelector('.row');
//         row.classList.add('change');
//     } else {
//         header.classList.remove('bg');
//     }
// }
// window.addEventListener('scroll', updateClassesOnScroll);
// updateClassesOnScroll();




//-------------------- header dropdown-----------------------------------
function toggleDropdown() {
    let dropdownContent = document.querySelector(".click-down");
    let dropdown = document.querySelector('.icon');
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
        dropdown.style.color = "rgba(57, 138, 236, 0.997)"
    } else {
        dropdownContent.style.display = "none";
        dropdown.style.color = "#000";
    }
}

// ----------------------------------Skills------------------------------------------------
function openSkill(event, SkillName) {
    const tabContents = document.querySelectorAll(".tab-content");
    const tabLinks = document.querySelectorAll(".tab-links");

    tabContents.forEach(content => {
        content.style.display = "none";
    });

    tabLinks.forEach(link => {
        link.classList.remove("active");
    });

    const targetTabContent = document.getElementById(SkillName);
    if (targetTabContent) {
        targetTabContent.style.display = "block";
    }
    event.currentTarget.classList.add("active");
}


//.......................................SERVICES.....................................

const accordionContents = document.querySelectorAll(".accordion-content");

accordionContents.forEach(content => {
    const contentHeader = content.querySelector('.content-header');
    const icon = contentHeader.querySelector('i');
    const description = content.querySelector('.description');
    
    contentHeader.addEventListener('click', () => {
        content.classList.toggle('open');
        if (content.classList.contains('open')) {
            description.style.height = `${description.scrollHeight}px`;
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            description.style.height = '0';
            icon.classList.replace('fa-minus', 'fa-plus');
        }
        closeOtherAccordionContent(content);
    });
});

function closeOtherAccordionContent(openContent) {
    accordionContents.forEach(content => {
        if (content !== openContent && content.classList.contains('open')) {
            content.classList.remove('open');
            const contentIcon = content.querySelector('.content-header i');
            const contentDescription = content.querySelector('.description');
            contentIcon.classList.replace('fa-minus', 'fa-plus');
            contentDescription.style.height = '0';
        }
    });
}

// -------------------------------CONTACT--------------------------------------------------

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    const nameRegex = /^[A-Za-z-' ]+$/;
    if (!nameRegex.test(nameInput.value) || nameInput.value.length < 3) {
        Swal.fire("Error", "Please enter a correct name", "error");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        Swal.fire("Error", "Please enter a correct email address", "error");
        return;
    }

    const messageWords = messageTextarea.value.trim().split(/\s+/).length;
    if (messageWords < 10) {
        Swal.fire("Error", "Message too short. Please enter a message with at least 25 words", "error");
        return;
    }

    else{
        Swal.fire("Good Job!","Your message has been sent successfully", "success");
    }
});

