let i = 0;
let words =["apple", "banana", "citrus", "durian"];
setInterval("wordchange()", 5000);
window.addEventListener("load", function() {
    let btn = document.querySelector("button");
    let colour = 0;
    btn.addEventListener("click", function() {
        //alert("Test !");
        //btn.style.backgroundColor = "red";
        colour = getRandomIntInclusive(0,5);
        switch(colour)
        {
            case 0 :
                btn.style.backgroundColor = "red";
            break;
            case 1 :
                btn.style.backgroundColor = "green";
            break;
            case 2 :
                btn.style.backgroundColor = "blue";
            break;
            case 3 :
                btn.style.backgroundColor = "yellow";
            break;
            default :
                btn.style.backgroundColor = "yellow";
        }
        btn.innerText = words[i];
    })
    
})

function wordchange()
{
    i++;
    if (i == words.length)
    {
        i = 0;
    }
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }