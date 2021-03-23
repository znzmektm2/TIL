# Any 타입
- 어떠한 타입의 값이든 변수에 할당할 수 있다.
- 타입의 체크를 안한다.
- 타입스크립트는 타입에 관한 정보를 많이 명시할수록 더 좋기 때문에 Any 타입을 최대한 피하는 것이 좋다.
- 작업중인 코드에 타입 명시가 어려운 경우, 예를들어 써드 파티 라이브러리에서 동적으로 컨텐츠를 가져올 때 변수에 타입을 알 수 없을 때만 제한적으로 사용한다.
- 어떤 타입으로 재할당해도 에러가 발생하지 않는다.

```
let someValue: any = 5;
someValue = 'hello';
someValue = true;
```

# Union 타입
- 제한된 타입들을 동시에 지정하고 싶을 때
- 예를들어 타입이 무조건 숫자나 문자열인지 아는 경우 
- 파이프(|) 기호로 타입을 조합해서 사용
- 지정한 타입들 이외의 값을 재할당하면 에러가 발생

```
let price: number | string = 5;
price = 'free';
```

# Type Aliases
- 같은 타입의 조합이 계속 반복될 경우 재활용할 때 사용
- type 키워드를 사용해서 타입의 조합을 변수에 지정해서 사용

![2021-03-23 22 44 59](https://user-images.githubusercontent.com/35294456/112156262-6c181f00-8c29-11eb-977e-7aaa0fbcaca8.png)

![2021-03-23 22 45 44](https://user-images.githubusercontent.com/35294456/112156337-8225df80-8c29-11eb-9192-8989b160ae0f.png)

# Type Guards
- Union 타입을 사용할 때 Typeof 연산자를 사용하여 코드 검증을 수행하는 것

setItemPrice 함수 내에서 itemPrice 변수에 price를 할당해 주면 에러가 발생한다. price의 타입이 number와 string을 지정한 Union 타입이기 때문에 string이 올 수 있어서 에러를 발생시킨다.
![2021-03-23 22 37 37](https://user-images.githubusercontent.com/35294456/112155164-61a95580-8c28-11eb-9c8c-bbfe5fa574c8.png)

Typeof 연산자와 조건문을 사용하여 문제를 해결할 수 있다.
![2021-03-23 22 40 04](https://user-images.githubusercontent.com/35294456/112155665-daa8ad00-8c28-11eb-9cfb-93570eba68fb.png)