# Movie APP

설치가 필요한 항목들
- node.js / npm / npx / git

create-react-app을 사용하여 react 환경세팅
- npx create-react-app movie_app

---

react란 내가 쓰는 모든 요소를 생성한다는 것이다.
react는 app.js component를 ElementById 내부에 넣으려고 한다.

react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 방법을 알고 있다. component에 작성해두었던 것들을 react가 HTML에 추가한다.

react는 virtual DOM(virtual document object model)이라는 것이 있다. 즉 소스코드에는 존재하지 않지만 react가 만들어낸다.
이것이 react가 빠른 이유이다.

react가 멋진 이유는 재사용 가능한 component를 만들 수 있다는 점이다.(component를 계속해서 반복해서 사용할 수 있다는 것)

---

## component

index.js에서 `ReactDOM.render(<App />, document.getElementById('apple'));` 에서 `<App />`를 **component**라고 부른다.

component는 HTML을 반환하는 함수이다.
react는 component와 함께 동작한다. 모든 것은 component이다.

component는 만들고 싶은 만큼 만들 수 있고, 많은 component를 return할 수 있다.

component 만드는 방법
- src에 새로운 file 만들기 // Potato.js
- ''' // react에게 jsx가 있는 component 사용을 알리기
import React from "react";

function Potato(){
    return (
        <h3>I love potato</h3>
    )
}

export default Potato; '''

- app.js 에 component import하고 추가하기



react application이 한번에 하나의 component만을 rendering 할 수 있다. 따라서 모든 것은 application안에 들어가야한다.

---

jsx
- jsx는 javascript안의 HTMLd을 말하며, react에서 나온 매우 custom한 유일한 개념이다.
- jsx에서 두번째로 이해해야하는 것은 component에 정보를 보낼 수 있다는 점이다.


component에서 component로, children component로 정보를 보내는 방법 학습하기
component는 대문자로 시작해야한다. 우리는 component로 정보를 보낼 수 있다.
jsx는 html처럼 사용한다.

<Food name="kimchi" />
food component에 kimchi라는 value로 prop(property) name(kimchi)을 줌
그 다음 food function component의 argument로 그것들을 넣음

props학습