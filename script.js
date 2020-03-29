// question 1
const cat = {
  complain: function() {
    console.log('Meow!');
  }
};
// your answer for question 1 goes here

// question 2
const heading = document.querySelector('h3');
console.dir(heading);
// your answer for question 2 goes here

// question 3
heading.style.fontSize = '2em';
// your answer for question 3 goes here

// question 4
const h3 = document.querySelector('h3');
console.log(h3.className);

h3.classList.add('subheading');
console.log(h3.className);
// your answer for question 4 goes here

// question 5
const paragraphs = document.querySelector('p');
console.dir(paragraphs);
// your answer for question 5 goes here

// question 6
const resultsContainer = document.querySelector('div');
console.dir(resultsContainer);

const results = document.querySelector('div');
results.innerHTML = 'New paragraph';
// your answer for question 6 goes here

// question 7
const cats = [
  {
    name: 'Blob',
    age: 10
  },
  {
    name: 'Harold'
  },
  {
    name: 'Blurt',
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

catNames(cats);
// your answer for question 7 goes here

// question 8
function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    const name = `<h5>${cats[i].name}</h5>`;
    console.log(name);
  }
}

catNames(cats);
// your answer for question 8 goes here

// question 9
const cats = [
  {
    name: 'Blob',
    age: 10
  },
  {
    name: 'Harold'
  },
  {
    name: 'Blurt',
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    const name = `<h5>${cats[i].name}</h5>`;
    console.log(name);
  }

  return 'New paragraph';
}

console.log(catNames);
// your answer for question 9 goes here

// question 10
const cats = [
  {
    name: 'Blob',
    age: 10
  },
  {
    name: 'Harold'
  },
  {
    name: 'Blurt',
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    const catInfo = `<div><h5>${cats[i].name}</h5><p>${cats[i].age}</p></div>`;

    let catAge = 'Age unknown';

    if (cats[i].age) {
      catAge = cats[i].age;
    }

    console.log(catInfo);
    console.log(catAge);
  }
}

catNames(cats);
// your answer for question 10 goes here
