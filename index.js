// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() 
{
    cats.push("Ralph");
}

function destructivelyPrependCat()
{
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat()
{
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
}



function appendCat()
{
    const appendCat = [...cats, "Broom"];
}

function prependCat()
{
    const prependCat = ["Arnold", ...cats];
}

function removeLastCat()
{
    cats.slice(0, cats.length - 1);
}

function removeFirstCat()
{
    cats.slice(1);
}
