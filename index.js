var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);

}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function appendKitten(name) {

}

function prependKitten(name) {

}

function removeFirstKitten(name) {
  kittens.slice(1);
}

function removeLastKitten(name) {
  kittens.slice(-1);
  
}
