document.querySelector(`body`).style.textAlign = `center`;
document.querySelector(`body`).style.marginLeft = `300px`;
document.querySelector(`body`).style.marginRight = `300px`;

const h5 = document.createElement(`h5`);
console.log(h5);

document.body.append(h5);
h5.innerText = `Rad 1`;

h5.style.color = `hsl(255, 100%, 72%)`;
h5.style.background = `hsl(126, 100%, 80%)`;

const h4 = document.createElement(`h4`);
console.log(h4);

document.body.append(h4);
h4.innerText = `Rad 2`;

h4.style.color = `hsl(255, 100%, 72%)`;
h4.style.background = `hsl(144, 100%, 80%)`;
h4.style.fontSize = `20px`;

const h3 = document.createElement(`h3`);
console.log(h3);

document.body.append(h3);
h3.innerText = `Rad 3`;

h3.style.color = `hsl(255, 100%, 72%)`;
h3.style.background = `hsl(155, 100%, 80%)`;
h3.style.fontSize = `30px`;

const h2 = document.createElement(`h2`);
console.log(h2);

document.body.append(h2);
h2.innerText = `Rad 4`;

h2.style.color = `hsl(255, 100%, 72%)`;
h2.style.background = `hsl(166, 100%, 80%)`;
h2.style.fontSize = `40px`;

const h1 = document.createElement(`h1`);
console.log(h1);

document.body.append(h1);
h1.innerText = `Rad 5`;

h1.style.color = `hsl(255, 100%, 72%)`;
h1.style.background = `hsl(190, 100%, 80%)`;
h1.style.fontSize = `50px`;


const div = document.createElement(`div`);
document.body.append(div);
console.log(div);

div.style.listStyle = `none`;
div.style.border = `10px solid hsl(255, 100%, 82%)`;
div.style.width = `50px`;
div.style.textAlign = `left`;
div.style.marginleft = `20px`;

for (let i = 0; i < 10; i++) {
    const li = document.createElement(`li`);
    div.append(li);
    li.innerText = (i);
    if ([i] % 2 === 0) {
        li.style.background = `black`;
        li.style.color = `white`;
    }
    if ([i] % 2 === 1) {
        li.style.background = `white`;
        li.style.color = `black`;
    }
    if (li.innerText === `4`) {
        li.style.background = `hsl(255, 100%, 82%)`;
    }
}

const div2 = document.createElement(`div`);
document.body.append(div2);
console.log(div2);

div2.style.border = `10px solid hsl(255, 100%, 82%)`;
div2.style.listStyle = `none`;
div2.style.width = `50px`;

for (let i = 10; i > 0; i--) {
    const li = document.createElement(`li`);
    div2.append(li);
    li.innerText = (i - 1);
    if ([i] % 2 === 1) {
        li.style.background = `black`;
        li.style.color = `white`;
    }
    if ([i] % 2 === 0) {
        li.style.background = `white`;
        li.style.color = `black`;
    }
    if (li.innerText === `8`) {
        li.style.background = `hsl(255, 100%, 82%)`;
    }
}

const numbers = [
    `ett`,
    `två`,
    `tre`,
    `fyra`,
    `fem`,
    `sex`,
    `sju`,
    `åtta`,
    `nio`,
    `tio`,
];

console.log(numbers);

const div3 = document.createElement(`div`);
document.body.append(div3);
console.log(div3);

div3.style.border = `10px solid hsl(255, 100%, 82%)`;
div3.style.listStyle = `none`;
div3.style.width = `50px`;
div3.style.textAlign = `right`;

for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement(`li`);
    div3.append(li);
    li.innerText = numbers[i];
    if ([i] % 2 === 0) {
        li.style.background = `black`;
        li.style.color = `white`;
    }
    if ([i] % 2 === 1) {
        li.style.background = `white`;
        li.style.color = `black`;
    }
    if (li.innerText === `sex`) {
        li.style.background = `hsl(255, 100%, 82%)`;
    }
}

const divAll = document.createElement(`div`);
document.body.append(divAll);
divAll.append(div, div2, div3);
divAll.style.border = `2px solid black`;
divAll.style.display = `flex`;
divAll.style.justifyContent = `space-evenly`;
divAll.style.paddingTop = `50px`;
divAll.style.paddingBottom = `50px`;
