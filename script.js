let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
icon.addEventListener("click", () => {
  ul.classList.toggle("showData");
  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});
//navbar//
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
  shops.style.color = "orange";
  reviews.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});

reviews.addEventListener("click", () => {
  reviews.style.color = "orange";
  shops.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});

blogs.addEventListener("click", () => {
  blogs.style.color = "orange";
  reviews.style.color = "white";
  shops.style.color = "white";
  contacts.style.color = "white";
});

contacts.addEventListener("click", () => {
  contacts.style.color = "orange";
  reviews.style.color = "white";
  blogs.style.color = "white";
  shops.style.color = "white";
});

//card js//
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let butBtn = document.getElementById("buyBtn");

console.log(crd);

crd.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    itemPage.style.display = "flex";
    container.style.display = "none";

    let imgSrc = curValue.firstElementChild.src;
    itemImg.src = imgSrc;

    butBtn.addEventListener("click", function () {
      document.querySelector(".buyPage").style.display = "block";
      document.querySelector(".buyText").innerHTML = `
      <h3>Enter Details :</h3>
        <input type="text" placeholder="Enter Your Name" required="" id="name"> <br>
        <input type="text" placeholder="Enter Your Address" > <br>
        <input type="text" placeholder="Enter Your Mobile Number"> <br>

        <h3>Payment Options :</h3>
        <select >
          <option value="Google-Pay">Google-Pay</option>
          
          <option value="Phone-Pay">Phone-Pay</option>
          
          <option value="Bharat-Pay">Bharat-Pay</option>
          <option value="Cash-on-Delivery">Cash-on-Delivery</option>
        </select> <br>
        <button>Submit </button>

        
      `

      let button = document.createElement("button");
      button.innerText = "Submit";
      buyText.appendChild(button);

      button.addEventListener("click", function(){
        let name = document.getElementById("name");

        if(name.value== ""){
          alert("Please Enter Details")
        }

      })

      let cross = document.querySelector(".cross");
      cross.addEventListener("click", function () {
        document.querySelector(".buyPage").style.display = "none";
      });
    });
  });
});
