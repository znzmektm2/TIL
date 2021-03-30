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

타입스크립트에서 접근 제한자는 크게 3가지가 있다.

> ## Public 
- Class 외부에서 접근 가능함
- 타입스크립트에서는 기본적으로 Class 내의 각 멤버들은 Public이다. Java와 C#과는 다르게 Public 멤버를 노출시키기 위해 Public 키워드를 명시할 필요 없이 Public이 없으면 자동으로 Public이다. 

> ## Private 
- Class 내에서만 접근 가능하고 외부에서는 접근 불가능 (비공개 멤버)

Class 내에 fullName 프로퍼티 앞에 private을 붙이면 아래와 같이 직접적으로 접근해 바꾸거나 읽을 수 없다.

![2021-03-30 23 44 28](https://user-images.githubusercontent.com/35294456/113008535-13f59580-91b2-11eb-9b8e-bd1ce61e802d.png)

![2021-03-30 23 44 56](https://user-images.githubusercontent.com/35294456/113008563-1b1ca380-91b2-11eb-8975-841ad6ca74c4.png)

![2021-03-30 23 45 50](https://user-images.githubusercontent.com/35294456/113008568-1bb53a00-91b2-11eb-99eb-46ce8209166b.png)

- private 프로퍼티는 변수명 앞에 언더스코어(_)를 넣어주는데 비공개 멤버임을 나타내 주는 암묵적인 방법이다.

![2021-03-31 00 03 11](https://user-images.githubusercontent.com/35294456/113011179-810a2a80-91b4-11eb-8792-9cf4e88a4c3d.png)

> ## Projected 
- Class 내부, 그리고 상속받은 자식 Class 에서 접근 가능


# Getter & Setter
- Get과 Set 키워드를 사용하여 Getter와 Setter를 선언할 수 있다.
- 이 Getter와 Setter가 Class 내의 메소드와 다른점은 Public 멤버변수처럼 Class 외부에서 사용할 수 있다. 즉 메소드는 ()를 사용하여 호출하지만 Getter와 Setter는 ()없이 사용한다.

![2021-03-31 00 12 38](https://user-images.githubusercontent.com/35294456/113012521-d0048f80-91b5-11eb-9507-0ce0e2809630.png)

Getter와 Setter를 써주면 fullName에 빨간줄이 사라진다. fullName의 Getter를 불렀기 때문이다.

![2021-03-31 00 13 25](https://user-images.githubusercontent.com/35294456/113012686-f3c7d580-91b5-11eb-8a5e-70f7857ced74.png)

![2021-03-31 00 13 31](https://user-images.githubusercontent.com/35294456/113012683-f32f3f00-91b5-11eb-9d22-64baf2ec8f87.png)

fullName에 다른 이름을 할당하여 Setter를 사용할 수 있다.

![2021-03-31 00 16 41](https://user-images.githubusercontent.com/35294456/113013130-6933a600-91b6-11eb-86bd-921d0c46228f.png)

![2021-03-31 00 16 49](https://user-images.githubusercontent.com/35294456/113013136-69cc3c80-91b6-11eb-88bc-532fbfafed70.png)

# Constructor에 Access Modifiers를 사용하는 방법
- 아래 코드와 같이 여전히 길고 반복된다고 느껴지는데 타입스크립트에서는 더 간단하게 나타낼 수 있는 방법이 있다.
- Constructor의 매개변수에 앞에 Access Modifiers를 붙여주면 암묵적으로 Class의 필드, 멤버변수로 선언이 된다. 즉 객체가 생성될 때 Constructor의 매개변수로 전달된 값은 타입스크립트의 컴파일러에 의해서 객체의 프로퍼티 값으로 자동으로 초기화되고 할당된다.

![2021-03-31 00 28 13](https://user-images.githubusercontent.com/35294456/113014935-04794b00-91b8-11eb-9c8a-2c4c565758d5.png)

![2021-03-31 00 27 45](https://user-images.githubusercontent.com/35294456/113014934-03481e00-91b8-11eb-80da-90e3d61db2c8.png)