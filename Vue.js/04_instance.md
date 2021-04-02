# 뷰 인스턴스  
- 뷰 인스턴스는 뷰로 화면을 개발하기 위해 필수적으로 생성해야 하는 기본적인 단위이다.
- new Vue()로 뷰 인스턴스를 생성한다.

## 뷰 인스턴스 속성  
뷰 인스턴스는 여러가지 옵션 속성을 정의하여 사용한다. 아래 옵션 이외에도 여러가지가 있다.

```
new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue.js!'
    }
});
```

- **el** : el 속성은 뷰로 만든 화면이 그려지는 시작점을 의미한다. 뷰 인스턴스를 사용하여 화면을 렌더링 할 때 화면이 그려질 위치의 돔 요소를 지정해 주어야 한다. 아이디를 가진 요소로 # 선택자를 사용하여 나타내는데 CSS 선택자 규칙과 같다.
- **data** : data라는 속성을 미리 정의하여 그 안에 message라는 새로운 속성을 추가해 'Hello Vue.js!' 라는 값을 주어 화면에 출력할 수 있다.
- **template** : 화면에 표시할 HTML, CSS 등의 마크업 요소를 정의하는 속성이다.
- **method** : 화면 로직 제어와 관계된 메서드를 정의하는 속성이다. 마우스 클릭 이벤트 저리와 같은 화면의 전반적인 이벤트와 화면 동작과 관련된 로직을 추가할 수 있다.
- **created** : 뷰 인스턴스가 생성되자마자 실행할 로직을 정의할 수 있는 속성이다. 뷰 인스턴스 라이프 사이클에 해당된다.

## 뷰 인스턴스 라이프 사이클
인스턴스의 상태에 따라 호출할 수 있는 속성들을 라이프 사이클 속성이라고 한다. 그리고 각 라이프 사이클 속성에서 실행되는 커스텀 로직을 라이프 사이클 훅이라 한다.

**인스턴스 생성 → **
