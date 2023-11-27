var places=[
    "Cafe",
    "Park",
    "Theatre",
    "Car ride",
    "Museum",
    "Exhibition",
    "Library",
    "Street food",
    "Dinner date",
    "Midnight Walk"
]

var friends=[]
var form=document.createElement("form")
function field(){
    globalThis.number= document.getElementById("usernumber").value
    document.body.innerHTML= "The count of favourite persons : "+number
    if(isNaN(number)||number<=0){
        alert("Enter a valid number")
    }
    if(number<=10){
        for(a=1;a<=number;a++){
            var input=document.createElement("input")
            input.placeholder="Person"
            input.id="person"+a
            input.type="name"
            var label1=document.createElement("label")
            label1.setAttribute("for","person"+a)
            label1.textContent = "Enter the name of Person "+a+": ";
            form.appendChild(label1) 
            form.appendChild(input)
        }
        var button=document.createElement("button")
        button.textContent="Suggest"
        button.type="button"
        button.onclick=suggest
        form.appendChild(button)
        window.document.body.appendChild(form)
    }
}
window.document.body.appendChild(form)
function suggest(){
    for(i=1;i<=number;i++){
        var userInput = document.getElementById("person"+i).value
        friends.push(userInput)
        console.log(friends)
    }
    newidea()
}
function b1(){
var button=document.createElement("button")
    button.textContent="Suggest New"
    button.type="button"
    button.onclick=newidea
    window.document.body.appendChild(button)
}

function newidea(){
    let Randomplace = Math.floor(Math.random()*places.length)
    let Randomfriend= Math.floor(Math.random()*friends.length)
    let place= places[Randomplace]
    let friend= friends[Randomfriend]
    console.log(place)
    console.log(friend)
    document.body.innerHTML="<p>Stressed?!😑 No worries! I have got you a cool suggestion 😉:</p>"
    document.body.innerHTML+= "<h1>Go for a "+place+" to chill with "+friend+"!😍</h1>"
    document.body.innerHTML+="Enjoy!!!😎\n</p>"
    b1()
    
    
}