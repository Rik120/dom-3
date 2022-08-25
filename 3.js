let macbook = {

    spaceGrey: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-spacegray-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303733",

    white: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-20220606?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1653084303678"

}

let coco = {

    white: "White",

    spaceGrey: "Space Grey"
}

let btns = document.querySelectorAll(".color")

let img = document.querySelector("img")

let ccc = document.querySelector(".content-products-information-color")

let btn_white = document.querySelector(".content-button-1")

let btn_grey = document.querySelector(".content-button-2")

btns.forEach((btn) => {

    btn.onclick = () => {

        let color = btn.getAttribute("data-color")

        img.src = macbook[color]

        ccc.innerText = coco[color]

        btn.classList.toggle("qaz")

        console.log(btn.getAttribute("data-color"));

        console.log("ccc.innerText");
    }


})

let manys = {

    one: "$1999",

    two: "$2199",

    three: "$2599",

    four: "$3199"

}

let buttons = document.querySelectorAll(".content-model-button")

let qwer = document.querySelector(".content-products-information-color-price")

buttons.forEach((button) => {

    button.onclick = () => {

        button.classList.toggle("bla")

        let many = button.getAttribute("data-many")

        qwer.innerText = manys[many]

    }

})

