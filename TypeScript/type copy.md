# 타입스크립트에서 함수를 작성하는 방법
함수의 타입을 명시하는 방법에는 함수의 return 타입과 함수의 매개변수가 있다.

## 1. 함수의 return 타입을 명시하는 방법
- 함수의 소괄호와 중괄호 사이에 콜론(:)을 붙이고 타입을 명시
- void 타입 : 함수의 리턴값을 아무것도 반환하지 않는 타입
- string 타입 : string을 반환하는 타입
- string[] 타입 : string 배열을 반환하는 타입

```
function sendGreeting (message, userName) : string[] {
    return ['Hello', 'Mark'];
}

```

## 2. 함수의 매개변수의 타입을 명시하는 방법
- 매개변수 오른쪽에 콜론(:)을 붙이고 타입을 명시

```
function sendGreeting (message: string, userName: string) : void {
    console.log(`${message}, ${userName}`);
}

sendGreeting('Hello', 'Mark');
```

여기서 함수 호출시 'Mark'를 빼면 에러를 발생시킨다.
타입스크립트 컴파일러는 함수에 정의된 매개변수와 함수를 호출할 때 전달되는 argument를 비교 검사하게 되어있는데 그 수가 일치하지 않으면 에러를 발생시키기 때문이다.

![2021-03-24 23 32 45](https://user-images.githubusercontent.com/35294456/112328025-46f2e180-8cf9-11eb-98fd-ff88b20338ed.png)


## 선택적 매개변수를 전달하는 방법


## 매개변수에 디폴드 값을 주는 방법

