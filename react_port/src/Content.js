// import images
import Hero_person from "./assets/images/Hero/person.png";

import Django from "./assets/images/Skills/Django.png";
import git from "./assets/images/Skills/git.png";
import Canva from "./assets/images/Skills/Canva.png";
import reactjs from "./assets/images/Skills/react.png";
import java from "./assets/images/Skills/java.png";
import python from "./assets/images/Skills/python.png";
import Cpp from "./assets/images/Skills/Cpp.png";
import Html from "./assets/images/Skills/Html.png";
import Css from "./assets/images/Skills/Css.png";
import JavaScript from "./assets/images/Skills/JavaScript.png";
import Bootstrap from "./assets/images/Skills/Bootstape.png";
import Mysql from "./assets/images/Skills/Mysql.png";



import Resume from "./assets/resume/Sunil.pdf";





import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsBootstrap, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "Sunil",
    LastName: "Shah",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Month of Experinse in Full stack development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Django",
        para: "Lorem ipsum text  dummy",
        logo: Django,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "java",
        para: "Lorem ipsum text  dummy",
        logo: java,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Git",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
      
      
      
      {
        name: "Cpp",
        para: "Lorem ipsum text  dummy",
        logo: Cpp,
      },
      {
        name: "Html",
        para: "Lorem ipsum text  dummy",
        logo: Html,
      },
      {
        name: "Css",
        para: "Lorem ipsum text  dummy",
        logo: Css,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: JavaScript,
      },
      {
        name: "Bootstrape",
        para: "Lorem ipsum text  dummy",
        logo: Bootstrap,
      },
      {
        name: "MySql",
        para: "Lorem ipsum text  dummy",
        logo: Mysql,
      },
      {
        name: "Canva",
        para: "Lorem ipsum text  dummy",
        logo: Canva,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full Stack Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "Sunil shah",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Subhash Kewat",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Abhishek",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    Resume:"./assets/resume/Sunil.pdf",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
        {
          text: "Email",
          icon: GrMail,
          link: "mailto:shahsunilkumar373@gmail.com",
        },
        {
          text: "Call me",
          icon: MdCall,
          link: "https://wa.me/+91 9926 398581",
        },
        {
          text: "Instagram",
          icon: BsInstagram,
          link: "https://www.instagram.com/its_sunilshah_07",
        },
        {
          text: "Github",
          icon: BsGithub,
          link: "https://github.com/Sunikumarshah",
        },
        {
          text: "Linkdin",
          icon: BsLinkedin,
          link: "https://www.linkedin.com/in/sunil-shah07/",
        },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
