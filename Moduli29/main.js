var programmingLanguages = ["JavaScript","PHP","Python"];

console.log(programmingLanguages);

var numrat = [1,2,3,4,5,6,7,8,9,10];

console.log(numrat);

console.log(programmingLanguages[1]);

// array function

// push - adds an element at the end of the list    

programmingLanguages.push("Java");

numrat.push(11);

document.write(programmingLanguages);

document.write(numrat); 

// pop deletes the last element

numrat.pop();

console.log(numrat);

// unshift - adds an element at the beginning of the list

programmingLanguages.unshift("C#");

console.log(programmingLanguages);

// shift - deletes the first element of the list

programmingLanguages.shift();   
console.log(programmingLanguages);

// splice - cilin pozit, sa elemente, cilin me e shtu

programmingLanguages.splice(1,2,"Ruby");

console.log(programmingLanguages);

// array destructuring

var students = ["Ernes","Detjon","Arjanita","Drini","Omer"];

var [s1,s2,s3,s4,s5] = students;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

var places = ["Prishtina","Podujeva","Peja","Prizreni","Lipjan","Tirana","Gjakova","Gjilani","Obiliq","Vushtrria","Tirana","istogi","Ferizaji","Shkupi","Mitrovica","Deqani","Fushe kosova","Malisheva","Skenderaj","Rahovec"];

var [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20] = places;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s8);
console.log(s9);
console.log(s10);
console.log(s11);
console.log(s12);
console.log(s13);
console.log(s14);
console.log(s15);
console.log(s16);
console.log(s17);
console.log(s18);
console.log(s19);
console.log(s20);