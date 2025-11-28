function filterIteams(category) {
    let Cards = document.querySelectorAll(".card")
    let button = document.querySelectorAll("#filter_btns>buttons")
    Cards.forEach((Card) => {
        if (category == "all") {
            Card.style.display = "flex"
        } else {
            if (Card.classList.contains(category)) {
                Card.style.display = "flex"
            } else {
                Card.style.display = "none"
            }

        }


    })

    button.forEach((btn) => {
        btn.classList.remove("active")

    })
    event.target.classList.add("active")
}

//!Add to cart functionslity
let cart = []
let Cards = document.querySelectorAll(".card")
Cards.forEach((card) => {
    let name = card.querySelector(".card_one>.card_info>h2").innerText
    let price = Number(card.querySelector(".card_one>.card_info>p").innerText.replace("₹", "").replace("/-", ""))
    let quantity = card.querySelector(".card_two>.card_quantity>.quantity")
    console.log(name);
    console.log(price);
    console.log(quantity);

    let plusbtn = card.querySelector(".card_two .card_quantity .plus")
    // plusbtn.addEventListener("click", () => {
    //     // quantity.innerText =Number(quantity.innerText)+ 1
    //     console.log("hiiii");
    // })
    plusbtn.addEventListener("click",()=>{
        console.log("hiiii");
    })
    
    
})