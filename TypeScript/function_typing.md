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
- 위의 문제를 위한 방법은 선택적 매개변수를 사용하는 것이다.
- 선택적 매개변수는 변수 오른쪽 물음표(?)를 붙인다. 이 변수는 있어도 되고 없어도 되는 변수이다.

![2021-03-25 00 14 01](https://user-images.githubusercontent.com/35294456/112334763-039b7180-8cff-11eb-8fe0-1b902d82571b.png)

위 코드를 실행시키면 userName 값은 전달되지 않아 undefined가 console.log에 찍히는 것을 볼 수 있다.

![2021-03-25 00 26 07](https://user-images.githubusercontent.com/35294456/112336735-b0c2b980-8d00-11eb-9da5-eef5c4649fc6.png)

- **선택적 매개변수들은 무조건 필수 매개변수들 뒤에 위치해야 한다.**

앞에 위치하면 에러를 발생시킨다.
![2021-03-25 00 22 16](https://user-images.githubusercontent.com/35294456/112336131-27ab8280-8d00-11eb-811f-71b4ce8d60b9.png)

## 매개변수에 디폴드 값을 주는 방법
- 파라미터 뒤에 Equals sign(=)과 기본값이 될 값을 할당해준다.
- 이렇게 디폴드 값을 할당해주면 더이상 선택적 매개변수가 필요하지 않기 때문에 물음표는 지워준다.
- 그리고 매개변수의 타입도 지워준다. 타입스크립트는 타입 추론으로 인해 할당된 디폴트 값을 통해 타입을 추론하기 때문이다.

![2021-03-25 00 38 49](https://user-images.githubusercontent.com/35294456/112338845-79eda300-8d02-11eb-9fc8-f5c5e88916f4.png)


**화살표 함수로 표현하는 방법**
```
const sendGreeting = (message: string, userName = 'there') : void => console.log(`${message}, ${userName}`);

sendGreeting('Hello');
```