const Contact = () => {
  const main = document.getElementById("main");
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const tel = document.createElement("span");
  tel.innerText = "tel: 555-555-5555";

  const email = document.createElement("span");
  email.classList.add("email");
  email.innerText = "E-mail: email@email.com";

  const text = document.createElement("p");
  text.innerText = "Visit US:";

  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.5850428923833!2d-71.05707720315577!3d42.31394089253899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a536976e5f5%3A0x4c1d1e2e9152c7b8!2s1031%20Dorchester%20Ave%2C%20Boston%2C%20MA%2002125%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1650314323192!5m2!1sen!2seua"
  );
  iframe.setAttribute("width", "80%");
  iframe.setAttribute("height", "400");
  iframe.setAttribute("style", "border:0");
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

  contact.appendChild(tel);
  contact.appendChild(email);
  contact.appendChild(text);
  contact.appendChild(iframe);

  main.innerHTML = "";
  main.appendChild(contact);
};

export default Contact;
