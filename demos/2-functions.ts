namespace functions {

  // optional args
  function fullName(name: string, title?: string) {
    return title ? title + ' ' + name : name;
  }
  console.log(fullName('Doctor', 'Dr.'));
  console.log(fullName('Nodoctor'));

  // default args
  function add(a: number, b = 0) {
    return a + b;
  }
  console.log('add(5) = ', add(5));

  // varargs
  function sum(...nums: number[]) {
    return nums.reduce(add, 0);
  }
  console.log('sum(5, 6, 11, 20) = ', sum(5, 6, 11, 20));
}



