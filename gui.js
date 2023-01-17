

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
        { "image" :"pictures/beanie1.png", "price" : "22,99", "name" : "red beanie", "description":"A red beanie made of wool", "color":"red", "size":"S"},
        { "image" :"pictures/beanie2.png", "price" : "12,99", "name" : "beige beanie", "description":"A beige beanie made of polyester", "color":"white", "size":"M" },
        { "image" :"pictures/beanie3.png", "price" : "29,99", "name" : "green beanie", "description": "A green beanie made of cotton and plolyester", "color":"green", "size":"S,L" },
        { "image" :"pictures/beanie4.png", "price" : "9,99",    "name" : "grey cap", "description" : "A grey cap made of polyester", "color":"red", "size":"S,M"},
        { "image" :"pictures/beanie5.png", "price" : "9,99",    "name" : "black cap", "description" : "A black dad cap", "color":"black", "size":"L"}, 
        { "image" :"pictures/beanie6.png", "price" : "9,99",    "name" : "cowboyhat", "description" : "a cowboyhat made of synthetic leather", "color":"red", "size":"S,M,L"},
    ],
    "glasses": [
        {"image" :"pictures/googles1.png", "price" : "10,99" , "name" : "swimgoogles","description":"Swimming googles for the pool", "color":"green,yellow", "size":"M"},
        { "image" :"pictures/googles2.png", "price" : "200,99", "name" :"designer glasses", "description":"glasses made by cuggi", "color":"black", "size":"S,L" },
        { "image" :"pictures/googles3.png", "price" : "50,99", "name": "casual glasses", "description": "casual glasses made by hommy tilfiger",  "color" : "blue,black", "size" : "M,L" },
        { "image" :"pictures/googles4.png", "price" : "2,99", "name": "childrens Glasses", "description" : "glasses made for children", "color" : "white", "size" : "S" },
    ],
    "earrings": [
        {"image":"pictures/earring1.png","price":"70", "name" : "golden pink earrings", "description":"earrings made of gold with a pink crystall", "color":"red, yellow", "size":"S,M"},
        {"image":"pictures/earring2.png","price":"420,11", "name" : "amethyst earrings", "description":"earrings made of silver inbedded with amethyst", "color":"red", "size":"M,L"},
        {"image":"pictures/earring3.png","price":"450", "name" : "diamond earrings", "description":"earrings made of silver inbedded with diamonds", "color":"white", "size":"M,L"},
        {"image":"pictures/earring4.png","price":"12,99", "name": "childrens flower earrings", "description" : "earrings made for children picturing flowers", "color" : "white, black", "size" : "S" },
    ],
    "scarf":[
        {"image":"pictures/scarf1.png","price":"7", "name" : "grandma scarf", "description":"a black  scarf made of wool", "color":"white, black", "size":"M,L"},
        {"image":"pictures/scarf2.png","price":"20,31", "name" : "salmon-colored scarf", "description":"a salmon-colored scarf made of wool and polyester", "color":"red", "size":"L"},
        {"image":"pictures/scarf3.png","price":"1200,99",   "name" : "hippie scarf", "description":"a hippie scarf in multiple colors made of wool", "color":"white, blue, green, red", "size":"M"},
        {"image":"pictures/scarf4.png","price":"13,99", "name": "two parts Scarf", "description" : "a scarf made of two segments", "color" : "black, green, yellow", "size" : "S,M" },
    ],
    "hoody":[
        {"image":"pictures/hoody1.png","price":"130", "name" : "designer hoody", "description":"a black hoody made by cuggi", "color":"black", "size":"M,L"},
        {"image":"pictures/hoody2.png","price":"10,11", "name" : "casual hoody", "description":"a blue hoody made from cotton and polyester", "color":"blue", "size":"M"},
        {"image":"pictures/hoody3.png","price":"12,5", "name" : "childrens hoody", "description":"a hoody made for children", "color":"red, green", "size":"S"},
        {"image":"pictures/hoody4.png","price":"49,99", "name" : "Surfer hoody", "description":"a hoody made from cotton for surfers", "color":"black, white, blue", "size":"S,M,L"},
        {"image":"pictures/hoody5.png","price":"730", "name" : "designer jacket", "description":"a black jacket madfe by cuggi", "color":"black", "size":"S,M"}, 
        {"image":"pictures/hoody6.png","price":"90,99", "name" : "long coat", "description":"a blue coat made from cotton an polyester", "color":"blue", "size":"M"}, 
        {"image":"pictures/hoody7.png","price":"120,99", "name" : "fur coat", "description":"a beige fur coat made from synthetic fur", "color":"yellow, white", "size":"S,M"},
        {"image":"pictures/hoody8.png","price":"79,99", "name" : "puffer jacket", "description":"a black puffer jacket made from polyester", "color":"black", "size":"L"}, 
        {"image":"pictures/hoody9.png","price":"49.99","name" : "rain jacket", "description":"a red rain jacke", "color":"black", "size":"S,M"},
    ],
    "gloves":[
        {"image":"pictures/glove1.png","price":"12", "name" : "biking gloves", "description":"a pair of thin gloves made from biking", "color":"black, blue", "size":"M" },
        {"image":"pictures/glove2.png","price":"14,99", "name" : "winter gloves", "description":"a pair of thick gloves that are made for the winter", "color":"black", "size":"S, M"},
        {"image":"pictures/glove3.png","price":"120,99", "name" : "working gloves", "description":"a pair of gloves made for working outside in cold weather", "color":"black, red", "size":"S,M, L"}
        ,{"image":"pictures/glove4.png","price":"13,99", "name" : "childrens gloves", "description":"a pair of multicolored gloves made for children", "color":"green, red, blue", "size":"S" },
    ],
    "tshirt":[
        {"image":"pictures/tshirt1.png","price":"32", "name" : "designer tshirt", "description":"a black and white tshirt made by cuggi", "color":"white, black", "size":"M,L"},
        {"image":"pictures/tshirt2.png","price":"121,99", "name" : "casual tshirt", "description":"a blue tshirt made from cotton and polyester", "color":"blue", "size":"M"},
        {"image":"pictures/tshirt3.png","price":"52,99", "name" : "childrens tshirt", "description":"a tshirt made for children", "color":"red, green", "size":"S"},
        {"image":"pictures/tshirt4.png","price":"42,99",    "name" : "plain tshirt", "description":"a plain white tshirt made from cotton ", "color":"white", "size":"S,M,L"},
    ], 
    "jeans":[
        {"image":"pictures/jeans1.png","price":"32", "name" : "looste-fit jeans", "description":"a black jeans made from cotton with a loose fit ", "color":"blue", "size":"M,L"},
        {"image":"pictures/jeans2.png","price":"21,99", "name" : "casual jeans", "description":"a blue jeans made from cotton and polyester", "color":"blue", "size":"M"},
        {"image":"pictures/jeans3.png","price":"152,99", "name" : "suit pants", "description":"a pair of suits pants made by cuggi", "color":"black, green", "size":"S,M,L"},
        {"image":"pictures/jeans4.png","price":"42,99", "name" : "skinny jeans", "description":"a pair of skinny jeans made from cotton", "color":"black", "size":"S,M,L"},
    ],
    "shorts":[
        {"image":"pictures/shorts1.png","price":"32", "name" : "designer shorts", "description":" shorts made from cotton by cuggi", "color":"blue", "size":"M,L"},
        {"image":"pictures/shorts2.png","price":"21,99", "name" : "skirt", "description":"skirt made from polyester", "color":"white, black", "size":"S,M"},
        {"image":"pictures/shorts3.png","price":"52,99", "name" : "cropped shorts", "description":"cropped shorts made from cotton and polyester", "color":"white", "size":"M,L"},
        {"image":"pictures/shorts4.png","price":"42,99", "name" : "shorts shorts", "description":"short shorts made from cotton", "color":"red", "size":"M,L"},
    ],
    "shoes":[
        {"image":"pictures/shoes1.png","price":"32", "name" : "running shoes", "description":"a pair of shoes made for running", "color":"yellow, black, blue, white", "size":"S,M"},
        {"image":"pictures/shoes2.png","price":"61,99", "name" : "designer sneakers", "description":"a pair of white sneakers mady by hommy tilfiger", "color":"black, white", "size":"M,L"},
        {"image":"pictures/shoes3.png","price":"52,99", "name" : "sport shooes", "description":"a pair of shoes that can be used for sports", "color":"black", "size":"S"},
        {"image":"pictures/shoes4.png","price":"42,99", "name" : "snearkers", "description":"a pair of sneakers", "color":"white", "size":"M,L"},
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
    document.getElementById("dropdown_container").innerHTML = ""
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
        //Inject Dropdown
        document.getElementById("dropdown_container").innerHTML = `<div class="dropdown">
        <button class="dropbtn">Size</button>
        <div class="dropdown-content">
          <a onclick= "filterClothing('`+clothing+`',this)">L</a>
          <a onclick= "filterClothing('`+clothing+`',this)">M</a>
          <a onclick= "filterClothing('`+clothing+`',this)">S</a>
        </div>
      </div>`
      document.getElementById("dropdown_container").innerHTML += `<div class="dropdown">
        <button class="dropbtn">Color</button>
        <div class="dropdown-content">
          <a onclick= "filterClothing('`+clothing+`',this)">red</a>
          <a onclick= "filterClothing('`+clothing+`',this)">blue</a>
          <a onclick= "filterClothing('`+clothing+`',this)">black</a>
          <a onclick= "filterClothing('`+clothing+`',this)">white</a>
          <a onclick= "filterClothing('`+clothing+`',this)">green</a>
          <a onclick= "filterClothing('`+clothing+`',this)">yellow</a>
        </div>
      </div>`
        //inject
        clothes[clothing].forEach(function(elem){
                document.getElementById("products").innerHTML += `
                <div class="productContainer">
                 <img class="clothes" src="${elem.image}" alt="${elem.name}">
                 <div style="display: flex; justify-content: space-between; background-color: lightgrey">
                    <p style="text-allign : left;text-transform: capitalize;font-weight: bold;">	&nbsp;	&nbsp;${elem.name}</p>
                    <p style="text-allign : right;font-style: oblique;">${elem.price}$	&nbsp;</p>
                </div>
                </div>`
                document.getElementById("breadcrump_bodyparts").innerHTML = "/ " +  clothing;
            })
    }
}

function filterClothing(clothing, input){
    let set = false
    document.getElementById("products").innerHTML = ""
    clothes[clothing].forEach(function(elem){
        if(elem.size.includes(input.innerHTML) || elem.color.includes(input.innerHTML)){
            set = true
            document.getElementById("products").innerHTML += `
        <div class="productContainer">
         <img class="clothes" src="${elem.image}" alt="${elem.name}">
         <div style="display: flex; justify-content: space-between; background-color: lightgrey">
            <p style="text-allign : left;text-transform: capitalize;font-weight: bold;">	&nbsp;	&nbsp;${elem.name}</p>
            <p style="text-allign : right;font-style: oblique;">${elem.price}$	&nbsp;</p>
        </div>
        </div>`
        }
    })
    if(!set){
        document.getElementById("products").innerHTML = '<p style="font-size: larger; font-weight: bold;">No Resuls for these filters</p>'
    }
}

