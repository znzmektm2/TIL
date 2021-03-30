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
// function sendGreeting (message: string, userName = 'there') : void {
//     console.log(`${message}, ${userName}`);
// } 
var sendGreeting = function (message, userName) {
    if (userName === void 0) { userName = 'there'; }
    return console.log(message + ", " + userName);
};
// sendGreeting('Hello');
// //** OOP 객체지향 프로그래밍이란? 클래스와 오브젝트 관계 파헤치기 */
var Employee = /** @class */ (function () {
    function Employee(fullName, age, jobTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
        this.fullName = fullName;
        this.age = age;
        this.jobTitle = jobTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    return Employee;
}());
var employee1 = new Employee('민수', 28, '주니어 웹개발자', 40, 35);
// console.log(employee1.fullName);
employee1.printEmployeeDetails();
