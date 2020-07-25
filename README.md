# **Do it! 클론 코딩 영화 평점 웹 서비스**
* Mobile-X 연구실  
2020년 3학년 1학기 하계 방학 세미나 프로젝트

---
## **목차**   
* [Ch_01 - 안녕 리액트?](#Ch_01)   
    * 01-1 클론 코딩 수업 준비하기
    * 01-2 왜 리액트일까?
    * 01-3 무엇을 클론 코딩할까?

* [Ch_02 - 리액트로 클론 코딩 시작하기](#Ch_02)
    * 02-1 슈퍼 빠른 create-react-app
    * 02-2 깃허브에 리액트 앱 업로드하기
    * 02-3 리액트 앱 살펴보고 수정하기
    * 02-4 리액트 동작 원리 알아보기

 * [Ch_03 - 리액트로 기초 개념 알아보기](#Ch_03)
    * 03-1 리액트 앱 실행 복습하기
    * 03-2 첫 번째 리액트 기초 개념: 컴포넌트
    * 03-3 두 번째 리액트 기초 개념: JSX
    * 03-4 세 번째 리액트 기초 개념: props

* [Ch_04 - 슈퍼 똑똑하게 컴포넌트 만들기](#Ch_04)
    * 04-1 비슷한 컴포넌트 여러 개 만들기
    * 04-2 map() 함수로 컴포넌트 많이 만들기
    * 04-3 음식 앱 이리저리 만지고, 고쳐보기
    * 04-4 음식 앱에 prop-types 도입하기
---
<a id = "Ch_01"></a>

## **Ch_01-안녕 리액트?**
* 클론 코딩 수업 준비하기
    1. Node.js 설치하기   
        [Node.js 설치 페이지 바로 이동](https://nodejs.org/ko/download/)

        ``` 
        > node -v  
        v12.16.1
        ```

        * Node.js란…? (Node.js 공식 사이트에서 내린 Node.js의 정의)   
            
                Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임임  
            
                Node.js는 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적임   
            
                Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리 생태계임
            
            >(Node.js는 백엔드 영역이라는 말은 오해!!   
            Node.js를 통해서 서버도 만들수 있기 때문에 생겨난 오해라고 함)

            * Node.js가 사용되는 분야   
                * 입출력이 잦은 어플리케이션
                * 데이터 스트리밍 어플리케이션
                * 데이터를 실시간으로 다루는 어플리케이션
                * JSON API 기반 어플리케이션
                * [싱글페이지](https://junsday.tistory.com/40) 어플리케이션(SPA = Single Page Application)   
                    - 단일 페이지 어플리케이션으로 정적파일을 한번에(나눠서도 가능) 모두 다운받고 이후 사용자와의 상호작용 가운데 필요한 데이터만 서버에서 (비동기)동적으로 받게 해 트래픽의 총량을 줄이는 어플리케이션 형태.   
                    웹의 사용성(UX), 속도 향상의 이점을 가지므로 모바일 퍼스트(Mobile Firtst) 전략에 부합.    
                    웹 페이지이나 데스크탑 어플리케이션 처럼 동작하는 웹 페이지


        2. npm 설치하기
            * Node.js를 설치하면 노드 패키지 매니저(이하 npm)도 함께 설치 됨
            ``` 
            > npm -v 
            6.13.4
            ```   

            * [npm(Node Packaged Manager) 이란?](https://m.blog.naver.com/magnking/220961896609)
                * Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램

            * 패키지 매니저의 예시들
                * Python: pip
                * Java: jpm
                * Javascript: npm

        3. npx 설치하기
            ``` 
            > npm install npx -g
            생략...
            + npx@10.2.2
            added 293 packages from 654 contributors in 11.548s
            > npx -v
            6.13.4
            ``` 
            * [npx란?](https://geonlee.tistory.com/32)
                * 자바스크립트 패키지 관리 모듈인 npm(Node Package Module)의 npm@5.2.0 버전부터 새로 추가된 도구.  
                * 따라서 npm@5.2.0 이상 버전만 깔려 있다면 npx 커맨드 사용 가능
                * npm 레지스트리의 패키지 사용 경험을 파악하기 위한 도구 -npm은 레지스트리에서 호스팅 되는 종속성을 매우 쉽게 설치하고 관리할 수 있으며, npx는 레지스트리에서 호스팅되는 CLI(Command Line Interface) 도구 및 기타 실행 파일을 쉽게 사용할 수 있음. 
                    * [CLI(Command Line Interface)란?](https://medium.com/@psychet_learn/cli-cli-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B2%95-c8d000ebc162)
                        > 명령 줄 인터페이스또는 명령어 인터페이스 즉 텍스트 터미널을 통해 사용자와 컴퓨터가 상호 작용하는 방식을 말함.
                * 지금까지 일반적인 npm과 관련하여 약간의 귀찮은 과정들이 필요했던 여러가지 사항을 크게 단순화함.

        4. [VSCode 설치하기](https://code.visualstudio.com/)
            * 편리한 작업 환경을 제공해줌.

        5. git 설치하기
        ``` 
        > git --version
        git version 2.26.0.windows.1
        ``` 
        * [git이란?](https://goddaehee.tistory.com/91)
            * [git 한글 공식 메뉴얼](https://git-scm.com/book/ko/v2)
---
<a id = "Ch_02"></a>

## **Ch_02-리액트로 클론 코딩 시작하기**
1. 슈퍼 빠른 create-react-app
    * create-react-app으로 리액트 앱 만들기
        ``` 
         > npx create-react-app movie_app_2020
         Success! Create movie_app_2020 at C:\movie_app_2020
         Inside that directory, you can run several commands:
     
         npm start 
           Starts the development server.
        (생략...)
         ``` 

        * 참고: [터미널 명령어](https://m.blog.naver.com/PostView.nhn?blogId=thdbsgh3443&logNo=221286374424&proxyReferer=https:%2F%2Fwww.google.com%2F)(아무것도 모른다면 터미널 사용이 어려울 수 있음)

    * npx는 create-react-app을 다운로드 한 다음 create-react-app movie_app_2020 명령어를 실행하여 리액트 앱을 생성해줌.

    * 리액트 앱 실행하기
         ``` 
         > npm start
         Compiled succesfully!
     
         You can now view movie_app_2020 in the browser.
            Local:              http://localhost:3000
            On Your Network     http://192.168.0.192:3000
         ```    

         ![Alt text](./Image/react_start.png)   

    * 리액트 앱 종료하기
        * 리액트 앱의 종료는 명령 프롬프트(터미널)에서 Ctrl + C를 누르면 됨.

2. 깃허브에 리액트 앱 업로드 하기
    * 로컬 저장소 초기화 하기
        * 터미널에서 루트 폴더로 이동한 후 다음 명령어를 입력
            ``` 
            > git init
            Initalized empty Git repository in C:/movie_app_2020/.git/
            또는
            Reinitialized existing Git repository in C:/movie_app_2020/.git/
            ```   
    * 깃허브에 저장소 만들기
    * 깃허브 저장소에 리액트 앱 업로드하기
        ``` 
        > git remote add origin github.com/[계정 이름]/movie_app_2020.git
        ```   
    * 리액트 앱 업로드
        ``` 
        > git add .
        > git commit -m "02-2 깃허브에 리액트 앱 업로드하기"
        > git push origin master
        Enumerating objects: 23, done.
        Counting objects: 100% (23/23), done.
        (생략...)
        To https://github.com/[계정 이름]/movie_app_2020
        ```   
3. 리액트 앱 살펴보고 수정하기

4. 리액트 동작 원리 알아보기
    ![Alt text](./Image/index.png)   
    * App.js, index.js 등에 있는 파일을을 리액트가 받아와서 해석하고 만든 결과물을 index.html에 끼워 넣음.   
    (따라서 <dive id = "root"> 와 </div> 사이가 비어 있게 됨   
    즉 리액트는 index.html의 <dive id = "root"> 와 </div> 중간에 넣을 결과물을 프로젝트 폴더에 있는 파일(App.js, ...)을 해석하여 만들어 넣는 역할을 담당)    
    
    1. index.js 살펴보기

        ```js
        ReactDom.render(<App />, document.getElementById('root'));
        ```   
        > 이 코드가 App.js 파일에 작성한 코드를 index.html의 아이디가 'root'인 엘리먼트에 넣어주는 것
    
    2. index.html 수정해보기   
    * index.html 파일을 열어서 `<div id="root"></div>` 을 `<div id="potato"></div>`로 바꿔보자

        ```html
        <body>
             <noscript> You need to enable JavaScript to run this app. </noscript>
             <div id="potato"></div>
             (생략...)
        </body>
        </html>
        ```  
        > 아이디가 "potato"로 바뀌어 앱이 실행되지 않음.

        ```js
        ReactDom.render(<App />, document.getElementById('potato'));
        ```   
        > 이와 같이 수정하였을 경우에는 다시 작동 됨.

    ---    
    

