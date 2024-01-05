
export default function menu() {
    const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            const category = data.categories

            let cathtml = ``
            category.filter(m => m.strCategory !== 'Pork').filter(m => m.strCategory !== 'Pasta').filter(m => m.strCategory !== 'Miscellaneous').filter(m => m.strCategory !== 'Goat').filter(m => m.strCategory !== 'Breakfast').forEach(m => cathtml +=
                `<div class="col-4 "  >
                <div class="card bg-secondary bg-gradient bg-opacity-10 rounded-4 mb-3" style="width: 20rem; height: 29rem;">
                <img src="${m.strCategoryThumb}" class="card-img-top mt-1" alt="...">
                <div class="card-body">
                <h5 class="card-title text-center">${m.strCategory}</h5>
                <p class="card-text mt-1">  - ${m.strCategoryDescription.slice(0, 180)}.</p>
                <a href="./submenu.html?category=${m.strCategory}" class="btn btn-light bg-light bg-gradient bg-opacity-10 border border-black rounded-5 p-2 w-100 border-1 justify-self-end ">Check our ${m.strCategory} recipes</a>
                </div></div></div>`
            )

            document.getElementById("menuu").innerHTML = cathtml
            return cathtml
        })

}






























