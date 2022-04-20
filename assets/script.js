data = [
    {
        name: "Пенис",
        description: "vfdvdgf vdgbfgb klfgk blfkmblfkgm blfkgmbl fkgmblfkg bmflkmbflk vfkgmlfmgb lkfgbfgbd,gjnkn",
        imgurl: "https://static.prowebmastering.ru/14d/67c/11aff2a202b272dcf9e4c1952fc3c09721.png",
        price: 18
    },
    {
        name: "Пенис2",
        description: "vfdvdgf vdgbfgb klfgk blfkmblfkgm blfkgmbl fkgmblfkg bmflkmbflk vfkgmlfmgb lkfgbfgbd,gjnkn",
        imgurl: "https://static.prowebmastering.ru/14d/67c/11aff2a202b272dcf9e4c1952fc3c09721.png",
        price: 19
    },
    {
        name: "Пенис3",
        description: "vfdvdgf vdgbfgb klfgk blfkmblfkgm blfkgmbl fkgmblfkg bmflkmbflk vfkgmlfmgb lkfgbfgbd,gjnkn",
        imgurl: "https://static.prowebmastering.ru/14d/67c/11aff2a202b272dcf9e4c1952fc3c09721.png",
        price: 20
    },
    {
        name: "Пенис4",
        description: "vfdvdgf vdgbfgb klfgk blfkmblfkgm blfkgmbl fkgmblfkg bmflkmbflk vfkgmlfmgb lkfgbfgbd,gjnkn",
        imgurl: "https://static.prowebmastering.ru/14d/67c/11aff2a202b272dcf9e4c1952fc3c09721.png",
        price: 25
    },
    {
        name: "Пенис женский",
        description: "vfdvdgf vdgbfgb klfgk blfkmblfkgm blfkgmbl fkgmblfkg bmflkmbflk vfkgmlfmgb lkfgbfgbd,gjnkn",
        imgurl: "https://static.prowebmastering.ru/14d/67c/11aff2a202b272dcf9e4c1952fc3c09721.png",
        price: 60
    },
]

// function addProductCard(productData) {
//     let article = document.createElement("article");
//     article.classList.add("productCard");
//
//     let img = document.createElement("img");
//     img.src = productData.imgurl;
//     img.classList.add("productImg");
//     img.alt = `Изображение продукта ${productData.name}`;
//
//     let h3 = document.createElement("h3");
//     h3.textContent = productData.name;
//
//     let p = document.createElement("p");
//     p.textContent = productData.description;
//
//     let priceblock = document.createElement("div");
//     priceblock.classList.add("priceBlock");
//
//     let price = document.createElement("p");
//     price.textContent = `${productData.price} $`;
//
//     let buybutton = document.createElement("button");
//     buybutton.textContent = "Add to the list";
//
//     article.appendChild(img);
//     article.appendChild(h3);
//     article.appendChild(p);
//     article.appendChild(priceblock);
//     priceblock.appendChild(price);
//     priceblock.appendChild(buybutton);
//
//     let content = document.getElementById("products");
//     content.appendChild(article);
//
// }


function addProductCard(productData) {
    let template = document.getElementById("pcard_template").content.cloneNode(true);

    let img = template.querySelector(".productImg");
    img.src = productData.imgurl;
    img.alt = `Изображение товара ${productData.name}`;

    let h3 = template.querySelector("H3");
    h3.textContent = productData.name;

    let p = template.querySelector("P");
    p.textContent = productData.description;

    let content = document.getElementById("products");
    content.appendChild(template);

}



function outCarts(data, maxPrice) {
    for (product of data) {
        if (product.price < maxPrice) {
            addProductCard(product);
        }
    }
}