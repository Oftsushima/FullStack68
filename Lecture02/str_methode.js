const fullname = "Kasidet Semongkol";

const clearname = fullname.trim();

const nameParts = clearname.split(" ");

const finalparts = nameParts.filter(Boolean);

const firstname = finalparts[0];

console.log('Hello, ' + firstname + '!');