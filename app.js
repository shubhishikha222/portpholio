const yearEl = document.getElementById("year");
const filterEl = document.querySelectorAll("#filters li");
const projectsEl = document.getElementById("projects");
const showDetails = document.getElementById("detailsbtn");
const projectboxEl = document.getElementById("projectbox");
const BannerEl = document.querySelector(".Banner");

yearEl.innerHTML = new Date().getFullYear();

for (let i = 0; i < filterEl.length; i++) {
	filterEl[i].addEventListener('click', function (e) { 
		document.querySelector("#filters li.active").classList.remove('active');
		filterEl[i].classList.add('active');
		let tag = e.target.id;
		renderProjects(tag);
	})
}

const myProjects = [
    {
        name: "Analog Clock with Day",
        img: "./assets/projects-preview/analog-clock-preview.png",
        codeUrl: "https://github.com/imhrishikesh7/analog-clock.git",
        liveUrl: "https://imhrishikesh7.github.io/analog-clock/",
        description: "An analog clock with week day.",
        tags: ['html', 'js']
    },
    {
        name: "E-Commerce Website",
        img: "./assets/projects-preview/ecommerce-preview.png",
        codeUrl: "https://github.com/imhrishikesh7/shoplanejsfinalproject.git",
        liveUrl: "https://imhrishikesh7.github.io/shoplanejsfinalproject/",
        description: "E-Commerce website which loads products through an API.",
        tags: ['html','css', 'javascript']
    },
    {
        name: "Stunning Landing Page",
        img: "./assets/projects-preview/Landing-page-preview.png",
        codeUrl: "https://github.com/imhrishikesh7/Stunning-Landing-Page.git",
        liveUrl: "https://imhrishikesh7.github.io/Stunning-Landing-Page/",
        description: "Concept landing page using HTML and CSS.",
        tags: ['css']
    },
    {
        name: "Movies Web App",
        img: "./assets/projects-preview/movies-app-preview.png",
        codeUrl: "https://github.com/imhrishikesh7/react-movies-webapp.git",
        liveUrl: "https://profound-pudding-b3b5ae.netlify.app/",
        description: "A reactJS web app which renders movies info to the DOM through API where user also can search for a movie.",
        tags: ['react']
    },
    {
        name: "User App",
        img: "./assets/projects-preview/admin-panel-preview.png",
        codeUrl: "https://github.com/imhrishikesh7/react-userapp.git",
        liveUrl: "https://taupe-zabaione-f815f3.netlify.app/",
        description: "A reactJS web app which lets user log in and access the admin panel.",
        tags: ['react']
    },
    {
        name: "Flip Card",
        img: "./assets/projects-preview//flip-card-preview.png",
        codeUrl: "https://github.com/imhrishikesh7/flip-card.git",
        liveUrl: "https://imhrishikesh7.github.io/flip-card/",
        description: "A simple CSS flip card webpage.",
        tags: ['css', 'javascript']
    },
];

function renderProjects(tag){
    let output = "";
    for (let i = 0; i < myProjects.length; i++) {
        if (tag == 'all' || myProjects[i].tags.includes(tag)) {

            output += `<div class="Project" id="projectbox">
        <img src="${myProjects[i].img}" class="Banner"  alt="Project Image">
        <div class="Content flex">
            <p class="title" id="title">${myProjects[i].name}</p>
            <p class="flex">
                <a href="${myProjects[i].codeUrl}" target="_blank"><img src="./assets/icons/github.svg" alt="GitHub"></a>
                <a href="${myProjects[i].liveUrl}" target="_blank"><img src="./assets/icons/redirect.svg" alt="Webpage Link"></a>
            </p>
            </div>
            <p class="desc">${myProjects[i].description}</p>
    </div>
        `
    }
}

projectsEl.innerHTML = output;
}

renderProjects('all');

// const showDescription = () => {
//     const titleEl = document.getElementById("title"); 
//     titleEl.style.color = "yellow";
// }



// titleEL.onclick = showDescription();
// const showDescription = () => {
    // projectboxEl.style.width = "40vw";             
    // projectboxEl.style.height = "27vw";
    // projectboxEl.innerHTML = myProjects[i].description;
    // titleEL.style.color = 'yellow';
// }

// titleEL.onclick = showDescription();