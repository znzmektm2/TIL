# Object Oriented Programing (객체지향 프로그래밍)
- 연관된 변수와 함수들을 한 덩어리로 묶어서 구조화하여 표현하는 프로그래밍 스타일
- 어플리케이션을 실제 세상에 존재하는 객체(연관된 변수와 함수들의 집합)와 같은 단위로 쪼개고 객체들이 서로 상호 작용함으로써 시스템이 동작하는 것

## Class (클라스)
- 객체는 Class를 통해서 만들어질 수 있고, Class는 객체가 어떤 모습을 가질지 정의하고 묘사하는 객체의 뼈대, 즉 객체를 만들어내는 설계도, 생산틀을 말한다.
- Class 내 변수는 let이나 const 키워드를 사용하지 않는다.
- Class 속에서 정의된 함수들은 Class 내 정의된 변수들에게 접근 가능하기 때문에, 그 변수들을 또다시 매개변수로 넣어줄 필요가 없다. 따라서 상대적으로 적은 매개변수를 가진다.
- 함수에 매개변수가 적을수록 더욱 더 쉽게 함수를 사용할 수 있고, 쉬운 유지보수와 깨끗한 코드를 쓸 수 있다.

**프로퍼티 (Property) : Class 내에 정의된 변수**
**메소드 (Method) : Class 내에 정의된 함수**

![2021-03-29 22 41 12](https://user-images.githubusercontent.com/35294456/112845632-08399e80-90e0-11eb-9aff-d758c09a5961.png)

## Object (객체)
객체를 생성할 때 Class의 인스턴스를 만든다라고 한다. new 키워드와 함께 Class의 이름과 괄호를 쓰고, 변수에 할당하면 객체가 생성된다.

![2021-03-29 22 48 13](https://user-images.githubusercontent.com/35294456/112846355-ee4c8b80-90e0-11eb-8eaa-9be88e48127d.png)

employee1은 Employee라는 클래스를 뼈대로 삼아 만들어진 객체이기 때문에 클래스가 가지고 있는 프로퍼티와 메소드를 그대로 가지게 된다.

![2021-03-29 22 48 38](https://user-images.githubusercontent.com/35294456/112846363-ef7db880-90e0-11eb-9821-a97d5932e29a.png)

undefinend와 NaN이 나오는 이유는 아직 employee1의 프로퍼티에 값이 할당되지 않았기 때문이다.

![2021-03-29 22 57 05](https://user-images.githubusercontent.com/35294456/112847487-17215080-90e2-11eb-9510-99b29b1d5ff5.png)

![2021-03-29 22 56 56](https://user-images.githubusercontent.com/35294456/112847528-20122200-90e2-11eb-9d8b-8fc5ba8b8ca6.png)
