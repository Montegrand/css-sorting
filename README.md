# css-sorting README

확장자 .css 파일의 필요없는 공백을 삭제하고 원하는 순서대로 정렬하는 확장프로그램입니다.
css 파일을 연 후 실행해주세요.

## Known Issues

선언되지 않은 속성은 맨 뒤로 갑니다. -moz- 등등
주의해주세요.

중괄호 {} 안의 속성값들을 개행 없이 작성했을때 작동됩니다.

## Release Notes
속성의 순서를 디폴트로 넣어둔 순서대로 배치되게끔 하였습니다.
추후 순서를 custom 할 수 있는 기능이 필요하시다면 말씀해주세요.
-re customOrder 기능이 추가되었습니다. 아래 0.0.7 참고해주세요

/* 로 시작하는 주석이 시작할때 공백을 넣습니다.
-re 작동이 안되고 있던 문제를 해결했습니다.

### 0.0.5

파일의 확장자가 css일때만 실행하도록 수정했습니다.

속성별 순서대로 나열합니다.

### 0.0.6

누락된 index; background-position-x, background-position-y 추가

기본 정렬에 없는 속성들 관련 수정

url(data:) 등과같은 value에 ;이 있을때 속성id 로 끊어지던 것 수정(추후에 비슷한 에러나 나오면 알려주세용)

sorting이 끝나면 좌측 하단에 DONE! 이라는 메세지가 나오게 했습니다.

{}중괄호 안에 주석이 있는 경우 중괄호 밖으로 나오게끔 했습니다.

디버그는 layout test 에 쓰였던 소스중 /common/css/program.css 로 진행했습니다.

### 0.0.7

누락된 border-top-width 와 같은 속성값을 디폴트 오더에 추가했습니다.
디폴트 속성에 없는 속성은 마지막으로 밀려서 배치됩니다. 주의해주세요.
디폴트 속성 순서입니다. 추가로 필요하다 생각되시면 customOrder를 setting.json 의 최상단 옵션에 추가해주시면 됩니다. 추가하셔서 사용하시면 됩니다.

예)
"cssSorting.customOrder": ["display", "visibility", "overflow", "overflow-x", "overflow-y", "float", "clear", "position", "top", "right", "bottom", "left", "z-index", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "justify-content", "align-content", "align-items", "align-self", "order", "width", "min-width", "max-width", "height", "min-height", "max-height", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "border", "border-color", "border-width", "border-style", "border-radius", "border-top", "border-top-style", "border-top-color", "border-top-width", "border-top-radius", "border-right", "border-right-style", "border-right-color", "border-right-width", "border-right-radius", "border-bottom", "border-bottom-style", "border-bottom-color", "border-bottom-width", "border-bottom-radius", "border-left", "border-left-style", "border-left-color", "border-left-width", "border-left-radius", "border-image", "border-image-source", "border-image-slice", "border-image-width", "border-image-outset", "border-image-repeat", "box-sizing", "background", "background-color", "background-image", "background-repeat", "background-position", "background-position-x", "background-position-y", "background-attachment", "background-size", "background-origin", "background-clip", "font", "color", "font-family", "font-size", "font-weight", "font-style", "font-variant", "line-height", "letter-spacing", "word-spacing", "text-decoration", "text-transform", "text-shadow", "text-align", "vertical-align", "text-indent", "word-wrap", "word-break", "white-space", "text-overflow", "transition", "transform", "animation"]

예시에 있는 순서는 디폴트로 설정되어있는 css 속성순서입니다. 속성 누락되어서 순서를 바꿀때 참고해주세요~
어디에 넣어야 할지 헷갈린다면 메신저주세요~

들여쓰기가 모두 지워집니다. 헷갈릴 수 있으니 작업을 모두 마친 뒤에 사용해주세요~

## 사용법

명령어는 'CSS-SORTING' 입니다.
편하신대로 쓰세요. 단축키 등록해서 쓰셔도 되구, 아니면 f1눌러서 명령어 찾아서 쓰시면 됩니다.

### 감사합니다.