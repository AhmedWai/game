let title= document.querySelector(".title")
let turn = "x"
let squase = [];

function winner(){
    for(let i=1; i<10; i++ ){
       squase [i]= document.getElementById("item" + i).innerHTML
    }
    if(squase[1]==squase[2]&&squase[2]==squase[3] && squase[1]!= ""){

        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)


    }

    if(squase[4]==squase[5]&&squase[5]==squase[6] && squase[5]!= ""){
        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)



    }
    if(squase[7]==squase[8]&&squase[8]==squase[9] && squase[8]!= ""){
        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)



    }


    if(squase[2]==squase[5]&&squase[5]==squase[8] && squase[5]!= ""){
        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)



    }


    if(squase[3]==squase[6]&&squase[6]==squase[9] && squase[6]!= ""){
        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)



    }

    if(squase[1]==squase[5]&&squase[5]==squase[9] && squase[9]!= ""){
        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)



    }

    if(squase[3]==squase[5]&&squase[5]==squase[7] && squase[5]!= ""){
        title.innerHTML = `${squase[1] }winner`
        document.getElementById("item" + 1).style.background="#000"
        document.getElementById("item" + 2).style.background="#000"
        document.getElementById("item" + 3).style.background="#000"

        setInterval(function() {title.innerHTML += `.`},1000 )
        setTimeout(function(){location.reload()} , 4000)



    }





}



function game (id){
    let elment = document.getElementById(id)
    if(turn=== "x" && elment.innerHTML== ""){
        elment.innerHTML = "x"
        turn = "o";
        title.innerHTML = "o"

      
    }  else if(turn=== "o" &&  elment.innerHTML== ""){
        elment.innerHTML = "o"
        turn = "x";
        title.innerHTML = "x"

    }
    winner()
    
}