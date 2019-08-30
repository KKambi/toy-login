# 멤버십 프로젝트 - 로그인과 회원가입 저장소
## FrontEnd Todo

0. CSS 클래스 네이밍 / CSS variable 학습

0. font 설정

0. spa 방식 학습

1. Form Layout
   1. title
   2. input
      - text
      - password
      - checkbox (약관동의)
      - button (초기화 / 가입하기)
   3. select태그 (month를 위한 드롭다운 / 성별)
   4. header / footer 간단하게 만드세요

2. Input Focus
   1. input focus -> 테두리 색 변경
   2. input focus out -> 관련 validation check 함수 호출

3. ID Validation `by JS` `by RegExp`
   1. length: 5~20
   2. only (lower alpha + number + special symbol (_), (-))
   3. 에러메세지 출력
      1. 1~4번 에러 총괄하여 출력 (빨강색)
      2. validation suceess (초록색)

4. Password Validation `by JS` `by RegExp`
   1. length: 8~16
   2. at least, Upper alpha 1 char
   3. at least, number 1 char
   4. at least, special symbol 1 char
   5. 에러메세지 출력
      1. 각 에러마다 출력 메세지가 다름 (빨강색)
      2. validation success (초록색)

5. Password Reconfirm Validation `by JS`
   1. Password와 Password Reconfirm이 일치하는지?
   2. 에러메세지 출력
      1. 다르면 (빨강색)
      2. 같으면 (초록색)

6. Birth Date Validation `by JS` `by RegExp`
   1. placeholder (년(4자) / 일)
   2. year validation: only number / exactly 4 char / 현재년도 기준으로 15세 이상 99세 이하 범위의 년도만
   3. day validation: only number / 1~? (month에 맞도록)
   4. month range: 기본값 / year에 따라 dropdown menu range 변경
   5. 에러메세지 출력
      1. 각 오류에 대해 개별 메세지 출력 (빨강색)
      2. 조건에 부합시 메세지 없음

7. Email Validation `by JS` `by RegExp`
   1. [a-z]?/@{1}[a-z]?/.{1}[a-z] (xxx@xxx.xxx)
   2. 에러메세지 출력
      1. (빨강색)
      2. 조건에 부합시 메세지 없음

8. Phone Validation `by JS` `by RegExp`
   1. [0-9] 정규표현식
   2. placeholder
   3. 에러메세지 출력
      1. (빨강색)
      2. 조건에 부합시 메세지 없음

9. 관심사 `by JS`
   4. 관심사를 입력하고 쉼표(,)를 입력하면 다음과 같은 태그형태의 ui가 생성
   5. 만들어진 태그형태의 ui 뒤로 계속 이어서 관심사를 입력 가능
   6. 태그형태의 ui는 x버튼을 가진다.
      - x버튼을 누르면 입력됐던 태그가 삭제
   7. 마지막 태그형태의 ui 뒤에 커서를 놓고 backspace(또는 delete)키 를 입력하면 커서 앞 태그 형태의 ui가 일반 텍스트 형태로 바뀌면서 수정가능한 상태가 된다
   8. 아무 글자 없이 입력된 쉼표는 무시된다.
      - ,을 입력했을 때 => 입력한 ,가 사라진다.
      - ,,,을 입력했을 때 => 입력한 ,,,가 모두 사라진다.
   9. 에러메세지 출력
      1. 태그가 3개 미만일 때 메세지가 출력된다. (빨강색)
      2. 조건에 부합시 메세지 없음

10. 약관에 동의합니다 <a> tag

11. 약관 popup
    1. 어떻게 구현할 것인가? (alert / innerHTML X)

12. 약관 scroll
    1. scroll 감지
    2. 동의 버튼 비활성화 -> 활성화
    3. 체크박스 비체크 -> 체크

13. 초기화 button
    1. 확인창 popup (alert X)

14. 가입하기 button
    1. form input이 조건을 만족하는지 함수 호출
    2. 확인창 popup
       1. 불만족 조건에 대해 각각 다른 에러 메세지가 포함되어야 함
    3. 자동로그인이 된 상태로 메인화면으로 이동

15. 로그인 UI
    1. bootstrap
    2. ID validation
    3. Password validation

## 제약사항
***HTML***
1. W3C Validator HTML을 통과하도록 한다.
2. 의미에 맞는 적절한 태그를 선택하도록 한다.
3. padding 과 margin을 일관된 크기로 사용한다.
4. 의미적으로 같은 엘리먼트들은 같은 넓이와 크기를 갖도록 한다

***JavaScript***
1. 전역변수를 최소화 한다.
2. 함수는 동사+명사
3. 변수는 명사
4. 기능단위로 객체를 만들고, 객체는 literal방식

## 궁금증
- 아이디 중복체크를 제외한 모든 입력값의 유효성체크는 JavaScript를 통해 체크한다
  - form input의 내용이 바뀔 때마다, 이를 감지하여, 유효성 문구를 바꿔야 한다.
  - 어떻게 실시간으로 체크함?? input이 변경될 때마다 이벤트를 보낼 수 있나?
  - on(‘change’)와 같은 이벤트 핸들러 생성 가능

- 이미 사용중인 아이디입니다. 유효성 체크?
  - ‘실시간 체크’ vs ‘focus out 시 체크’
  - 네이버는 ‘focus out’

- 비밀번호 유효성체크
  - 각 조건에 따른 에러메세지가 다르다

- 비밀번호 암호화에 대한 문제
  - 어차피 post 방식으로 보낼 건데, 서버에 일단 보내고, 저장할 때 암호화하면 안되나?
  - 어떻게 프론트단에서 암호화할건데?

- 입력창에 focus가 되면 입력창 테두리 색이 기존과 다른 색으로 변경
  - textbox hover/focus를 어떻게 구현할 수 있을까?
  - :hover / :foucs 등의 가상 선택자를 사용할 수 있다.

- 관심사에 대한 구현이 어려울 것 같다.
  - 자바스크립트 + 리스트를 활용?

- 약관창 -> 모달? 맨아래 추가?
  - 모달처럼 배경화면을 어둡게하고, 약관창을 보이게하는 방식으로 구현하면 좋을 듯
  - z-index 사용해서

- 스크롤을 끝까지 했을 때 활성화되는 버튼에 대해 구글링 필요.
  - ‘스크롤 감지’

- (이후 백엔드) 가입하기 버튼을 클릭했을 때, 모든 항목이 입력된 상태라면 모든 내용이 비동기로 서버로 보내지고 결과를 받은 후 자동로그인이 된다.
자동로그인이 된 상태로 메인화면으로 이동된다.
  - 모의 객체(회원가입할 수 있는 정보)를 만들어서 테스트해봐야 한다.

- submit button에 대한 디바운싱
  - ‘버튼 클릭 시 비활성화 이벤트 핸들러?’

- 팝업레이어를 띄운다?
  - alert창 아님!!
  - UX가 더 좋은 방향으로!

- addEventListner VS. onclick
  - 후자는 촌스러운 방법. 여러 개의 이벤트를 등록할 수 없다. (element의 property를 지정하는 방법)
  - addEventListner / removeEventListner를 사용하라!

- 여러 개의 이벤트를 등록할 수 있다.
  - addEventListner의 콜백 함수 안에 여러 개의 함수 호출
  - 또는 addEventListner 여러번 호출하여 등록
  - 이벤트의 실행 순서는 알 수 없다 (섞일 수 있다)
  - 클릭하면 등록된 여러 이벤트가 한꺼번에 실행된다

- 폰트 사이즈를 무엇을 쓰면 좋을지? (em, px, %, rem ??)
  - body 엘리먼트의 font-size를 0.625em(브라우저 기본 16px의 62.5% = 10px)로 정하고, em으로 폰트 크기를 설정하자.
  - 기준이 10이므로 계산하기 쉽다.
  - [공식문서](https://developer.mozilla.org/ko/docs/Web/CSS/font-size)
  - rem으로 사용하면, 부모 엘리먼트에 구애받지 않고 최상위 엘리먼트만 신경쓰면 된다.
    ```
    body {
    font-size: 62.5%; /* font-size 1em = 10px 브라우저의 기본 설정 */
    }
    span {
    font-size: 1.6em; /* 1.6em = 16px */
    }
    ```

0. CSS 클래스 네이밍 / CSS variable 학습
0. font 설정
0. spa 방식 학습
1. Form Layout
2. Input Focus
3. ID Validation `by JS` `by RegExp`
4. Password Validation `by JS` `by RegExp`
5. Password Reconfirm Validation `by JS`
6. Birth Date Validation `by JS` `by RegExp`
7. Email Validation `by JS` `by RegExp`
8. Phone Validation `by JS` `by RegExp`
9. 관심사 `by JS`
10. 약관에 동의합니다 <a> tag
11. 약관 popup
12. 약관 scroll
13. 초기화 button
14. 가입하기 button
15. 로그인 UI

## 주간 계획
***Day1*** (0, 1)
- CSS layout / DOM&Event / Object literal / flexbox 학습
- CSS 클래스 네이밍 / CSS variable 학습
  - BEM naming
  - CSS variable 사용법: 
  ```
    element {
        --변수명
    }
  ```
- form layout (flexbox)로 화면만 구현하기 (유효성체크X)
- 폰트 사이즈 결정 (em, px, %, rem ??)

***Day2***
- layout 마무리
- 아이디 / 이름 / 비밀번호 / 이름 / 이메일 / 휴대전화 유효성체크 마무리
- 생년월일 알고리즘 구글링 (연도에 따른 월일 차이, 윤년)

***Day3***
- 관심사
- 약관 창 띄우기
- 약관 스크롤 학습하기

***Day4***
- 임시 메인페이지
- 모의 객체를 만들어서 비동기로 서버에 보내는 연습
- 로그인UI bootstrap

***Day5***
- 미흡한 부분 마무리하기