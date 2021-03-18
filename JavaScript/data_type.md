# 데이터 타입
자바스크립트는 7개의 데이터 타입을 제공하는데 원시타입과 객체타입으로 분류할 수 있다.

## 숫자 타입
- 배정밀도 64비트 부동소수점 형식을 따른다.
- 모든 수를 실수로 처리한다.
  - Infinity : 양의무한대
  - -Infinity: 음의 무한대
  - NaN : 산술 연산 불가(not-a-number) → 자바스크립트는 대소문자를 구별하므로 NAN, Nan, nan은 식별자로 인식

## 문자열 타입
- 0개 이상의 16비트 유니코드 문자(UTF-16)의 집합으로 전 세계 대부분의 문자를 표현할 수 있다.
- 문자열은 작은따옴표(''), 큰따옴표(""), 백틱(``)으로 텍스트를 감싼다.
```
var string1 = '문자열'
var string2 = "문자열"
var string3 = `문자열`
var string4 = '작은따옴표를 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
var string5 = "작은따옴표를 감싼 문자열 내의 '큰따옴표'는 문자열로 인식된다.";
```

  ### 템플릿 리터럴
  - ES6부터 도입된 새로운 문자열 표기법이다.
  - 백틱(``)을 사용해 표현한다.
    #### 멀티라인 문자열
    - 일반 문자열 내에서 줄바꿈의 공백을 표현하려면 백슬래시(\)로 시작하는 이스케이프 시퀀스를 사용해야 한다.    

|이스케이프 시퀀스|의미|
|-|-|
|\0|Null|
|\b|백스페이스|
|\n|개행 : 다음 행으로 이동|
|\r|개행 : 커서를 처음으로 이동|
|\t|탭(수평)|
|\v|탭(수직)|
|\'|작은따옴표|
|\"|큰따옴표|
|\\ |백슬래시|

## 불리언 타입


## undefined 타입


## null 타입


## 심벌 타입


## 객체 타입