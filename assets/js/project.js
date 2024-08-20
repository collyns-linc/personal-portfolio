AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Quiz App",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "A quiz app built using React, Nodejs, Express and MongoDB",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Expense Tracker",
    cardImage: "assets/images/project-page/expense_tracker.png",
    description: "A web application that allows users to track their income and expenses",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "AI Text Summarizer",
    cardImage: "assets/images/project-page/ai-summarizer.png",
    description: "A text summarizer application integrated with AI to summarize text inputs",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Learning Management System",
    cardImage: "assets/images/project-page/lms.jpg",
    description: "Online Learning Management System with capabilities to offer a learning environment for learners, lecturers and admins",
    tagimg: "https://mde-inc.com/wp-content/uploads/2020/10/LMS.jpg",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "E-Commerce Mobile Application",
    cardImage: "assets/images/project-page/ecommerce.png",
    description: "A mobile e-commerce application built using Flutter",
    tagimg: "https://cdn.iconscout.com/icon/ecommerce-app.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Hospital Management System",
    cardImage: "assets/images/project-page/Hospital-Management-System.jpg",
    description: "HMS developed using PHP",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    tagimg: "https://cdn.iconscout.com/icon/book.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Puzzle Game",
    cardImage: "assets/images/project-page/slide-puzzle.png",
    description:
      "A sliding tile puzzle game built using JavaScript",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "File Manager",
    cardImage: "assets/images/project-page/file-manager.png",
    description: "A file management application developed using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Job Tracking System",
    cardImage: "assets/images/project-page/job-tracker.jpg",
    description: "Built using Python Django framework",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
  {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://lincsoftwares.tech",
    Githublink: "https://github.com/Collins331",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                    <h1 class="title">
                        <a href="${Previewlink}">${title}</a>
                    </h1>
                </div>
                <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  let input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
