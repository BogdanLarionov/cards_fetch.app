//beautifier.io/

// https://fakestoreapi.com/

// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/categories

// https://github.com/HaykInanc/telran_lesson/blob/master/script/script.js

// Написать функцию, которая делает fetch запрос и выводит весь список продуктов в консоль

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
// ---------------------------------------------
// В данном примере используем fundtion diclaration!

const productsElem = document.querySelector("#products");

function renderProductCards(productList) {
  productList.forEach((product) => {
    const prodactCard = getProductCard(product);
    productsElem.append(prodactCard);
  });
}

function getAllPdoducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => renderProductCards(json));
}

getAllPdoducts();

const products = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

// Написать функуию, которая получает на вход данные продукта и возвращает div элемент с отображением продукта.
// Картинку, название, цена

function getProductCard(card_data) {
  const { title, price, image, id } = card_data;

  const container = document.createElement("div");
  const idElem = document.createElement("p");
  const titleElem = document.createElement("p");
  const priceElme = document.createElement("p");

  const imageElem = document.createElement("img");

  container.append(imageElem, idElem, titleElem, priceElme);

  container.classList.add("item");

  idElem.innerText = `id product: ${id}`;
  titleElem.innerText = title;
  priceElme.innerText = `price: ${price}`;

  imageElem.src = image;
  return container;
}

// productsElem.append(getProductCard(products));

// Напишите функцию, которая используя getProductCard
// проходится по всем объектам массива с продуктами
// и для каждого формирует карточку в интерфейсе

// Создать функцию, которая делает запрос на сервер и получает
// все категории
// их необходимо вывести в консоль

function getAllCategories() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

getAllCategories(); // (4) ['electronics', 'jewelery', "men's clothing", "women's clothing"]
