
const headDiv = `<img id="detail" src="head_detailed.jpeg" alt="Head" usemap="#workmap">
<map name="workmap">
    <area class="clothing" id="hat" shape="poly" coords="145,190,150,130,270,110,340,130,360,190" alt="hat" onclick="selectClothing('hat')">
    <area class="clothing" id="hat2" shape="circle" coords="260,85, 40" alt="hat" onclick="selectClothing('hat')">
    <area class="clothing" id="glasses" shape="rect" coords="185,220,310,265" alt="glasses" onclick="selectClothing('glasses')">
    <area class="clothing" id="earringLeft" shape="rect" coords="120,220,145,310" alt="earringLeft" onclick="selectClothing('earring')">
    <area class="clothing" id="earringRight" shape="rect" coords="350,220,375,310" alt="earringRight" onclick="selectClothing('earring')">
</map>`;
const  bodyDiv = `<img id="detail" src="hoody_detailed.jpeg" alt="body" usemap="#workmap">
<map name="workmap">
    <area class="clothing" id="scarf" shape="poly" coords="210,45, 200,230, 260,230, 240,80, 280,80, 280,45" alt="scarf" onclick="selectClothing('scarf')">
    <area class="clothing" id="hoody" shape="poly" coords="120,350, 140,100, 240,50, 300,70, 370,100, 370,320" alt="hoody" onclick="selectClothing('hoody')">
    <area class="clothing" id="gloveLeft" shape="rect" coords="140,360 ,180,410" alt="gloveLeft" onclick="selectClothing('glove')">
    <area class="clothing" id="gloveRight" shape="rect" coords="310,360 ,360,410" alt="gloveRight" onclick="selectClothing('glove')">
</map>
<button class="arrowRIGHT" onclick="changeBodyOutfit('summer')"></button>
`
const  tshirtDiv = `<img id="detail" src="tshirt_detailed.jpeg" alt="body" usemap="#workmap">
<map name="workmap">
    <area class="clothing" id="scarf" shape="poly" coords="210,45, 200,230, 260,230, 240,80, 280,80, 280,45" alt="scarf" onclick="selectClothing('scarf')">
    <area class="clothing" id="hoody" shape="poly" coords="120,350, 140,100, 240,50, 300,70, 370,100, 370,320" alt="hoody" onclick="selectClothing('tshirt')">
    <area class="clothing" id="gloveLeft" shape="rect" coords="140,360 ,180,410" alt="gloveLeft" onclick="selectClothing('glove')">
    <area class="clothing" id="gloveRight" shape="rect" coords="310,360 ,360,410" alt="gloveRight" onclick="selectClothing('glove')">
</map>
<button class="arrowLEFT" onclick="changeBodyOutfit('winter')"></button>
`

const legsDiv = `<img id="detail"  src="jeans_detailed.jpeg" alt="Legs" usemap="#workmap">
<map name="workmap">
</map>
<button class="arrowRIGHT" onclick="changeLegsOutfit('summer')"></button>
`

const shortsDiv = `<img id="detail"  src="shorts_detailed.jpeg" alt="Legs" usemap="#workmap">
<map name="workmap">
</map>
<button class="arrowLEFT" onclick="changeLegsOutfit('winter')"></button>
`

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
            document.getElementById("detail").innerHTML = headDiv
        }
        else if(part == "body"){
            //inject body and according map
            document.getElementById("detail").innerHTML = bodyDiv
        }
        else if(part == "legs"){
            //inject legs and according map
            document.getElementById("detail").innerHTML = legsDiv
        }
    }
}

function selectClothing(clothing){
    console.log(clothing);
    var allowed = ["hat", "glasses", "earring", "scarf", "hoody", "glove"]
}


