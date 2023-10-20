const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{

    return ["Ik ben calvin","We saw a batman descending","On a day in summer."]
 
}


//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen
function basicHaiku2()
{

    return ["Ik ben leraar","We saw a homelander descending","On a day in herfst."]
 
}
haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()