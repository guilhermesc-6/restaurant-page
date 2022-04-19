const createCard = (foodTitle, desciptions, foodPrice, img) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.setAttribute("src", img);
  image.setAttribute("alt", foodTitle);

  const title = document.createElement("h2");
  title.innerText = foodTitle;

  const texts = document.createElement("p");
  texts.innerText = desciptions;

  const price = document.createElement("span");
  price.innerText = foodPrice;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(texts);
  card.appendChild(price);

  return card;
};

const Menu = () => {
  const main = document.getElementById("main");
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createCard(
      "Feijoada",
      "Black beans, pig’s ears, feet and tails and beef tongue",
      "$25",
      "./assets/menu/Feijoada.jpg"
    )
  );
  menu.appendChild(
    createCard(
      "Prato Feito",
      "Beef, Rice, Beans, Salad",
      "$10",
      "./assets/menu/prato.jpg"
    )
  );
  menu.appendChild(
    createCard("Picanha", "Picanha", "$35", "./assets/menu/picanha.jpeg")
  );
  menu.appendChild(
    createCard(
      "Pão de Queijo",
      "Cheese",
      "$1,50",
      "./assets/menu/pao-de-queijo.webp"
    )
  );
  menu.appendChild(
    createCard(
      "Açai",
      "Açai, Strawberry, granola",
      "$7",
      "./assets/menu/acai.jpg"
    )
  );
  menu.appendChild(
    createCard(
      "Coxinha",
      "chicken breast",
      "$1,50",
      "./assets/menu/coxinha.webp"
    )
  );

  main.innerHTML = "";
  main.appendChild(menu);
};

export default Menu;
