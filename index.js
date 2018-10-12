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
  const arr = kittens;
  return arr.push(name);
}

function prependKitten(name) {
  const arr = kittens;
  return arr.unshift(name);
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}

function removeLastKitten(name) {
  return kittens.slice(-1);

}
