# 뷰 컴포넌트

## 컴포넌트란?
화면을 구성하는 각 영역들인 블록을 의미한다.  
화면의 영역을 컴포넌트로 쪼개서 재활용할 수 있는 형태로 관리하면 나중에 코드를 다시 사용하기가 훨씬 편하고 남이 작성한 코드를 직관적으로 이해할 수 있다.  
뷰 컴포넌트를 등록하는 방법은 전역과 지역 두 가지가 있다.

## 전역 컴포넌트
- 여러 인스턴스에서 공통으로 사용할 수 있다. 따라서 인스턴스가 여러 개 이더라도 어느 곳에서든지 사용할 수 있다.
- 뷰 라이브러리를 로딩하고 나면, 접근가능한 Vue 생성자에서 Vue.component('컴포넌트 이름', { //컴포넌트 내용 }); 의 형식으로 등록한다.
- 컴포넌트 이름은 HTML 사용자 정의 태그 이름을 의미한다.
- 컴포넌트 내용에는 template, data, methods 등 인스턴스 옵션 속성을 정의할 수 있다.
- 인스턴스를 생성하고 el 속성으로 화면에 그려질 시작점을 설정한다.

```
<html>
  <head>
    <title>Vue Global Components</title>
  </head>
  <body>
    <div id="app">
      <h3>전역 컴포넌트 등록</h3>
      <my-global-component></my-global-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      // 전역 컴포넌트 등록
      Vue.component('my-global-component', {
        template: '<div>전역 컴포넌트 입니다.</div>'
      });

      new Vue({
        el: '#app'
      });
    </script>
  </body>
</html>
```

## 지역 컴포넌트
- 특정 인스턴스에서만 유효한 범위를 갖는다. 따라서 새 인스턴스를 생성할 때마다 등록해 주어야 한다.
- 인스턴스에 components 속성을 추가하여 컴포넌트 이름과 내용을 정의한다.

```
<html>
  <head>
    <title>Vue Local Components</title>
  </head>
  <body>
    <div id="app">
      <h3>지역 컴포넌트 등록</h3>
      <my-local-component></my-local-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      // 지역 컴포넌트 내용
      var cmp = {
        template: '<div>지역 컴포넌트 입니다.</div>'
      };

      new Vue({
        el: '#app',
        // 지역 컴포넌트 등록
        components: {
          'my-local-component': cmp
        }
      });
    </script>
  </body>
</html>
```

## 뷰 컴포넌트 통신
컴포넌트는 자체적으로 고유한 유효범위를 가지고 있기 때문에 같은 웹 페이지에 있더라도 데이터를 공유할 수 없고, 다른 컴포넌트의 값을 참조할 수도 없다.  
따라서 뷰 프레임워크에서 정의한 컴포넌트 데이터 전달 방식을 따라야 하는데 가장 기본적인 데이터 전달 방식은 상위에서 하위 컴포넌트로 전달하는 것이다.  
지역 또는 전역 컴포넌트를 인스턴스에 등록하게 되면 등록된 컴포넌트는 자동적으로 하위 컴포넌트가 되고 그 인스턴스는 상위 컴포넌트가 된다.

## 상위에서 하위 컴포넌트로 데이터를 전달하는 방법
props 속성을 사용하여 상위에서 하위 컴포넌트로 데이터를 전달한다.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Props Sample</title>
  </head>
  <body>
    <div id="app">
      <child-component v-bind:propsdata="message"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      Vue.component('child-component', {
        props: ['propsdata'],
        template: '<p>{{ propsdata }}</p>',
      });

      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue! passed from Parent Component'
        }
      });
    </script>
  </body>
</html>
```
1. new Vue()로 인스턴스를 만들고 el, data 속성을 만든다.
2. Vue.component()를 이용하여 하위 컴포넌트인 child-component를 등록한다.
3. child-component의 내용에 props 속성으로 propsdata를 정의한다.
4. HTML에 컴포넌트 태그를 추가하고 태그 속성으로 v-bind:propsdata="message"를 주는데 meessage는 상위 컴포넌트인 인스턴스의 data 안의 message 속성 값이다.
5. child-component의 template에 정의된 \<p>{{ propsdata }}\</p>가 message 속성 값의 내용이 된다.

## 하위에서 상위 컴포넌트로 이벤트 전달하는 방법
하위 컴포넌트에서 이벤트를 발생시켜 상위 컴포넌트가 해당 이벤트를 기다리고 있다가 수신하여 상위 컴포넌트의 메서드를 호출한다.    
$emit()과 v-on:속성을 사용하여 구현한다.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Event Emit Sample</title>
  </head>
  <body>
    <div id="app">
      <child-component v-on:show-log="printText"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      Vue.component('child-component', {
        template: '<button v-on:click="showLog">show</button>',
        methods: {
          showLog: function() {
            this.$emit('show-log');
          }
        }
      });

      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue! passed from Parent Component'
        },
        methods: {
          printText: function() {
            console.log("received an event");
          }
        }
      });
    </script>
  </body>
</html>
```
1. [show] 버튼을 클릭하면 클릭 이벤트 v-on:click="showLog"에 따라 showLog() 메서드가 실행된다.
2. showLog() 메서드 안에 this.$emit('show-log')가 실행되면서 show-log 이벤트가 발생한다.
3. show-log 이벤트는 child-component 태그의 v-on:show-log에 전달되고, v-on:show-log의 대상 메서드인 최상위 컴포넌트의 메서드 printText()가 실행된다.
4. printText()가 실행되여 콘솔로그가 출력된다.

## 관계 없는 컴포넌트 간 통신하는 방법
상위 - 하위 구조를 유지하지 않고 데이터를 주고 받으려면 이벤트 버스를 이용하면 된다.  
이벤트 버스를 구현하려면 새로운 인스턴스 1개를 더 생성하고, 그 인스턴스를 이용하여 이벤트를 보내고 받는다.  
보내는 컴포넌트에서는 .$emit()을, 받는 컴포넌트에서는 .$on()을 구현한다.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Event Bus Sample</title>
  </head>
  <body>
    <div id="app">
      <child-component></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      var eventBus = new Vue();

      Vue.component('child-component', {
        template: '<div>하위 컴포넌트 영역입니다.<button v-on:click="showLog">show</button></div>',
        methods: {
          showLog: function() {
            eventBus.$emit('triggerEventBus', 100);
          }
        }
      });

      var app = new Vue({
        el: '#app',
        created: function() {
          eventBus.$on('triggerEventBus', function(value){
            console.log("이벤트를 전달 받음. 전달 받은 값 : ", value);
          });
        }
      });
    </script>
  </body>
</html>
```

1. 이벤트 버스로 활용할 새 인스턴스를 1개 생성하고, eventBus라는 변수에 할당한다.
2. 하위 컴포넌트에는 template 속성과 methods 속성을 정의한다. template 속성에 show라는 버튼을 추가한다. methods 속성에는 showLog() 메서드를 정의하고, 메서드 안에는 eventBus.$emit()을 선언하여 첫번째 인자로 triggerEventBus라는 이벤트를 발생시키는 로직을 추가하고, 두번째 인자로는 이벤트가 발생했을 때 전달받을 100이라는 숫자를 넣는다.
3. 상위 컴포넌트의 created 라이프 사이클 훅에 eventBus.$on()으로 이벤트를 받는 로직을 선언한다. 발생한 이벤트 triggerEventBus를 수신할 때 앞에서 전달된 인자 값 100이 콘솔에 출력된다.

이벤트 버스를 활용하면 props 속성을 이용하지 않고도 원하는 컴포넌트 간에 직접적인 데이터를 전달할 수 있어 편리하지만 컴포넌트가 많아지면 어디서 어디로 보냈는지 관리가 되지 않는 문제가 발생한다. 이를 해결하려면 **Vuex**라는 상태 관리 도구가 필요하다.