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
       itemPrice = 0;
   } else {
       itemPrice = price;
   }
};

setItemPrice(50);



// //** 함수의 타이핑, 선택적 매개변수와 기본 매개변수 */
// function sendGreeting (message: string, userName = 'there') : void {
//     console.log(`${message}, ${userName}`);
// } 

const sendGreeting = (message: string, userName = 'there') : void => console.log(`${message}, ${userName}`);

// sendGreeting('Hello');



// //** OOP 객체지향 프로그래밍이란? 클래스와 오브젝트 관계 파헤치기 */
class Employee {
    fullName: string;
    age: number;
    jobTitle: string;
    hourlyRate: number;
    workingHoursPerWeek: number;

    printEmployeeDetails = (): void => {
        console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate * this.workingHoursPerWeek} 달러 이다.`)
        
    }
}

let employee1 = new Employee();
employee1.fullName = '민수';
employee1.age = 28;
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();