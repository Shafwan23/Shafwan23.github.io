AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Enterprise Java with Spring Boot",
    cardImage: "assets/images/education-page/spring.png",
    moocLink: "https://ineuron.ai/course/Enterprise-Java-with-Spring-Boot-Tech-Neuron?source=search",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    cardImage: "assets/images/education-page/web.png",
    moocLink: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
  },
  {
    title: "The Data Science Course: Complete Data Science Bootcamp",
    cardImage: "assets/images/education-page/ds.png",
    moocLink: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/",
  },
  {
    title: "Java and Spring Framework for Beginners with Spring Boot",
    cardImage: "assets/images/education-page/sp.png",
    moocLink: "https://www.udemy.com/course/spring-5-with-spring-boot-2/",
  },
  {
    title: "Full Stack Blockchain Development",
    cardImage: "assets/images/education-page/bc.png",
    moocLink: "https://ineuron.ai/course/Full-Stack-Blockchain-Development?source=search",
  },
  {
    title: "Blockchain Foundations",
    cardImage: "assets/images/education-page/blockchain.png",
    moocLink: "https://learn.ineuron.ai/lesson/Blockchain-Basics/62d55acf5af3c7a75e42a0c2/course/Blockchain-Foundations/62c303c46960798c933c2f8e",
  },
  {
    title: "Java Community Class",
    cardImage: "assets/images/education-page/java.png",
    moocLink: "https://learn.ineuron.ai/lesson/Java-Live-Community-Session-by-Hyder-Abbas-%7C-Day-01-%7C-Fundamentals-of-Java/6324248d952f5670dbdc9113/course/Java-Community-Class/6315c617ddd217845278e96a",
  },
  // {
  //   title: "Intro to React",
  //   cardImage: "assets/images/education-page/edx.svg",
  //   moocLink: "https://www.edx.org/learn/reactjs",
  // },
  // {
  //   title: "Intro to React Native",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink:
  //     "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  // },
  // {
  //   title: "NodeJS, Express and MongoDB",
  //   cardImage: "assets/images/education-page/coursera2.svg",
  //   moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  // },
  // {
  //   title: "XML-AJAX",
  //   cardImage: "assets/images/education-page/udemy.svg",
  //   moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  // },
  // {
  //   title: "Data Structures & Algorithms",
  //   cardImage: "assets/images/education-page/udacity.svg",
  //   moocLink:
  //     "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  // },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
