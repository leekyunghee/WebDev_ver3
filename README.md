## RequireJS + Backbone.js ##
* 4월4주 
  * -reuireJS 적용
  * 스크립트 파일 로드 테스트(환경설정:main.js) 
  * mvc example로 테스트 

* 5월1주 
  * -연휴 

* 5월2주
  * -backbone.js + requireJS 로 적용 및 테스트 
  * 스크립트 파일 로드 테스트(환경설정:main.js)
  * 모듈 정의 (define 함수 사용) 
  * 모델, 뷰, 라우터를 생성 
  * css plugin 적용 실패(x) => 추후에 적용 여부 결정
  * text plugin 적용(템플릿 사용을 위해 써야함)
  * 모델, 뷰, 라우터로 간단한 리스트 출력(뒷단 통신 연결X)  
  * 템플릿을 파일로 분리 

* 5월3주
  * - requireJS API를 참고하여 모듈 정의 방식을 변경  (현재 적용한 AMD 포맷 형식이 의존성 불일치의 위험이 있으므로 sugar를 사용하길 권장 함)  http://requirejs.org/docs/whyamd.html#sugar 
  * - html 마크업 작성 (nested template) - 변경되는 영역은 content

* 5월4주
  * html 화면 분리 (inner template)
  * views/employeeList.js 페이지 추가
  * models/requireJS를 이용해 모듈 정의를 하여 router에 추가 변경
  * 기존 모델을 뷰에서 생성하던 방식을 모델로 분리하여 변경   
  * 버튼 이벤트 추가 
  * 이벤트 액션 추가 6월 1-2주 이어서(X)(연기)

* 6월1주 (0602/0603)
  * views/employeeList.js 페이지 추가
  * Backbone.view 추가(o)
  * 이벤트 핸들링 반영 하기(x)(연기)
  * 검색 조건 view 추가(o)
  * 로그인 화면 추가(o) body로 넣기 수정(o)
  * 부트스트랩 컨트롤 정리-> 파피루스 -> 아키텍쳐 설계(o) 

* 6월2주
  * 샘플 예제 작성 -> 아키텍쳐 설계
  * 검색조건 뷰 추가(o)
  * 로그인화면 추가(o)
  * 부트스트랩 css+js plugin 이벤트 추가
  * 아키텍쳐설계서 파피루스에 정리(팝업사용법 ,콘솔로그확인법, 알림창)
  * 정보검색  jCal캘린더, 유효성플러그인

* 6월3주
  * 캘린더사용법, 유효성검사 사용법 파피루스에 정리
  * 로그인 페이지 전환 완료(o)

* 7월 2주 
  * i18n적용
  * validation 테스트(x)
  * insert 완료(requireJS 포함)
  * 예제 소스 분석 employeeList, detail, add 페이지 분석 및 수정

* 7월 3주
  * 하계 휴가

* 7월 4주
  * 라우터 분리 -> 정규식 표현 쓰는 방법으로 변경
  * 예제 소스 employeeList, detail, add 페이지 분석 및 수정

* 7월 4주 - 8월 1주
  * employeeList 화면 CRUD 완성
  * 이벤트 기반으로 변경
  * 이벤트 바인딩 파피루스(아키텍쳐설계서)에 정리(


## 디렉토리 구조 ##
webapp/
    test.html
    js/
        main.js
        require.js
        text.js 
        modules/
            models/
                model.js      
            views/
                view.js
            router.js   
        libs/
            backbone/
                backbone.js
            bootstrap/
                css/
                fonts/
                js/
            jquery/
                jquery.js
            underscore/
                underscore.js 
        templates/
            main.html


## 파일 로드 ##   
* index.html 
  * 기존의 스크립트 태그를 사용하지 않고 스크립트 자체로 로딩을 하기 위해 최초 파일에 정의 
  * 1. 로드를  할 파일을 data-main속성을 써서 js/main으로 경로 지정  (baseUrl은 js가 된다.) 
  * 2. 같은 곳에 requireJS 라이브러리를 import 해준다. 
  * 3. view가 보여질 div를 지정한다. 
  * 4. 실제 데이터를 넣을 부분은 템플릿으로 분리
  * 5. 외부 css파일을 로드 할 경우 링크를 걸어준다. (css도 requireJS로 로드해야 할지 테스트 해야할 것)

* main.js 
  * 1. 설정파일(path, shim, map 등)을 지정 한다.
  * 2. 라우터를 생성한다. 

* router.js
  * view를 생성

* model.js
  * 모델 생성 

* view.js
  * model을 출력 하기 위하여 탬플릿으로 담는다. 

* main.html
  * underscore의 template 태그를 사용하여 모델을 출력

* shim:  define()으로 정의되지 않는 기존의 스크립트 스타일의 스크립트들에 대한 의존성 주입 설정

* map :  기존 버전에 의존하는 모듈과 개선된 모듈이 의존하는 모듈의 버전이 달라질 수 있다. 하지만 아직 이 두 모듈이 프로젝트 내에서 공존해야 할 경우에 사용

* 개발자 도구의 > 네트워크로 로드 되는 순서를 확인할 수 있다.
















  






