1. TCP/IP에서 Socket은 식별할 필요가 없다. 한 번 연결하면 Connection이 유지되는데 식별은 자동으로 되지.

2. HashMap: 사용자 정보를 담고 있는 서버 측의 자료구조
(key = 소켓 객체 그 자체, value = 사용자 정보)
=> Session store
=> 객체를 참조하는 비용은 적다

3. 그런데 HTTP는 stateless이므로, socket connection 끊고 맺음을 반복적으로 수행한다.
=> 로그아웃했다가 다시 로그인하면 그 사용자인지 어떻게 알아??
=> 동일한 소켓 객체 자체로 계속해서 식별하기가 어렵다

4. Cookie를 이용하여, session-id를 대신 key로 사용한다.

5. 탈취하기 어렵도록 session-id 생성은 uuid
(굉장히 큰 값으로 많이 넣는다)

6. 과정
<최초 로그인>
- 로그인 인증 (user DB)
- uuid session id 생성
(session DB => session id / userid / username이 들어가겠죠?)
(username이 들어가는 이유: OOO님이 접속하셨습니다. 이런 거 매번 보여주기 위해 user DB를 매번 뒤질 수는 없잖아?)
- 서버는 response에 session id를 담아 보낸다.

<로그인 상태에서 다시 요청 보낼 때>
- session id를 담아서 request
- session DB를 탐색하여 어떤 사용자인지 식별가능

7. express는 위에서 아래로 순차적으로 호출한다.
=> 요청이 들어올 때마다 app.js를 실행한다고 생각하면 된다.
=> response를 보내는 작업을 하면 끝난다 (아래를 더 이상 호출하지 않음)
=> response를 보내지 않으면 next()를 해줘야만 아래로 넘어간다. (다음 미들웨어로 넘어간다)

8. 즉, app.use()의 콜백함수에는
-> response를 보내거나
-> next()를 호출해야만 한다
(그렇지 않으면 그 app.use()에서 멈추고 응답을 계속 기다린다)

9. render -> view를 그리는 작업

10. 미들웨어 = response(응답)을 보내기 전까지 적절한 처리를 하는 함수라고 생각하면 된다

11. app.use()와 app.get()의 차이?
=> get은 GET method에만 반응하지만, use는 모든 method에 반응한다.

12. app.use()의 콜백함수의 매개변수가 4개이면
=> error handler

13. 이전 미들웨어의 next()에 매개변수에 아무 인자를 집어넣으면 바로 error handler middleware로 넘어간다.

14. 단점: 비동기 에러처리가 어렵다. 나중에 직접 해결해봐.