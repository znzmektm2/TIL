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
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 12345,
    studentName: "Jake",
    age: 20,
    gender: GenderType.Female,
    subject: "TypeScript",
    courseCompleted: true
};
// function getStudentDetails (studentID: number): object {
// }
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: "Jake",
        gender: "female",
        subject: "TypeScript",
        courseCompleted: true
    };
}
function saveStudentDetails(student) {
    //student.studentID = 1111;
}
saveStudentDetails(student1);
var totalCost;
var orderID;
var calculateTotalCost = function (price) {
};
var findOderID = function (customer, productId) {
    return orderID;
};
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
// //** 함수의 타이핑, 선택적 매개변수와 기본 매개변수 */
function sendGreeting(message, userName) {
    if (userName === void 0) { userName = 'there'; }
    console.log(message + ", " + userName);
}
sendGreeting('Hello');
