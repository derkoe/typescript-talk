namespace types {

  let name = 'Christian'; // no type needed

  // document.write('<button id="id">Mein Button</button>')
  // No types for callback
  document
    .getElementById('id')
    .addEventListener('click', ev => alert(`${ev.clientX}, ${ev.clientY}`));

  let a: string;
  a.substr(1); // error with strictNullChecks

}