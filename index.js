var McD = [
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop",
        name: "Big Mac",
        price: "249",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-qpc-deluxe-burger:1-4-product-tile-desktop",
        name: "Quarter Pounder with Cheese Deluxe",
        price: "299",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McDouble-1:1-4-product-tile-desktop",
        name: "McDouble",
        price: "199"
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Hamburger:1-4-product-tile-desktop",
        name: "Hamburger",
        price: "129",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Cheeseburger-1:1-4-product-tile-desktop",
        name: "Double Cheeseburger",
        price: "199"
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-4-product-tile-desktop",
        name: "Cheeseburger",
        price: "159",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Big-Mac-Extra-Value-Meals:1-4-product-tile-desktop",
        name: "Big Mac Combo Meal",
        price: "499",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop",
        name: "Cheese Burger Combo Meal",
        price: "399",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals:1-4-product-tile-desktop",
        name:"Quarter Pounder with Cheese Meals",
        price:"449",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Coca-Cola-Classic-Small-1:1-4-product-tile-desktop",
        name:"Coca-Cola",
        price: "99",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Diet-Coke-Small-1:1-4-product-tile-desktop",
        name:"Diet Coke",
        price: "119",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-4-product-tile-desktop",
        name:"Fries",
        price:"129",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-cappuccino-1:1-4-product-tile-desktop",
        name: "Cappuccino",
        price: "99",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-iced-caramel-macchiato-1:1-4-product-tile-desktop",
        name: "Iced Caramel Macchiato",
        price: "99",
    },
    {
        image_url:
        "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McCafe-Hot-Chocolate-Medium:1-4-product-tile-desktop",
        name: "Hot Chocolate",
        price: "99",
    },
];

var cartData = JSON.parse(localStorage.getItem("cart")) || [];
McD.map(function (elem) {
  let box = document.createElement("div");

  let img = document.createElement("img");
  img.src = elem.image_url;

  let name = document.createElement("p");
  name.textContent = elem.name;

  let price = document.createElement("p");
  price.innerText = elem.price;

  let cbox = document.createElement("input");
  cbox.type = "checkbox";
//   cbox.addEventListener("click", function () {
//     addToCart(elem);
//   });

  box.append(img, name, price, cbox);

  document.querySelector("#container").append(box);
});

// function addToCart(elem) {
//   console.log(elem);
//   cartData.push(elem);
//   localStorage.setItem("cart", JSON.stringify(cartData));
//   alert("item added to cart");
// }

let btnShow = document.querySelector("button");

btnShow.addEventListener("click", () =>{
    let checkbox = document.querySelector("input[type=checkbox]:checked").value;
    console.log(checkbox);
})