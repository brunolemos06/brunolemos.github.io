// array with Okay projects
const projects = [
    {
        name: 'Bird Game',
        type: 'games',
        img: [  
            'assets/images/projects/bird-game/bird-game(normal).png',
            'assets/images/projects/bird-game/bird-game(gameover).png',
        ],
        description: [
            { title: "Objective", content: "Your goal is to control a bird character and navigate it through the game world while collecting coins to increase your score. Avoid colliding with enemies, as they will end the game." },
            { title: "Controls", content: "You control the bird using an Xbox controller. Use the left joystick to move the bird in different directions. Press the A button to activate a boost, which temporarily increases your speed. Press the B button to quit the game." },
            { title: "Gameplay", content: "The game starts with the bird positioned in the middle of the screen. Coins will appear randomly on the screen, and your task is to collect them by moving the bird into their vicinity." },
            { title: "Score", content: "Each time you collect a coin, your score increases by one. Your current score is displayed on the screen along with a progress bar indicating your progress towards a boost. Collecting coins fills up this progress bar." },
            { title: "Boost", content: "When the boost progress bar is full, you can activate the boost by pressing the A button. This makes the bird move faster for a short duration, allowing you to cover more distance quickly." },
            { title: "Enemies", content: "Enemies will periodically spawn on the screen. They move horizontally from one side to the other. Avoid colliding with them, as they will end the game. As you progress, more enemies will appear, increasing the challenge." },
            { title: "Game Over", content: "If you collide with an enemy, the game ends, and a 'Game Over' screen is displayed. Your final score is shown, and you have the option to restart the game by pressing the A button or quit by pressing the B button." },
            { title: "Difficulty", content: "The game progressively becomes more challenging as you collect more coins and increase your score. More enemies will spawn, and they may move faster, making it harder to avoid collisions." },
            { title: "Music and Sounds", content: "The game features background music and sound effects, adding to the overall gaming experience." },
            { title: "Overall", content: "Overall, 'Bird Game' offers a simple yet engaging gameplay experience where you can test your reflexes and aiming for the highest score possible while avoiding obstacles. It's a classic arcade-style game suitable for players of all ages." }
        ]
    },
    {
        name: 'Door RFID',
        type: 'applications',
        img: [  
            'assets/images/projects/door-rfid/door-rfid-main.png',
            'assets/images/projects/door-rfid/door-rfid-1.png',
            'assets/images/projects/door-rfid/door-rfid-2.png',
            'assets/images/projects/door-rfid/door-rfid-3.png',
            'assets/images/projects/door-rfid/door-rfid-arq1.png',
            'assets/images/projects/door-rfid/door-rfid-arq2.png',
        ],
        description: [
            { title: "Objective", content: "The objective of this project is to create a door lock system that uses RFID tags to grant access to authorized users. The system consists of a door lock, an RFID reader, and an RFID tag. The RFID reader is connected to a microcontroller, which controls the door lock. The RFID tag is used to grant access to the user." },
            { title: "Features", content: "The system has the following features:" },
            { title: "", content: "- The system allows access to authorized users only. Unauthorized users are denied access." },
            { title: "", content: "- The system can store multiple RFID tags, allowing multiple users to access the system.They can rename the tags to identify them easily." },
            { title: "", content: "- The system can be configured in webapp and see the logs of the system." },
            { title: "", content: "- We can add more modules to the system[doors] with ip" },
            { title: "", content: "- To add a rfid tag, you need to go to the webapp and click on write tag, then you need to pass the tag on the reader and the tag will be added to the system." },
        ]
    }
];

function getQueryParam(name) {
    if (!window.location.search) {
        return null;
    }
    const query = window.location.search
        .substring(1)
        .split('&')
        .map((item) => item.split('='))
        .reduce((accumulator, [key, value]) => ({
            ...accumulator,
            [key]: decodeURIComponent(value), // Decode URL-encoded value
        }), {});
    return query[name];
}


function populatePage(project) {
    // Find id = projectname, which is a <h1> tag
    const projectName = document.getElementById('nameproject');
    
    // Check if project is defined and not null
    if (project !== undefined && project !== null) {
        projectName.innerText = project;
    } else {
        // If project is undefined or null, set projectName to an empty string
        projectName.innerText = ""
    }

    //fill the page with all images present in the folder
    const projectImages = document.getElementById('p-image2');
    const projectImages2 = document.getElementById('p-image');
    
    const projectDescription = document.getElementById('project-text'); // p tag

    //<!-- <img class="imgportfolio" src="image" alt="fundo" loading="lazy">
    // verify all img
    var allimages = projects[GameValid(project)].img;
    var description = projects[GameValid(project)].description;
    for (let i = 0; i < allimages.length; i++) {
        const img = document.createElement('img');
        img.classList.add('imgportfolio');
        img.src = allimages[i];
        img.alt = 'fundo';
        img.loading = 'lazy';
        if(i === 0){
            projectImages2.appendChild(img);
        }else{
            projectImages.appendChild(img);
        }
        console.log(allimages[i]);
    }
    // verify description
    description.forEach(info => {
        // Create elements
        const title = document.createElement('h2');
        const content = document.createElement('p');

        // Set content
        title.textContent = info.title;
        content.textContent = info.content;

        // Append elements to container
        projectDescription.appendChild(title);
        projectDescription.appendChild(content);
    });
}
function GameValid(game){
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === game) {
            return i;
        }
    }
    return -1;
}
    
function resetSection() {
    // find class = projects
    if(GameValid(projectFromUrl) !== -1){
        const projectsection = document.getElementById('projectshow');
        projectsection.style.display = 'block';
        const projectdiv = document.getElementById('projectslist');
        projectdiv.style.display = 'none';

        // change active class to when id = home and home2
        const home = document.getElementById('home');
        home.classList.remove('active');
        const home2 = document.getElementById('home2');
        home2.classList.remove('active');

        // change active class to when id = portfolio and portfolio2
        const project = document.getElementById('portfolio');
        project.classList.add('active');
        const project2 = document.getElementById('portfolio2');
        project2.classList.add('active');
        populatePage(projectFromUrl);

        const headerp = document.getElementById('headerporftt');
        // add 

    }else{
        const projectsection = document.getElementById('projectshow');
        projectsection.style.display = 'none';
        const projectdiv = document.getElementById('projectslist');
        projectdiv.style.display = 'block';

        // change active class to when id = home and home2
        const home = document.getElementById('home');
        home.classList.add('active');
        const home2 = document.getElementById('home2');
        home2.classList.add('active');

        // change active class to when id = portfolio and portfolio2
        const project = document.getElementById('portfolio');
        project.classList.remove('active');
        const project2 = document.getElementById('portfolio2');
        project2.classList.remove('active');



    }
}



const projectFromUrl = getQueryParam('name');

// Call the fetchData function with the animal name from the URL
if (projectFromUrl) {
    resetSection(projectFromUrl);
    
} else {
    console.error('Project name not found in URL');
}


function fill_projects(filter){
    console.log("filling projects");
    // remove all projects
    const prj_list = document.getElementsByClassName('project-list');
    while(prj_list[0].firstChild){
        prj_list[0].removeChild(prj_list[0].firstChild);
    }

    // <li class="project-item  active" data-filter-item data-category="applications">
    //     <a href="#">
  
    //         <figure class="project-img">
    //         <div class="project-item-icon-box">
    //             <ion-icon name="eye-outline"></ion-icon>
    //         </div>
  
    //         <img src="./assets/images/project-1.jpg" alt="finance" loading="lazy">
    //         </figure>
  
    //         <h3 class="project-title">Finance</h3>
  
    //         <p class="project-category">Applications</p>
  
    //     </a>
    // </li>
    projects.forEach(project => {
        const li = document.createElement('li');
        li.classList.add('project-item');
        if(filter === 'all'){
          li.classList.add('active');
        }else if(filter === project.type){
          li.classList.add('active');
        }
        li.setAttribute('data-filter-item', '');
        li.setAttribute('data-category', project.type);
  
        const a = document.createElement('a');
        a.href = 'index.html?name=' + project.name;
  
        const figure = document.createElement('figure');
        figure.classList.add('project-img');
  
        const div = document.createElement('div');
        div.classList.add('project-item-icon-box');
  
        const icon = document.createElement('ion-icon');
        icon.name = 'eye-outline';
  
        const img = document.createElement('img');
        img.src = project.img[0];
        img.alt = 'fundo';
        img.loading = 'lazy';
  
        const h3 = document.createElement('h3');
        h3.classList.add('project-title');
        h3.textContent = project.name;
  
        const p = document.createElement('p');
        p.classList.add('project-category');
        //put the first letter in caps
        p.textContent = project.type.charAt(0).toUpperCase() + project.type.slice(1);
  
        figure.appendChild(div);
        div.appendChild(icon);
        figure.appendChild(img);
        a.appendChild(figure);
        a.appendChild(h3);
        a.appendChild(p);
        li.appendChild(a);
        prj_list[0].appendChild(li);
    });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
  
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      fill_projects(selectedValue);
    });
}


fill_projects('all');