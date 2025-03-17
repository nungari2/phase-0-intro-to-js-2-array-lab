// Write your solution here!
//const cats = ["Milo", "Otis", "Garfield"];
let cats = ["Milo", "Otis", "Garfield"];
//cats.push("Ralph");
//cats.unshift("cat")
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}
//const cats = ["Milo", "Otis", "Garfield"];
function appendCat(Ralph) {
return [...cats, Ralph];

}
copyOfCatsUsingSlice = cats.slice(Ralph);

function prependCat(Bob) {
    return [Bob, ...cats] ;
    
    }
    copyOfCatsUsingSlice = cats.slice(Bob);

    function removeFirstCat() {
        return cats.slice(1);
    }
    function removeLastCat() {
        return cats.slice(0,cats.length - 1);
    }
    
