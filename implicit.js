let score =  Math.floor(Math.random() * 101);
const students = [];
let myvar;

if (score === '') {
    console.log('No data');
}

if (!score || score < 0 || score > 100) {
    console.log("Invalid Score");

} else if (score >= 85 && score <= 100) {
    console.log("A");
    
} else if (score >= 75 && score <= 84) {
    console.log("B");
    
} else if (score >= 65 && score <= 74) {
    console.log("C");
    
} else if (score >= 55 && score <= 64) {
    console.log("D");
    
} else if (score >= 44 && score <= 54) {
    console.log("E");
    
} else if (score >= 0 && score <= 43) {
    console.log("F");
    
}




for (let ii = 0; ii < 50; ii++) {
    students.push(new Student(ii))    
}

students[10].grade = "A"
console.log(students[10]);
console.log(students);

function Student(id) {
    let score = Math.floor(Math.random() * 101);
    return {
        id: id,
        score: score,
        grade: undefined,
    }
}