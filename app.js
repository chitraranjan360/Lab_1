//Task 2.1 Console levels
console.log('Week 2 lab loaded ✅');
console.error('This is an error message');
console.warn('This is a warning message');
console.info('This is an info0rmation message!');



//Task 2.2 Console Table Demo
console.log("This is a console Table demo")
const demo = [
    { name: 'Asha', country: 'Nepal', age: 20 },
    { name: 'Rafi', country: 'Bangladesh', age: 22 }
];
console.table(demo);

//Task 2.3 Assert Error demo
console.log("This is a console Assert demo")
const ageValue = Number('not-a-number');
console.assert(Number.isFinite(ageValue), 'Age must be a number');

//Task 2.4 Time stamp demo
console.log("This is a console Time stamp demo")
console.time('loop');
let total = 0;
for (let i = 0; i < 1000000; i++) total += i;
console.timeEnd('loop');
console.log('total =', total);

//Part 3
console.log("This is PART 3");

//Task 3.1 const by default
//Create these variables using const (and log each with typeof):
const moduleCode = 'CTEC3705';
const lesson = 'Week 2: JavaScript Foundations';
const isLab = true;
const room = 101;

console.log(`Type of moduleCode: ${typeof (moduleCode)}`);
console.log(`Type of lesson: ${typeof (lesson)}`);
console.log(`Type of isLab: ${typeof (isLab)}`);
console.log(`Type of room: ${typeof (room)}`);

//Task 3.2,let for reassignment
// Create counter variable
let counter = 0;
for (let i = 1; i <= 3; i++) {
    counter++;
    console.log(`Counter value: ${counter}`);
}
console.log(`Final Counter value: ${counter}`);

//Task 3.3 template literal + DOM update
//update pagetitle using template literal
const pageTitle = document.querySelector('#pageTitle');
pageTitle.textContent = `${moduleCode} — ${lesson}`;

//Part 4
console.log("This is PART 4");

//Task 4.1
const students = [];


//Task 4.2 , read four input values and use trim() on name and skills
const addBtn = document.getElementById('addBtn');
//element that created in ul to store student list
 
 const ul = document.querySelector('#studentList');
addBtn.addEventListener('click', () => {
    const formMsg = document.getElementById('formMsg');
    const nameInput = document.getElementById('nameInput').value;
    const name = nameInput.trim();
    const age = Number(document.getElementById('ageInput').value);
    const country = document.getElementById('countryInput').value;
    const skillsInput = document.getElementById('skillsInput').value;
    const skills = skillsInput.split(',').map(s => s.trim()).filter(f => f.length > 0); //Task 7.2 


    //Task 4.3 validate the inputs and show error messages in formMsg element
    
    if (name === '') {
        formMsg.textContent = 'Name is required!';
        return;
    }
    else if (!(isFinite(age) && age >= 0)) {
        formMsg.textContent = 'Age must be a non-negative number!';
        return;
    }
    else if (country === '') {
        formMsg.textContent = 'Country is required!';
        return;
    }
    else if (skills.length === 0 || skills[0] === '') {
        formMsg.textContent = 'At least one skill is required!';
        return;
    }else{
        //Task 5.1, Using ternary based to show message
        formMsg.textContent = skills.length >= 3 ? 'Submitted!, Congratulations you have 3 skills!' : 'Submitted! But Consider adding more skills.'
    }
    

    const student = {
        name,
        age,
        country,
        skills
    };
    students.push(student);
    renderStudentList(students);
});

//Task 4.4 
function renderStudentList(list) {
    
    ul.innerHTML = '';

    for (const student of list) {
       const li = document.createElement('li');
        li.textContent = `${student.name} (${student.country}) — age ${student.age} — skills: ${student.skills.join(', ')}`;
        ul.appendChild(li);
    }
}

//add even handler on claer form button
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {

    nameInput.value = '';
    ageInput.value = '';
    countryInput.value = '';
    skillsInput.value = '';
    formMsg.textContent = 'Waiting...'

});
//Show all function
const showAllBtn = document.getElementById('showAllBtn');
const summaryMsg = document.getElementById('summary');
showAllBtn.addEventListener('click', () => {

    if (students.length > 0) {
        summaryMsg.textContent = '';
        return renderStudentList(students);
        

    }
    else {

        summaryMsg.textContent = 'No Students add to list!'
    }

})

//Reset list
const resetListBtn = document.getElementById('resetBtn');
resetListBtn.addEventListener('click', () => {
    const ok = confirm("Are you sure! you want to reset the List?")

    if(ok){

        return resetList();
    }
   
});

function resetList(){
     if (students.length > 0) {
        students.length = 0;
        summaryMsg.textContent = 'List is removed successfully!';
        ul.innerHTML='';
        
    }
    else {
        summaryMsg.textContent = 'No Students add to list!'
    }
}

//This is part 5
console.log("This is part 5");

//Task 5.2 greeting message when picking random studend according to their country
const randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', () => {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    greeting(randomStudent);
});

function greeting(student) {
    let greetMsg;

    switch (student.country) {
        case "Nepal":
            greetMsg = "Namaste";
            break;
        case "Bangladesh":
            greetMsg = "Darsan bangla";
            break;
        case "Denmark":
            greetMsg = "Hi";
            break;
        default:
            greetMsg = "Hello";
    }

    summaryMsg.textContent = greetMsg;
};

//Part 6.

//Task 6.1 Calculate average age clicking button

const avgBtn = document.getElementById('avgBtn');
avgBtn.addEventListener('click', () => {
    if (students.length > 0) {
        const msg = averageAge(students);
        summaryMsg.textContent = `Average Age is: ${msg}`;
    } else{
        summaryMsg.textContent = 'No Students add to list!';
    }
});

function averageAge(students) {
    let totalAge = 0;
    for(let i=0; i < students.length; i++){

        totalAge += students[i].age;
    }
    const avg = Math.round(totalAge / students.length);
    return avg; 
}

//Task 7.2 — includes email mini-check
const emailMsg = document.getElementById('emailMsg');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const emailInput = document.getElementById('email').value.trim(); 
    emailMsg.innerHTML = '';

    if (emailInput.includes('@')) {
        emailMsg.textContent = 'Your Email is valid!';
    } else {
        emailMsg.textContent = 'You must include @ in your email!';
    }
});

//Part 9
console.log('This is Part 9');
//Task 9.1 Filter button for bangladesh/Nepal
const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', () => {
    const result = filtered(students);
    console.log(result);
    summaryMsg.textContent = result.map(s => `${s.name} - ${s.country}\n`);
});

function filtered(students) {
    let filteredStudents = [];

    students.forEach(student => {
        if (student.country === 'Nepal' || student.country === 'Bangladesh') {
            filteredStudents.push(student); 
        }
    });

    return filteredStudents; 
}
//Task 9.2

const names = ['Chitra','Sandu','Sunil']

const UpperNames = names.map(s => s.toUpperCase());
 console.table(UpperNames);


const name1 = [
    { name: 'Chitra', country: 'Nepal' },
    { name: 'Sara', country: 'Bangladesh' },
    { name: 'sunil', country: 'Denmark' },
    { name: 'Anu', country: 'USA' },
];
 
name1.forEach(student => {
    console.log(`${student.name} from ${student.country}`);
});
