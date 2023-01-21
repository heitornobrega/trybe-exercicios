const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    return grades.map((element, index) => ({
        name: students[index],
        average: element.reduce((acc, curr) => (acc + curr), 0) / element.length
  }))
}

console.log(studentAverage());