// alert("funcionou!");
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

const createHeader = () => {
  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.innerText = "Amazonia";
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const homeLi = document.createElement("li");
  const menuLi = document.createElement("li");
  const contactLi = document.createElement("li");

  homeLi.classList.add("menu-btn");
  menuLi.classList.add("menu-btn");
  contactLi.classList.add("menu-btn");

  homeLi.innerText = "Home";
  menuLi.innerText = "Menu";
  contactLi.innerText = "Contact";

  homeLi.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setButton(homeLi);
    Home();
  });
  menuLi.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setButton(menuLi);
    Menu();
  });
  contactLi.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      return;
    }
    setButton(contactLi);
    Contact();
  });

  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(contactLi);

  nav.appendChild(ul);
  header.appendChild(h1);
  header.appendChild(nav);

  return header;
};

const createMain = () => {
  const main = document.createElement("div");

  main.setAttribute("id", "main");

  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");

  footerText.innerText = `Copyright © ${new Date().getFullYear()}`;

  footer.appendChild(footerText);

  return footer;
};

const setButton = (button) => {
  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
};

const initialWebsite = () => {
  const content = document.querySelector("#content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  Home();
};

initialWebsite();
