export default function submenu() {

const query_string = getQueryStringFromURL(window.location.href);
const params = new URLSearchParams(query_string);
const category = params.get("category");
const allOrders = getOrders();

const api_url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
fetch(api_url)
  .then((response) => response.json())
  .then((data) => {
    const meals = data.meals;

    let mealhtml = ``;
    meals.forEach((m) => {
      const price = getRandomNumber();
      const mealOrders = allOrders.filter(
        (order) => m.idMeal === order.id
      );

      return (mealhtml += `<div class="col-3" >
          <div class="card bg-secondary bg-gradient bg-opacity-10 rounded-4 mb-3" style="width: 15rem; height: 24rem;">
          <img src="${m.strMealThumb}"  class="card-img-top  " alt="...">
          <div class="card-body">
          <h5 class="card-title text-center ">${m.strMeal.slice(0, 20)}</h5>
          <p class="d-inline mx-1 " >Price:<strong> ${price} $</strong></p>
          <span>Ordered: <strong id="quantity-${m.idMeal}" data-quantity=${m.idMeal}>${mealOrders.length}</strong></span><button class="btn btn-light iksi bg-danger bg-gradient bg-opacity-50 border border-black rounded-5 mx-2 border-1 clear px-2 py-0" 
          data-clear=${m.idMeal}>X</button>
          <button class="btn btn-light bg-light bg-gradient bg-opacity-10 border border-black rounded-5 p-2 w-100 mt-3 border-1  add-meal" data-name="${m.strMeal}" data-image=${m.strMealThumb} meal-id=${m.idMeal} data-price=${price} >Add to cart</button>
          
          </div></div></div>`);
    });
    document.getElementById("submenu").innerHTML = mealhtml;

    let titulihtml = ``;
    const tituli = () => {  
     
      return (titulihtml += `
      <div class="sub-head text-center mt-5 d-flex justify-content-between"><span class="mx-3"></span><span class="mx-3"></span> <span class="mx-0"> These are our ${category} recipes</span>
      <a href="/menu.html" class="btn btn-light bg-light bg-gradient bg-opacity-10 border border-black rounded-5 px-3 py-1  border-1  d-inline">Back to Meal categories</a></div>`)
    } 
    tituli()
    document.getElementById("tituli").innerHTML = titulihtml;


    addDynamicEventListener(
      document.body,
      "click",
      ".add-meal",
      function (e) {
        const id = e.target.getAttribute("meal-id");
        const name = e.target.getAttribute("data-name");
        const image = e.target.getAttribute("data-image");
        const price = e.target.getAttribute("data-price");
        addOrder({ id, price, name, image });
        const allOrders = getOrders();
        const mealOrders = allOrders.filter((order) => id === order.id);
        document.getElementById(`quantity-${id}`).innerHTML =
          mealOrders.length;
      }
    );

    addDynamicEventListener(
        document.body,
        "click",
        ".clear",
        function (e) {
          const id = e.target.getAttribute("data-clear");
          clearMeal(id);
          const allOrders = getOrders();
          const mealOrders = allOrders.filter((order) => id === order.id);
          document.getElementById(`quantity-${id}`).innerHTML =
            mealOrders.length;
        }
      );
    return mealhtml;
    
    

    
  })}