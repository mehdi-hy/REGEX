/*
Create a new array that shows the names with the firstname and then the surname.
*/

let names = [
  'Smith, James',
  'Peterson, Alyssa',
  'Johnson, Lynette',
  'Lopez, Tony',
];

let regex = /(\w+), (\w+)/;

let newArray = names.map((name) => {
  console.log(regex.exec(name));
  return name.replace(regex, '$2, $1');
});

console.log(newArray);
