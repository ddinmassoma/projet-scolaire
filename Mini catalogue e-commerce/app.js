const productsContainer = document.getElementById("products");
const productDetail = document.getElementById("productDetail");
productsContainer.innerHTML ="<p>Liste des produits</p>"; // À compléter

fetch("https://fakestoreapi.com/products")
    .then(res => res.json ()) // À compléter
    .then(data => {
        productsContainer.innerHTML ="";
        data.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML =
                `
                <img src="${product.image}"alt=""> <!-- À compléter -->
                <h3>${product.title}</h3> <!-- À compléter -->
                <p><strong>${product.price} €</strong></p> <!-- À compléter -->
                `
                ;
                div.addEventListener("click", () => showDetails(product.id)); // À compléter
                productsContainer.appendChild(div);
                });
            })
    .catch(() => {
        productsContainer.innerHTML ="<p style='color:red'>Erreur de chargement</p>"; // À compléter
});

//2éme partie

function showDetails(id) {
    productDetail.innerHTML ="<p>Détails des produits</p>"; // À compléter
    productDetail.classList.remove("hidden"); // remove / add
    fetch(`https://fakestoreapi.com/products/${id}`) // À compléter
        .then(res => res.json())
        .then(product => {
            productDetail.innerHTML =`
                <h2>${product.title}</h2> <!-- À compléter -->
                <img src="${product.image}">
                <p>${product.description}</p>
                <p><strong>Prix : ${product.price} €</strong></p>
                <button id="closeBtn">Fermer</button>
                `;
                document.getElementById("closeBtn").onclick = () => {
                    productDetail.classList.add("hidden"); // À compléter
                };
            })
        .catch(() => {
            productDetail.innerHTML =
                "<p style='color:red'>Erreur de chargement</p>"; // À compléter
});
}