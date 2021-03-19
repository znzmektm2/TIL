# Static Typing (정적 타이핑)
타입을 선언하고 선언된 타입에 맞는 값만이 할당, 반환되어야 한다는 뜻

## 타입 추론 (Type Inference)
  - 타입스크립트에서는 타입 표기가 없는 경우 코드를 읽고 분석하여 타입을 유추해낸다.  
  - 함수의 리턴되는 값을 뺄셈 연산자로 표현하게 되면 타입스크립트는 그 리턴값을 숫자 타입이어야 한다고 추론한다.

![2021-03-19 17 47 42](https://user-images.githubusercontent.com/35294456/111754352-3b5b8100-88db-11eb-98b7-983b42019aa3.png)

## 타입 명시 (Type Annotations)
- 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정한다.
- 타입 명시 방법은 변수나, 함수, 객체의 프로퍼티 키값 등을 선언할 때 오른쪽에 콜론과 타입을 써준다.
```
let name: string = 'Jake';
let age: number = 10;
```
- 함수의 타입을 명시할 때 void는 아무것도 반환하지 않는다는 뜻이다. return 하게 되면 에러가 발생한다.
 
![2021-03-19 19 53 40](https://user-images.githubusercontent.com/35294456/111769663-d3159b00-88ec-11eb-8bd2-6baea294a502.png)
<br>

- 함수의 타입을 object라고 명시하고 object 값을 리턴하지 않으면 오류를 발생시킨다.
 
![2021-03-19 20 01 15](https://user-images.githubusercontent.com/35294456/111770529-deb59180-88ed-11eb-9088-1f5ee259873d.png)