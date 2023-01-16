

const headDiv = `<img id="detail" src="sketches/head_detailed.jpeg" alt="Head" usemap="#workmap">
<map name="workmap">
    <area class="clothing" id="hat" shape="poly" coords="145,190,150,130,270,110,340,130,360,190" alt="hat" onclick="selectClothing('hat')">
    <area class="clothing" id="hat2" shape="circle" coords="260,85, 40" alt="hat" onclick="selectClothing('hat')">
    <area class="clothing" id="glasses" shape="rect" coords="185,220,310,265" alt="glasses" onclick="selectClothing('glasses')">
    <area class="clothing" id="earringLeft" shape="rect" coords="120,220,145,310" alt="earringLeft" onclick="selectClothing('earrings')">
    <area class="clothing" id="earringRight" shape="rect" coords="350,220,375,310" alt="earringRight" onclick="selectClothing('earrings')">
</map>`;
const  bodyDiv = `
<img id="detail" src="sketches/hoody_detailed.jpeg" alt="body" usemap="#workmap">
<map name="workmap">
    <area class="clothing" id="scarf" shape="poly" coords="210,45, 200,230, 260,230, 240,80, 280,80, 280,45" alt="scarf" onclick="selectClothing('scarf')">
    <area class="clothing" id="hoody" shape="poly" coords="120,350, 140,100, 240,50, 300,70, 370,100, 370,320" alt="hoody" onclick="selectClothing('hoody')">
    <area class="clothing" id="gloveLeft" shape="rect" coords="140,360 ,180,410" alt="gloveLeft" onclick="selectClothing('gloves')">
    <area class="clothing" id="gloveRight" shape="rect" coords="310,360 ,360,410" alt="gloveRight" onclick="selectClothing('gloves')">
</map>
<button onclick="changeBodyOutfit('summer')">Wechseln zu Sommer</button>
`
const  tshirtDiv = `
<img id="detail" src="sketches/tshirt_detailed.jpeg" alt="body" usemap="#workmap">                 
<map name="workmap">
    <area class="clothing" id="scarf" shape="poly" coords="210,45, 200,230, 260,230, 240,80, 280,80, 280,45" alt="scarf" onclick="selectClothing('scarf')">
    <area class="clothing" id="hoody" shape="poly" coords="120,350, 140,100, 240,50, 300,70, 370,100, 370,320" alt="hoody" onclick="selectClothing('tshirt')">
    <area class="clothing" id="gloveLeft" shape="rect" coords="150,370 ,180,410" alt="gloveLeft" onclick="selectClothing('gloves')">
    <area class="clothing" id="gloveRight" shape="rect" coords="310,360 ,360,410" alt="gloveRight" onclick="selectClothing('gloves')">
</map>
<button onclick="changeBodyOutfit('winter')">Wechseln zu Winter</button>
`

const legsDiv = `<img id="detail"  src="sketches/jeans_detailed.jpeg" alt="Legs" usemap="#workmap">
<map name="workmap">
<area class="clothing" id="jeans" shape="rect" coords="160,50, 310,390" alt="jeans" onclick="selectClothing('jeans')">
<area class="clothing" id="shoeLeft" shape="rect" coords="160,390, 200,450" alt="shoes" onclick="selectClothing('shoes')">
<area class="clothing" id="shoeRight" shape="rect" coords="270,390, 310,450" alt="shoes" onclick="selectClothing('shoes')">
</map>
<button onclick="changeLegsOutfit('summer')">&nbsp;Wechseln zu Sommer&nbsp;</button>
`

const shortsDiv = `<img id="detail"  src="sketches/shorts_detailed.jpeg" alt="Legs" usemap="#workmap">
<map name="workmap">
<area class="clothing" id="shorts" shape="rect" coords="160,50, 310,390" alt="shorts" onclick="selectClothing('shorts')">
<area class="clothing" id="shoeLeft" shape="rect" coords="160,390, 200,450" alt="shoes" onclick="selectClothing('shoes')">
<area class="clothing" id="shoeRight" shape="rect" coords="270,390, 310,450" alt="shoes" onclick="selectClothing('shoes')">
</map>
<button  onclick="changeLegsOutfit('winter')">&nbsp;Wechseln zu Winter&nbsp;&nbsp;</button>
`

const clothes={
    "hat": [
        { "image" :"pictures/beanie1.png", "price" : "22,99" },{ "image" :"pictures/beanie2.png", "price" : "12,99" },{ "image" :"pictures/beanie3.png", "price" : "29,99" },{ "image" :"pictures/beanie4.png", "price" : "9,99" },
        { "image" :"pictures/beanie5.png", "price" : "9,99" }, { "image" :"pictures/beanie6.png", "price" : "9,99" }
    ],
    "glasses": [
        {"image" :"pictures/googles1.png", "price" : "42,99" },{ "image" :"pictures/googles2.png", "price" : "200,99" },{ "image" :"pictures/googles3.png", "price" : "5,99" },{ "image" :"pictures/googles4.png", "price" : "2,99" }
    ],
    "earrings": [
        {"image":"pictures/earring1.png","price":"70"},{"image":"pictures/earring2.png","price":"420,11"},{"image":"pictures/earring3.png","price":"4,5"},{"image":"pictures/earring4.png","price":"12,99"}
    ],
    "scarf":[
        {"image":"pictures/scarf1.png","price":"7"},{"image":"pictures/scarf2.png","price":"20,31"},{"image":"pictures/scarf3.png","price":"1200,99"},{"image":"pictures/scarf4.png","price":"13,99"}
    ],
    "hoody":[
        {"image":"pictures/hoody1.png","price":"130"},{"image":"pictures/hoody2.png","price":"10,11"},{"image":"pictures/hoody3.png","price":"12,5"},{"image":"pictures/hoody4.png","price":"49,99"},
        {"image":"pictures/hoody5.png","price":"730"}, {"image":"pictures/hoody6.png","price":"90,99"}, {"image":"pictures/hoody7.png","price":"120,99"},{"image":"pictures/hoody8.png","price":"79,99"}, 
        {"image":"pictures/hoody9.png","price":"49.99"}
    ],
    "gloves":[
        {"image":"pictures/glove1.png","price":"12"},{"image":"pictures/glove2.png","price":"14,99"},{"image":"pictures/glove3.png","price":"120,99"},{"image":"pictures/glove4.png","price":"13,99"}
    ],
    "tshirt":[
        {"image":"pictures/tshirt1.png","price":"32"},{"image":"pictures/tshirt2.png","price":"21,99"},{"image":"pictures/tshirt3.png","price":"52,99"},{"image":"pictures/tshirt4.png","price":"42,99"},
    ], 
    "jeans":[
        {"image":"pictures/jeans1.png","price":"32"},{"image":"pictures/jeans2.png","price":"21,99"},{"image":"pictures/jeans3.png","price":"52,99"},{"image":"pictures/jeans4.png","price":"42,99"}
    ],
    "shorts":[
        {"image":"pictures/shorts1.png","price":"32"},{"image":"pictures/shorts2.png","price":"21,99"},{"image":"pictures/shorts3.png","price":"52,99"},{"image":"pictures/shorts4.png","price":"42,99"}
    ],
    "shoes":[
        {"image":"pictures/shoes1.png","price":"32"},{"image":"pictures/shoes2.png","price":"21,99"},{"image":"pictures/shoes3.png","price":"52,99"},{"image":"pictures/shoes4.png","price":"42,99"}
    ]
    }
function changeBodyOutfit(season){
    if("summer" == season){
        document.getElementById("detail").innerHTML = tshirtDiv
    }
    else if("winter" == season){
        document.getElementById("detail").innerHTML = bodyDiv
    }
}
function changeLegsOutfit(season){
    if("summer" == season){
        document.getElementById("detail").innerHTML = shortsDiv
    }
    else if("winter" == season){
        document.getElementById("detail").innerHTML = legsDiv
    }
}
function selectBodyPart(part){
    var allowed = ["head", "body", "legs"]
    //reset
    document.getElementById("products").innerHTML = ""
    allowed.forEach(function(elem){
        document.getElementById(elem).style.outlineStyle = "none";
        document.getElementById(elem).style.opacity = "1";

    })
    if(allowed.includes(part)){
         //set
        document.getElementById(part).style.outlineStyle = "solid";
        document.getElementById(part).style.outlineColor = "red"
        allowed.forEach(function(elem){
            if(elem !=part){
                document.getElementById(elem).style.opacity = "0.5";
            } 
        });
        if(part == "head"){
            //inject head and according map
            document.getElementById("detail").innerHTML = headDiv;
            document.getElementById("bodypart").innerHTML = "/ head";
        }
        else if(part == "body"){
            //inject body and according map
            document.getElementById("detail").innerHTML = bodyDiv;
            document.getElementById("bodypart").innerHTML = "/ body";
        }
        else if(part == "legs"){
            //inject legs and according map
            document.getElementById("detail").innerHTML = legsDiv;
            document.getElementById("bodypart").innerHTML = "/ legs";
        }
    }
}

function breadcrumbJump(){
    let part = document.getElementById("bodypart").innerHTML;
    document.getElementById("breadcrump_bodyparts").innerHTML = "";
    selectBodyPart(part);
}

function selectClothing(clothing){
    console.log(clothing);
    var allowed = ["hat", "glasses", "earrings", "scarf", "hoody", "gloves", "tshirt", "jeans", "shorts", "shoes"]
    if(allowed.includes(clothing)){
        document.getElementById("products").innerHTML = ""
        //inject
        clothes[clothing].forEach(function(elem){
                document.getElementById("products").innerHTML += `
                <div class="productContainer">
                 <img class="clothes" src="${elem.image}" alt="${clothing}">
                 <div style="display: flex; justify-content: space-between; background-color: lightgrey">
                    <p style="text-allign : left;text-transform: capitalize;font-weight: bold;">	&nbsp;	&nbsp;${clothing}</p>
                    <p style="text-allign : right;font-style: oblique;">${elem.price}$	&nbsp;</p>
                </div>
                </div>`
                document.getElementById("breadcrump_bodyparts").innerHTML = "/ " +  clothing;
            })
    }
}



