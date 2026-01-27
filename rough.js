function findFactors(num) {
    let factors = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(findFactors(12)); 

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function squareOfPrime(num) {
    if (isPrime(num)) {
        return num * num;
    } else {
        return "Not a prime number";
    }
}

console.log(squareOfPrime(7));


const data = [
    { value: 10 },
    { value: -5 },
    { value: 3 },
    { value: 8 }
];

function smallestPositive(arr) {
    let min = Infinity;

    for (let obj of arr) {
        if (obj.value > 0 && obj.value < min) {
            min = obj.value;
        }
    }
    return min;
}

console.log(smallestPositive(data)); 


function greet1() {
    console.log("Hello");
}


const greet2 = function () {
    console.log("Hello");
};


const greet3 = () => {
    console.log("Hello");
};

const student = {
    name: "Rahul",
    age: 21,
    course: "CS"
};

console.log(student.name);     
console.log(student["age"]);  


let i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}


let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 3);


for (let i = 1; i <= 3; i++) {
    console.log(i);
}


const obj = { a: 1, b: 2 };

for (let key in obj) {
    console.log(key, obj[key]);
}


const arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

console.log(greet1());
console.log(greet2());
console.log(greet3());