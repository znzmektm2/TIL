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
enum GenderType {
    Male = "male",
    Female = "female"
}

let student1 = {
    studentID: 12345,
    studentName: "Jake",
    age: 20,
    gender: GenderType.Female,
    subject: "TypeScript",
    courseCompleted: true
}

interface Student {
    readonly studentID: number;
    studentName: string;
    age?: number;
    gender: "male" | "female";
    subject: string;
    courseCompleted: boolean;
    // addComment (comment: string): string;
    addComment?: (comment: string) => string;
}

// function getStudentDetails (studentID: number): object {

// }

function getStudentDetails (studentID: number): Student {
    return {
        studentID: 12345,
        studentName: "Jake",
        gender: "female",
        subject: "TypeScript",
        courseCompleted: true
    }
}

function saveStudentDetails(student: Student): void {
    //student.studentID = 1111;
}

saveStudentDetails(student1);



// //** Type Aliases */
type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price: StrOrNum): void => {

};

const findOderID = (customer: { customerId: StrOrNum, name: string}, productId: StrOrNum): StrOrNum => {
    return orderID;
}

type StringOrNum = number | string;
let itemPrice: number;

const setItemPrice = (price: StringOrNum): void => {
    if(typeof price === 'string') {
        price = 0;
    } else {
        itemPrice = price;
    }
};

setItemPrice(50);


