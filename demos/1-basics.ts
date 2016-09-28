
var a = 5;
// ERROR: a = "Hallo";

var b: any = 5;
b = "Hallo"; 

////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

add("Hello", 2);

////////////////////////////////////////////

function addTs(a: number, b: number) {
  return a + b;
}

// ERROR: addTs({ some: 'object' }, 2);
