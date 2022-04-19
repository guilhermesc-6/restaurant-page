const Home = () => {
  const main = document.getElementById("main");
  const home = document.createElement("div");
  home.classList.add("home");

  const title = document.createElement("h1");
  title.innerText = "Bazilian Food";

  const texts = document.createElement("p");
  texts.innerText = "Experience the foods of Brazil";

  const image = document.createElement("img");
  image.setAttribute("src", "./assets/spaghetti.jpg");
  image.setAttribute("alt", "food");

  home.appendChild(title);
  home.appendChild(texts);
  home.appendChild(image);

  main.innerHTML = "";
  main.appendChild(home);
};

export default Home;
