# css-sorting README

확장자 .css 파일의 필요없는 공백을 삭제하고 원하는 순서대로 정렬하는 확장프로그램입니다.
css 파일을 연 후 실행해주세요.

## Known Issues

속성 value 마지막에 세미콜론(;) 없으면 잘 안됩니다. 주의해주세요.
(; 관련 1차 수정 완료 추후 에러시 피드백 해주세요.)

## Release Notes
속성의 순서를 디폴트로 넣어둔 순서대로 배치되게끔 하였습니다.
추후 순서를 custom 할 수 있는 기능이 필요하시다면 말씀해주세요.

/* 로 시작하는 주석이 시작할때 공백을 넣습니다.

### 0.0.5

파일의 확장자가 css일때만 실행하도록 수정했습니다.

속성별 순서대로 나열합니다.

### 0.0.6

누락된 index; background-position-x, background-position-y 추가
기본 정렬에 없는 속성들 관련 수정
url(data:) 등과같은 value에 ;이 있을때 속성id 로 끊어지던 것 수정(추후에 비슷한 에러나 나오면 알려주세용)
sorting이 끝나면 좌측 하단에 DONE! 이라는 메세지가 나오게 했습니다.
디버그는 layout test 에 쓰였던 소스중 /common/css/program.css 로 진행했습니다.

## 사용법

명령어는 'CSS-sorting' 입니다.
편하신대로 쓰세요. 단축키 등록해서 쓰셔도 되구, 아니면 f1눌러서 명령어 찾아서 쓰시면 됩니다.

### 감사합니다.