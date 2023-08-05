let servicesItem = document.querySelector(".servicesListItem i");
let productItem = document.querySelector(".productsListItem i");
let list = document.querySelectorAll(".hiddenList");
let menuBars = document.querySelector(".menuBars i");
let menu = document.querySelector(".menuBars");
let smallScreenMenu = document.querySelector(".smallScreenMenu");
let nav = document.querySelector("nav");
let anchor = document.querySelectorAll("a");
let anchors = Array.from(anchor);
let ArrayList = Array.from(list);
let filterBullets = document.querySelectorAll(".filterBullets .filter");
let filtersArray = Array.from(filterBullets);
let allFilter = document.querySelector(".all");
let codingFilter = document.querySelector(".coding");
let designFilter = document.querySelector(".design");
let webFilter = document.querySelector(".web");
let productDisplayer = document.querySelector(".products-displayer");
let body = document.querySelectorAll("body")
let displayedProducts = document.querySelectorAll("body .product")
let allProducts = document.getElementById("allProductsId");
let codingProducts = document.getElementById("codingProductsId");
let designProducts = document.getElementById("designProductsId");
let webProducts = document.getElementById("webProductsId");
let rating = document.querySelector(".opnion-holder");
let ratingImage = document.querySelector(".image");
let ratingName = document.querySelector(".name");
let ratingStars = document.querySelector(".stars");
let ratingText = document.querySelector(".that-whate-he-said");
let ratingBullets = Array.from(document.querySelectorAll("body .bullets li"));
let rightArrow = document.querySelector(".right");
let leftArrow = document.querySelector(".left");
let stars =Array.from(document.querySelectorAll("body .star img"));
let time = document.getElementById("date");
let goUp = document.querySelector(".goUp");
console.log(ratingBullets);
allProducts.addEventListener("click",function(e){
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    allFilter.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
})
codingProducts.addEventListener("click",function(e){
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    codingFilter.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        
        if(document.querySelectorAll("body .product")[i].getAttribute("data-id")!=="coding"){
            document.querySelectorAll("body .product")[i].classList.add("none");
        }
    }
})
designProducts.addEventListener("click",function(e){
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    designFilter.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        
        if(document.querySelectorAll("body .product")[i].getAttribute("data-id")!=="design"){
            document.querySelectorAll("body .product")[i].classList.add("none");
        }
    }
})
webProducts.addEventListener("click",function(e){
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    webFilter.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        
        if(document.querySelectorAll("body .product")[i].getAttribute("data-id")!=="web"){
            document.querySelectorAll("body .product")[i].classList.add("none");
        }
    }
})

// an event to open and close services menu
servicesItem.addEventListener("click",function(e){
    tog(e);
})

// an event to open and close products menu
productItem.addEventListener("click",function(e){
    tog(e);
})

// an event to set an animation.
menuBars.addEventListener("click",()=>{
    menu.classList.toggle("rotate");
    if(menuBars.classList.contains("fa-bars")){
        menuBars.classList.add("fa-x")
        menuBars.classList.remove("fa-bars");
        nav.style.backgroundColor="white";
        smallScreenMenu.classList.remove("none");
    }
    else{
        menuBars.classList.add("fa-bars");
        menuBars.classList.remove("fa-x");
        nav.style.backgroundColor="";
        smallScreenMenu.classList.add("none");
    }
})

// an event to close the open menus if the user clicked anywhere out of the "down arrow icon".
document.addEventListener("click",function(e){
    if(!e.target.matches("i")){
        checkOthers();
    }
})

// a function checks if the there are an another open menus, and closes them.
function checkOthers(){
        menuBars.classList.add("fa-bars");
        menuBars.classList.remove("fa-x");
        nav.style.backgroundColor="";
        smallScreenMenu.classList.add("none");
    for(let i=0;i<ArrayList.length;i++){
        let item = ArrayList[i];
        let isHiddenList = item.classList.contains("hiddenList");
        let isItemHidden = !item.classList.contains("none");
        if(isHiddenList){ //ul elements contains hiddenist class
            if(isItemHidden){ //ul elements does not contain none class
                item.classList.add("none") //all ul lements are hideen now
            }
        }
    }}

// a function toggles between show an hide situations
function tog(e){
    let target = e.target.nextElementSibling;
    if(!target.classList.contains("none")){
        checkOthers();//all ul lements are hideen now
    }
    else{
    if(target.classList.contains("none")){
        checkOthers();
        target.classList.remove("none");
    }else{
        target.classList.add("none");
    }
    }
}
// handling the fixed navigation
window.addEventListener("scroll",()=>{
    const scrollHeight = window.scrollY;
    const navHeight = nav.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});
// the products array 
let productsArray=[
    {
        type:"web",
        title:"Web Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/web-design.png",
        id:0,
    },
    {
        type:"coding",
        title:"Coding Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/coding1.png",
        id:0,
    },
    {
        type:"web",
        title:"Web Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/web-design.png",
        id:0,
    },
    {
        type:"design",
        title:"Design Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/illustration.png",
        id:0,
    },
    {
        type:"web",
        title:"Web Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/web-design.png",
        id:0,
    },
    {
        type:"design",
        title:"Design Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/illustration.png",
        id:0,
    },
    {
        type:"coding",
        title:"Coding Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/coding1.png",
        id:0,
    },
    {
        type:"design",
        title:"Design Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/illustration.png",
        id:0,
    },
    {
        type:"web",
        title:"Web Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/web-design.png",
        id:0,
    },
    {
        type:"coding",
        title:"Coding Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/coding1.png",
        id:0,
    },
    {
        type:"web",
        title:"Web Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/web-design.png",
        id:0,
    },
    {
        type:"coding",
        title:"Coding Project",
        caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.",
        src:"../images/coding1.png",
        id:0,
    },
];

//a function to add products deppending in the length of th products array
function addProduct(array){
    for(let i =0;i<array.length;i++){
        let product = document.createElement("div");
        product.classList.add("product");
        product.setAttribute("data-id",array[i].type);

        let productImageHolder = document.createElement("div");
        productImageHolder.classList.add("product-image-holder");

        let img = document.createElement("img");
        img.src=array[i].src;

        productImageHolder.appendChild(img);

        let productTitle = document.createElement("div");
        productTitle.textContent=array[i].title;
        productTitle.classList.add("productTitle");

        let productCaption = document.createElement("div");
        productCaption.textContent=array[i].caption;
        productCaption.classList.add("productCaption");

        let btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");

        let a = document.createElement("a");
        a.href="#contact";
        a.textContent="oreder";

        let button = document.createElement("button");
        button.classList.add("btn");
        button.style="font-size:30px;";

        button.appendChild(a)

        btnContainer.append(button);

        product.append(productImageHolder,productTitle,productCaption,btnContainer);
        product.id="product";
        productDisplayer.appendChild(product);
    }
}
// the products were added here
addProduct(productsArray);
    
//setting a unique id values of each element
for(let i = 0; i<productsArray.length;i++){
    productsArray[i].id=i;
}
// filtering the web projects 
webFilter.addEventListener("click",function(e){
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    e.target.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        
        if(document.querySelectorAll("body .product")[i].getAttribute("data-id")!=="web"){
            document.querySelectorAll("body .product")[i].classList.add("none");
        }
    }
})

// filtering the design projects 
designFilter.addEventListener("click",function(e){
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    e.target.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        
        if(document.querySelectorAll("body .product")[i].getAttribute("data-id")!=="design"){
            document.querySelectorAll("body .product")[i].classList.add("none");
        }
    }
})

// filtering the coding projects 
codingFilter.addEventListener("click",function(e){
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    e.target.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        
        if(document.querySelectorAll("body .product")[i].getAttribute("data-id")!=="coding"){
            document.querySelectorAll("body .product")[i].classList.add("none");
        }
    }
})

//displaying all the projects
allFilter.addEventListener("click",function(e){
    filtersArray.forEach(element=>{
        element.classList.remove("active");
    })
    e.target.classList.add("active");
    for(let i = 0;i<productsArray.length;i++){
        document.querySelectorAll("body .product")[i].classList.remove("none");
    }
})
function generateRandom(){
    return Math.floor(Math.random() * (5 - 0 + 1) + 0)
}

let ratingsArray=[
    {
        raterImage:"../images/man1.png",
        raterName:"john doe",
        starsNumber:generateRandom(),
        raterText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium molestias doloremque nisi fuga? Dolore vel, veritatis nemo.",
    },
    {
        raterImage:"../images/woman1.png",
        raterName:"jane doe",
        starsNumber:generateRandom(),
        raterText:"Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium molestias doloremque nisi fuga? Dolore vel, veritatis nemo.",
    },
    {
        raterImage:"../images/man2.png",
        raterName:"john doe",
        starsNumber:generateRandom(),
        raterText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium molestias doloremque nisi fuga? Dolore vel, veritatis nemo.",
    },
    {
        raterImage:"../images/woman.png",
        raterName:"jane doe",
        starsNumber:generateRandom(),
        raterText:"Lorem ipsum dolor,adipisicing elit. Accusantium molestias doloremque nisi fuga? Dolore vel, veritatis nemo.",
    },
    {
        raterImage:"../images/man.png",
        raterName:"john doe",
        starsNumber:generateRandom(),
        raterText:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium molestias doloremque nisi fuga? Dolore vel, veritatis nemo.",
    },
    {
        raterImage:"../images/woman2.png",
        raterName:"jane doe",
        starsNumber:generateRandom(),
        raterText:"Lorem ipsum dolor  sit amet consectetur, sit amet consectetur, adipisicing elit. Accusantium molestias doloremque nisi fuga? Dolore vel, veritatis nemo.",
    },
]
let goldenStar="../images/goldenStar.png";
let emptyStar="../images/emptyStar.png";


function insertStars(n){
    // if the number of stars is equal to 0 insert only empty stars
    if(n===0){
        let i=0;
        while(i<5){
            if(i===4){
            stars[i].src="../images/emptyStar.png";
            return;
            }
            else{
            stars[i].src="../images/emptyStar.png";
            i++;
            }
        }
        }
        // otherwise we might face many situations 
        else{
        // looping depending on the number of stars "!=0"
        for(let i=0;i<n;i++){ //n = 4 golden stars 
            stars[i].src="../images/goldenStar.png";
        }
        for(let i=n;i<5;i++){ // inserting empty stars to the stars elements that have not been inserted as golden
            stars[i].src="../images/emptyStar.png";
        } 
        }
        }

        let index = 0;

ratingImage.src=ratingsArray[0].raterImage;
ratingName.innerText=ratingsArray[0].raterName;
ratingText.innerText=ratingsArray[0].raterText;
insertStars(ratingsArray[0].starsNumber);

rightArrow.addEventListener("click",next);
leftArrow.addEventListener("click",prev)
console.log(ratingsArray.length);
console.log(ratingBullets.length);

function resetBullets(array){
    array.forEach(element=>{
        element.classList.remove("active");
    })
}

for(let i = 0;i<ratingBullets.length;i++){
    ratingBullets[i].addEventListener("click",function(){
        resetBullets(ratingBullets);
        ratingBullets[i].classList.add("active");
        moveTo(i);
    })
}

function next(){
    if(index===ratingsArray.length-1){index=-1}
    index++;
    ratingImage.src=ratingsArray[index].raterImage;
    ratingName.innerText=ratingsArray[index].raterName;
    ratingText.innerText=ratingsArray[index].raterText;
    insertStars(ratingsArray[index].starsNumber);
    connectBulletSlides(index);
}
function prev(){
    if(index===0){index=ratingsArray.length}
    index--;
    ratingImage.src=ratingsArray[index].raterImage;
    ratingName.innerText=ratingsArray[index].raterName;
    ratingText.innerText=ratingsArray[index].raterText;
    insertStars(ratingsArray[index].starsNumber);
    connectBulletSlides(index);
}
function moveTo(i){
    index=i;
    ratingImage.src=ratingsArray[index].raterImage;
    ratingName.innerText=ratingsArray[index].raterName;
    ratingText.innerText=ratingsArray[index].raterText;
    insertStars(ratingsArray[index].starsNumber);
}
function connectBulletSlides(i){
    resetBullets(ratingBullets);
    ratingBullets[i].classList.add("active");
}
let date = new Date();
time.innerHTML= date.getFullYear();

    
    window.onscroll=function(){
        if(window.scrollY>400){
            goUp.classList.remove("none");
        }
        else{
            goUp.classList.add("none");
        }
    }
goUp.addEventListener("click",function(){
    window.scrollTo(0,0);
})