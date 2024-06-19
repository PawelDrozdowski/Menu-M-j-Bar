setTimeout(() => {
    main()
},
    100);

function main() {
    fetch("data.json")
        .then(response => response.json())
        .then(json => {
            const parent = document.querySelector(".menu-container");
            const cocktails = json.cocktails.map(x => `<div class="card">
            <div class="card-header">
                <div class="card-header-left">
                    <h5>${x.name}</h5>
                </div>
                <ul>
                ${x.ingredients.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="divider-line"></div>
            <img src="${x.img}" alt="drink">
        </div>`).join('');

            parent.insertAdjacentHTML('beforeend', cocktails);
        });
}
