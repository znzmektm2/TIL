# Constructor (생성자)
Constructor는 Class를 통해서 객체를 생성할 때 호출되며, 객체의 초기화를 담당한다.

![2021-03-30 23 26 15](https://user-images.githubusercontent.com/35294456/113005354-5d90b100-91af-11eb-8e85-b775dd5d1349.png)

Class를 통해서 객체를 생성할 때, Constructor에 정의된 매개변수들의 값이 Argument로 전달되어야 한다.
아래 그림처럼 인수가 전달되지 않으면 빨간줄이 뜬다.

![2021-03-30 23 26 27](https://user-images.githubusercontent.com/35294456/113005357-5e294780-91af-11eb-8bdf-4f83e86f9734.png)

아래와 같이 인수를 전달하고 실행시키면 console.log가 잘 찍히는 것을 볼 수 있다.

![2021-03-30 23 29 44](https://user-images.githubusercontent.com/35294456/113005871-cf68fa80-91af-11eb-9cdf-84961ea2e796.png)

![2021-03-30 23 29 55](https://user-images.githubusercontent.com/35294456/113005897-d55edb80-91af-11eb-83bc-49904a7f460f.png)


# Access Modifiers (접근 제한자)
Class 속 멤버 변수(프로퍼티)와 메소드에 적용될 수 있는 키워드이다.
Class 외부로부터의 접근을 통제하여 버그를 줄이고 코드의 안정성을 향상시킬 수 있다.

타입스크립트에서 크게 3가지가 있다.

## Public 
- Class 외부에서 접근 가능함
- 타입스크립트에서는 기본적으로 Class 내의 각 멤버들은 Public이다. Java와 C#과는 다르게 Public 멤버를 노출시키기 위해 Public 키워드를 명시할 필요 없이 Public이 없으면 자동으로 Public이다. 

## Private 
- Class 내에서만 접근 가능하고 외부에서는 접근 불가능 (비공개 멤버)

Class 내에 fullName 프로퍼티 앞에 private을 붙이면 아래와 같이 직접적으로 접근해 바꾸거나 읽을 수 없다.

![2021-03-30 23 44 28](https://user-images.githubusercontent.com/35294456/113008535-13f59580-91b2-11eb-9b8e-bd1ce61e802d.png)

![2021-03-30 23 44 56](https://user-images.githubusercontent.com/35294456/113008563-1b1ca380-91b2-11eb-8975-841ad6ca74c4.png)

![2021-03-30 23 45 50](https://user-images.githubusercontent.com/35294456/113008568-1bb53a00-91b2-11eb-99eb-46ce8209166b.png)


## Projected 
- Class 내부, 그리고상속받은 자식 Class 에서 접근 가능


# Getter & Setter