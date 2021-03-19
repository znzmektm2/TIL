// //** 설치와 환경 설정 */

// function logName(name: string) {
//     console.log(name);
// }

// logName('Jack');

// console.log('Hello');

// let age: number = 10;



// //** 타입 추론, 타입 명시 */

// function calculator(points) {
//     return 100 - points;
// }


// //** 인터페이스 */
let student1 = {
    studentID: 12345,
    studentName: "Jake",
    age: 20,
    gender: 'male',
    subject: "TypeScript",
    courseCompleted: true
}

interface Student {
    readonly studentID: number;
    studentName: string;
    age?: number;
    gender: string;
    subject: string;
    courseCompleted: boolean;
    // addComment (comment: string): string;
    addComment?: (comment: string) => string;
}

// function getStudentDetails (studentID: number): Student {
//     return {
//         studentID: 12345,
//         studentName: "Jake",
//         gender: 'male',
//         subject: "TypeScript",
//         courseCompleted: true
//     }
// }

function saveStudentDetails(student: Student): void {
    //student.studentID = 1111;
}

saveStudentDetails(student1);
