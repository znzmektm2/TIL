아래 interface에서 어떤 프로퍼티의 값을 String이 아닌 내가 원하는 값(예 : male, female)으로 제한하고 싶을 때 사용할 수 있는 방법이 있다.

```
interface Student {
    gender: String
}
```

# 1. Enum (열거형)
연관된 아이템들을 함께 묶어서 표현할 수 있는 수단이다.
컴파일시 코드가 구현되어 자바스크립트 파일에 나타나는데 이것은 Enum이 런타임에 존재하는 실제 객체라는 것을 보여준다.

```
enum GenderType {
    Male,
    Female
}
```
```
interface Student {
    gender: GenderType.Male
}
```

## Numberic Enum (숫자 열거형)
enum 속에 선언된 아이템의 순서에 따라 0 부터 순차적으로 증가하는 숫자를 할당하는 것을 말한다.

```
enum GenderType {
    Male = 0,
    Female = 1
}
```

컴파일시
```
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
```

## String Enum (문자형 열거형)
enum 속의 값의 value가 숫자값이 아닌 문자값 String을 갖기를 원할 때 사용

```
enum GenderType {
    Male = "male",
    Female = "female
}
```

컴파일시
```
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
```

# 2. Literal Type
인터페이스의 gender 프로퍼티 값에 바로 파이프(|) 표시를 넣고 String value를 구분시켜주면 된다.

```
interface Student {
    gender: "male" | "female"
}
```

Student 인터페이스의 타입을 리턴하는 함수로 와서 gender 프로퍼티의 값을 쓸 때, 리터럴 타입 속에 정의된 String 값에 대해서 auto complete option을 주게 된다.

![2021-03-22 23 27 02](https://user-images.githubusercontent.com/35294456/112005470-22b2cb80-8b66-11eb-9989-62210a7447a8.png)

