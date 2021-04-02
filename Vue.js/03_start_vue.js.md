# Hello Vue.js 프로젝트 만들기  
## idnex.html 파일 생성
```
<!DOCTYPE html>
<html>
<head>
    <title>Vue Sample</title>
</head>
<body>
    <div id="app">
        {{ message }}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
        new Vue({
            el: "#app",
            data: {
                message: 'Hello Vue.js!'
            }
        })
    </script>
</body>
</html>
```

**index.html 실행화면**

![2021-04-03 04 53 16](https://user-images.githubusercontent.com/35294456/113449307-811a5c80-9438-11eb-87c8-5925dbd66369.png)

## 크롬 개발자 도구로 코드 확인하기  
크롬 개발자 도구의 Console 패널로 살펴보면 로그를 통해 두 가지 로그를 확일할 수 있다.
첫번째 로그는 뷰 크롬 익스텐션을 다운로드 하라는 로그이고,
두번째 로그는 현재 개발자 모드에서 뷰를 실행하고 있으니 상용화된 서비스를 하는 경우에는 상용화 모드로 전환하라는 로그이다.

![2021-04-03 04 54 56](https://user-images.githubusercontent.com/35294456/113449406-bde65380-9438-11eb-8dd7-657516c6788a.png)

## 뷰 개발자 도구로 코드 확인하기  
**첫 번째 로그 해결 방법**
이 로그가 찍히는 것은 뷰 개발자 도구를 설치한 사용자에게 표시된다. 왜냐하면 현재 예제를 서버에서 띄운 것이 아니라 파일 시스템이 접근하여 브라우저로 실행했기 때문이다.
이를 해결하기 위해서는 크롬 확장 플러그인 설정을 변경해야 한다. 

**[도구 더보기 → 확장 프로그램]**

설치된 확장 플러그인 목록이 나오는데 뷰 개발자 도구의 상세정보를 클릭하여 '파일 URL에 대한 액세스 허용'을 활성화 시킨다.

![2021-04-03 05 03 40](https://user-images.githubusercontent.com/35294456/113449980-f6d2f800-9439-11eb-857f-11a036d99b99.png)

![2021-04-03 05 02 49](https://user-images.githubusercontent.com/35294456/113449947-e4f15500-9439-11eb-81b8-2c97d96098fb.png)

index.html을 닫고 다시 실행하면 첫번째 로그가 사라지고 Vue 패널이 생긴 볼 수 있다.

![2021-04-03 05 04 23](https://user-images.githubusercontent.com/35294456/113450030-0eaa7c00-943a-11eb-839a-ba37e7a5c78b.png)

Vue 패널을 클릭하고 '<Root> = $vm0'을 클릭하면 Compoents에 대한 상세 내용이 나온다.
화면상 Hello Vue.js!는 최상위 컴포넌트의 data 속성인 message 값이다.