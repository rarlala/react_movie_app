# Movie APP



**진행 전 설치가 필요한 항목들**

- node.js / npm / npx / git

create-react-app을 사용하여 react 환경세팅
- `npx create-react-app movie_app`



## React란?

- react란 내가 쓰는 모든 요소를 생성한다는 것이다.
- react는 app.js component를 ElementById 내부에 넣으려고 한다.
- react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 방법을 알고 있다. component에 작성해두었던 것들을 react가 HTML에 추가한다.
- react는 virtual DOM(virtual document object model)이라는 것이 있다. 즉 소스코드에는 존재하지 않지만 react가 만들어낸다. 이것이 react가 빠른 이유이다.
- react가 멋진 이유는 재사용 가능한 component를 만들 수 있다는 점이다. (component를 계속해서 반복해서 사용할 수 있다는 것)



## component

index.js에서 `ReactDOM.render(<App />, document.getElementById('apple'));` 에서 `<App />`를 **component**라고 부른다.

- component는 HTML을 반환하는 함수이다.
  (react는 component와 함께 동작한다. 모든 것은 component이다.)

- component는 만들고 싶은 만큼 만들 수 있고, 많은 component를 return할 수 있다.

- component 만드는 방법
  - src에 새로운 file 만들기 // Potato.js

  - ```javascript
    // react에게 jsx가 있는 component 사용을 알리기
    import React from "react";
    
    function Potato(){
        return (
            <h3>I love potato</h3>
        )
    }
    
    export default Potato;
    ```

- app.js 에 component import하고 추가하기



- react application이 한번에 하나의 component만을 rendering 할 수 있다. 따라서 모든 것은 application안에 들어가야한다.



## jsx

- jsx는 javascript안의 HTMLd을 말하며, react에서 나온 매우 custom한 유일한 개념이다.
- jsx에서 두번째로 이해해야하는 것은 component에 정보를 보낼 수 있다는 점이다.


component에서 component로, children component로 정보를 보내는 방법 학습하기
component는 대문자로 시작해야한다. 우리는 component로 정보를 보낼 수 있다.
jsx는 html처럼 사용한다.

<Food name="kimchi" />
food component에 kimchi라는 value로 prop(property) name(kimchi)을 줌
그 다음 food function component의 argument로 그것들을 넣음



## props학습



## 웹사이트에 동적 데이터를 추가하는 방법

임의로 foodILike라는 배열을 생성하고 안에 name, image를 추가한다.

App()에서 해당 배열을 return 하는데, javascript의 map함수를 사용한다.

```javascript
function App() {
  return (
  <div>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
  </div>
  );
}
```

Food()에서 props들을 적절히 받고 return한다.

```javascript
function Food({name, picture}){  
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}></img>
    </div>
  )
}
```



추가적으로 위에 App()에 작성했던 코드를 함수를 호출하는 방식으로 아래와 같이 변경할 수 있다.

```javascript
function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
```



## Protection with PropTypes



### props type

- 설치 : `npm i prop-types`

- 전달받은 props가 내가 원하는 props인지 확인해준다.

- 사용방법

```javascript
import PropTypes from "prop-types"

// 내가 얻고 싶은 props에 대한 설명을 적음
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
```

얻고자 하는 PropType을 위와같이 적게되면 얻고자 하는 정보와 다를 경우 console.log에 에러메세지가 나타나며, 반드시 이름은 propTypes으로 지어야한다.

이외에 설정할 수 있는 항목들은 document를 확인하자. (https://doc.ebichu.cc/react/docs/typechecking-with-proptypes.html)



## State

- state는 보통 우리가 동적 데이터와 함께 작업할 때 만들어진다. 변하는 데이터, 존재하지 않는 데이터를 의미한다.

- state는 object이다. component는 data를 넣을 공간이 있고 이 데이터는 변한다.



### Function component와 Class component

우선 지금까지 사용했던 Function component를 Class component로 바꿔보자.

Class component를 사용하는 이유는 Class component가 가진 state 때문이다.

```javascript
// Function component
function App() {
}

// Class component
class App extends React.Component{ 
}
```



**Function component**

- function이고 뭔가를 return한다. 그리고 screen에 표시된다.



**Class component**

- classd이고 react component로부터 확장되고, screen에 표시된다.

- return 을 가지고 있지 않다. render 메소드를 가지고 있다.
- react는 자동적으로 모든 class component의 render method를 실행한다.



### state를 사용하여 counter 구현하기

1) 바꿀 데이터를 state 안에 집어넣기

```javascript
class App extends React.Component{
    state = {
        count: 0
    }
}
```



2) App class 내 render에는 class라 {state}가 아닌 {this.state.count}라고 적어야 함

```javascript
class App extends React.Component{
    state = {
        count: 0
    }
	render(){
        return(
        	<h1>The number is: {this.state.count}</h1>
        )
    }
}
```



3) button 클릭 시에 count가 변하도록 Add, Minus button과 함수 추가하기

버튼이 클릭되면 보여지도록 하기 위해 react의 onClick props를 사용한다.

```javascript
class App extends React.Component{
    state = {
        count: 0
    }
	add = () => {
        console.log('add');
    }
    minus = () => {
        console.log('minus');
    }
	render(){
        return (
        	<div>
            	<h1>The number is {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}
```

