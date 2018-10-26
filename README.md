# NAStreamer

NAS + Streaming Service With Node Engine And RaspberryPi

<hr />
<h4>프로젝트 퀵스타트</h4>
엔진: node<br>
확장성 앱: trello(with git flow),slack(예정)<br>
에디터: 상관없음(하지만 vscode를 더 추천)<br>
추가로 yarn을 쓰는 것을 권유

1. `yarn`
   맨 처음 프로젝트를 클론받고 yarn 으로 모듈을 깐다<br>
2. `yarn dev`<br>
   개발 모드로 이 프로젝트를 키면 완료!<br>
3. `trello & git-flow & pull-request`<br>
   기본적으로 개발 프로세스는 이 3 가지로 이루어집니다.<br>
4. 소통은? `slack(예정)`<br>
   파일의 구조나 기본적인 대화를 슬랙을 만들어 할 예정입니다.

<hr />
<h4>기본 파일 구조</h4>

1. route<br>
   나중에 여기서 api 를 다룰 예정<br>
2. pages<br>
   nextjs 참조<br>
3. container<br>
   상태관리 컴포넌트는 여기로<br>
4. components<br>
   컴포넌트는 밑에 페이지 별로 폴더가 있고 그 페이지 안에 쓰는 것을 담아둔다<br>
   레이아웃 컴포넌트들은 레이아웃 폴더에(메타태그 같은건 레이아웃에서)<br>

<hr />
<h4>참고 문서</h4>

1. nextjs - <a>https://nextjs.org/</a>
2. nextjs(velopert) - <a>https://velopert.com/3293</a>
3. materialui - <a>https://material-ui.com/</a>
4. express - <a>https://expressjs.com/ko/</a>
5. axios(velopert) - <a>https://velopert.com/1552</a>
6. airbnb coding convention - <a>https://github.com/airbnb/javascript</a>
7. bem 방법론 - <a>https://medium.com/witinweb/css-%EB%B0%A9%EB%B2%95%EB%A1%A0-1-bem-block-element-modifier-1c03034e65a1</a>
8. video - <a>https://video-react.js.org/</a>
9. <a>https://medium.com/@LetMeEatTheCake/next-js-2-0%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%B3%B4%EB%8B%A4-%EB%82%B3%EC%9D%80-universal-javascript-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-70fb32714ad4</a>
10. react - <a>https://reactjs.org/</a>
11. 프레젠테이션 컴포넌트와 컨테이너 컴포넌트 - <a>https://blueshw.github.io/2017/06/26/presentaional-component-container-component/</a>
12. 리액트 스타일링 - <a>https://jsramblings.com/2017/09/22/understand-the-react-styling-paradigms.html</a>
13. Commanderjs(나중에 파일 다운로드 받거나 forever 하면 좋을 듯) - <a>https://github.com/tj/commander.js</a>
14. foreverjs(파일 계속 켜놓기) - <a>https://github.com/foreverjs/forever</a>
15. git-flow(우아한 형제들) - <a>http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html</a>
16. git-flow(ihoneymon) - <a>https://gist.github.com/ihoneymon/a28138ee5309c73e94f9</a>
17. react tutorial(velopert) - <a>https://velopert.com/3676</a>
    <hr />
        추천 eslint+prettier<br>
        vscode setting<br>
        <code>{
            "editor.formatOnSave": true,
            "javascript.format.enable": false,
            "prettier.eslintIntegration": true
        }
        </code>
