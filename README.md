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

  - ```react
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

`<Food name="kimchi" />`
food component에 kimchi라는 value로 prop(property) name(kimchi)을 줌
그 다음 food function component의 argument로 그것들을 넣음



## props학습



## 웹사이트에 동적 데이터를 추가하는 방법

임의로 foodILike라는 배열을 생성하고 안에 name, image를 추가한다.

App()에서 해당 배열을 return 하는데, javascript의 map함수를 사용한다.

```react
function App() {
  return (
  <div>
    {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
  </div>
  );
}
```

Food()에서 props들을 적절히 받고 return한다.

```react
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

```react
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

```react
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

```react
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

```react
class App extends React.Component{
    state = {
        count: 0
    }
}
```



2) App class 내 render에는 class라 {state}가 아닌 {this.state.count}라고 적어야 함

```react
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

```react
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



state를 set해라, 직접 state를 변경하지 말라고 한다.

이유는 react는 render function을 refresh하지 않기 때문이다.



우리는 매번 state 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다.

react는 우리가 setState function을 호출하면, react는 매우 똑똑해서 우리가 언제 setState를 호출할 지를 알고 또한 내가 view를 refresh하길 원하는 걸알고 render function을 refresh하길 원하는 걸 안다.



아래와 같이 코드를 바꿔보자

```react
class App extends React.Component{
  state = {
    count: 0
  }
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState({ count: this.state.count + 1});
  };
  render(){
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>  
      <button onClick={this.minus}>Minus</button>  
    </div>
    )
  };
}
```

setState는 새로운 State를 취해야한다. 그전에 state는 object이기 때문에 setState는 새로운 state를 받아야하고, 따라서 setstate({count:1})과 같이 작성한다.

**setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출할 것이다.**



결과를 확인해보면 react는 virtual DOM을 가지고 있기 때문에 변한 부분만 수정되어 깜빡이지 않는다.



위 `this.state.count` 방식은 state에 의존하게 되어서 react는 현재 state를 함수 방식으로 가져오는 것을 허락해줬다.

```react
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };
```

이 방식이 state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다.





## Component Life Cycle

react component에서 사용하는 유일한 function은 render function이다.

react class component는 단순히 render말고 더 많은 것을 가지고 있다.

이들은 life cycle method를 가지는데, life cycle method는 기본적으로 react가 component를 생성 및 삭제하는 방법이다.



정말 많지만 그 중 몇개만 확인 해볼 것이다.

(Document link : https://reactjs.org/docs/react-component.html#componentdidmount)



### 1) mounting

생성되는 것을 의미한다.



- **constructor()**                                            // 먼저 호출되는 function

  ​																	// constructor는 react에서 온게 아니고 Javascript왔다.

  ​																    // class를 만들 때 호출되는 것이다.

- static getDerivedStateFromProps()  	// 강좌에서 다루지 않음

- **render()**
- **componentDidMount()**



```react
class App extends React.Component{
  constructor(props){
    super(props)
    console.log("Hello");
  }
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };
  componentDidMount(){
    console.log("component render");    
  }
  render(){
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>  
      <button onClick={this.minus}>Minus</button>  
    </div>
    )
  };
}
```

위 코드를 실행시키면 console에 render 전 'Hello'가 먼저 출력됨을 확인할 수 있다.



> **작동방식 요약**
>
> component가 mount될 때, component가 screen에 표시될 때, component가 나의 Website에 갈 때, constructor를 호출한다. 그 후 render한다. 이후 component가 render할 때 componentDidMount()가 기본적으로 나에게 "이 component는 처음 render 되었어"를 알려준다.





### 2) Updating

업데이트를 의미한다. 

업데이트의 원인은 나다. 위 코드에서 Add, Minus를 클릭해서 state를 변경할 때 그게 업데이트 이다.



- static getDerivedStateFromProps()  	 // 강좌에서 다루지 않음

- shouldComponentUpdate()                   // 강좌에서 다루지 않음, 업데이트할지 말지 결정하는 것임

  ​																	// setState를 호출할때마다 발생함

- **render()**

- getSnapshotBeforeUpdate()                  // 강좌에서 다루지 않음

- **componentDidUpdate()**



```react
class App extends React.Component{
  constructor(props){
    super(props)
    console.log("Hello");
  }
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };
  componentDidMount(){
    console.log("component render");    
  }
  componentDidUpdate(){
    console.log("I just update");
  }
  render(){
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>  
      <button onClick={this.minus}>Minus</button>  
    </div>
    )
  };
}
```

위 코드 작성 후 실행 시 Add, Minus 버튼을 클릭하면 console에 "I just update"가 출력됨



> **작동방식 요약**
>
> setState를 호출하면, component를 호출하고 먼저 render가 호출한 다음 업데이트가 완료되었다고 말하면 componentDidUpdate가 실행된다.





### 3) Unmounting

component가 죽는 것을 의미한다. (페이지를 바꿀 때 등)

- **componentWillUnmount()** 					// component가 떠날 때 호출된다.



```react
class App extends React.Component{
  constructor(props){
    super(props)
    console.log("Hello");
  }
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
  };
  componentDidMount(){
    console.log("component render");    
  }
  componentDidUpdate(){
    console.log("I just update");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }
  render(){
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>  
      <button onClick={this.minus}>Minus</button>  
    </div>
    )
  };
}
```



> **작동방식 요약**
>
> 현 코드에서 작동을 확인할 수 없지만 component가 떠날 때 호출된다.





## movie component 구성해보기



- state에 isLoading: true

- render하기

- 처음에 render를 하면 호출되는 life cycle method인 **componentDidMount**에 변화를 넣어보자. (이 함수는  component가 mount되자마자 호출된다.)

```react
class App extends React.Component{
  state = {
    isLoading: true
  };
  componentWillMount(){
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 6000)
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}
```

위 코드를 확인해보면 6초 뒤에 "We are ready"로 text가 바뀜을 확인할 수 있다.



> 미래에 쓰고자 하는 state를 선언하는 것은 필수가 아니다.
>
> state에 작성하는 것은 단지 미래를 위한 계획일 뿐이다.



이제 확인해봤으니 movie component 구성을 위해 해야할 일

- componentDidMount에서 data를 fetch 하는 것

- API로 부터 data fetching이 완료되면 movie를 Render하고 map을 만들고 movie를 render하기



## react에서 data를 fetching하기

Axios는 fetch위에 있는 작은 layer이다.



### axios를 사용하기 위해 axios를 설치한 후 import

`npm install axios`

```react
import axios from 'axios';
```



### API 가져오기

우리가 사용할 API는 YTS에서 만든 API를 사용할 것이다.

https://yts.lt/api 접속 > `list Movies` 클릭>  https://yts.lt/api/v2/list_movies.json 복사



근데 이 사이트는 불법사이트라 매번 url이 변경되기 때문에 니콜라스가 YTS proxy API를 만들었다.

https://yts-proxy.now.sh/list_movies.json를 사용하면된다.



### axios로 위 API 사용하기

```react
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json")
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}
```



componentDidMount 함수가 끝날 때까지 약간 시간이 걸릴 수 있다.

우리는 함수가 끝난 뒤 작업을 처리해야하기 때문에 javascript에게 기다리라고 말해야 한다.

따라서 async-await을 활용해 비동기 처리를 진행한다.



### async-await을 활용해 비동기 처리

```react
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  };
  async componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}
```



### movies.data 가져오기

console로 movie를 보면 우리가 가져올 데이터의 경로는 moives.data.data.movies임을 확인할 수 있다.

```react
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(movies);
  };
  async componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }
}s
```





### 가져온 movie.data를 state안에 넣기

```react
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false});
  };
```

여기 `this.setState({movies:movie});`코드에 하나는 setState의 movies고, 하나는 axios에서 온 movies다.

위 코드를 실행하게 되면 movies 데이터를 모두 가져왔을 때, "We are ready"가 출력된다.



### Movie.js 파일 생성

movie component는 state를 필요로하지 않기 때문에 class component가 될 필요는 없다.

따라서 function component로 작성하겠다.



API에서 가져올 정보에 대해 아래와 같이 작성한다.

```react
# Movie.js

import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
```



정렬을 하기위해 API에서 제공하는 sort_by 속성을 이용해 App.js에 해당 부분을 아래와 같이 수정하였다.

```react
const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
```



App.js에서 Movie를 render를 해줘야한다.

```react
// App.js

import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
      return (
        <div>
          {isLoading
            ? "Loading..."
            : movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
        </div>
    );
  };
}

export default App;
```

여기까지 하면 title 목록이 정상적으로 출력된다.



이제 HTML을 변경해 가져온 movie data를 모두 출력해보자.

```react
# App.js

import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
      return (
        <section className="container">
          {isLoading
            ? <div className="loader">
                <span className="loader__text">Loading...</span>
              </div>
            : (
              <div className="movies">
                {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
                ))}
              </div>
            )}
        </section>
    );
  };
}

export default App;
```



```react
# Movie.js

import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ year, title, summary, poster, genres}) {
  return <div className="movie">
    <img src={poster} alt={title} title={title} />
    <div className="movie__data">
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <ul className="genres">
        {genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}
      </ul>
      <p className="movie__summary">{summary}</p>
    </div>
  </div>
  
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
```





## HTML/CSS 작업

간단하게 html/css 추가작업 및 summary slice 작업을 수행한다.

코드 참고: https://github.com/JEONGSUJI/ReactJS/commit/e811b96cffd10b28c6b385d3fd9851859928d327





## gh-pages

github는 무료 웹사이트를 제공하는데, static 웹사이트, HTML, CSS, Javascript 웹사이트가 무료로 제공된다.



#### github에 업로드하는 것을 허가해주는 모듈 `npm i gh-pages` 설치하기

gh-pages는 나의 웹사이트를 github의 github page 도메인에 나타나게 해줄 것이다.



package.json에 설정을 해주어야한다.

- 우선 "homepage" 설정을 해줘야 한다. 단, 모두 소문자여야한다.

- "scripts"에  "deploy": "gh-pages -d build"와 *"predeploy"*: "npm run build"를 추가해준다.

```javascript
# package.json


  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },


  "homepage": "https://{your github username}.github.io/{the name of your project is github}"
```



`유저명.github.io/프로젝트명` 



### `npm run build`

build 폴더가 생성되고, 우리가 작성한 코드가 최소화되어 build 폴더에 들어가 있음을 확인할 수 있다.



### `npm run deploy`

predeploy가 먼저 실행된 후 deploy가 실행된다.

완료창이 나오면 브라우저에서 위에 작성한 `https://{your github username}.github.io/{the name of your project is github}`주소로 들어간다.

우리가 작업한 화면이 출력됨을 확인할 수 있다~! :) 





## 폴더 구조 변경하기

```react
movie_app
	ㄴ build
	ㄴ node_modules
	ㄴ public
	ㄴ src
		ㄴ components		// 폴더 추가 및 아래 파일 해당 폴더로 이동
			ㄴ Movie.css
			ㄴ Movie.js
			ㄴ Home.css		// App.css -> Home.css 이름 변경

        ㄴ routes			// 폴더 추가 및 아래 파일 해당 폴더에 생성
        	ㄴ About.js		// 특정 영화 클릭 시 해당 영화의 설명 페이지
        	ㄴ Home.js		// 영화 목록 페이지
```



router 설정 전 코드를 아래와 같이 수정

https://github.com/rarlala/react_movie_app/commit/268455659bfd8692be11b6386f34b438d5265be6





## react-router-dom으로 nav만들기

react-router dom은 네비게이션을 만들어주는 패키지이다.

- `npm install react-router-dom` 설치하기



**Router**는 url을 가져다가, 확인하고, 우리가 Router에게 뭘 명령했는지에 따라 라우터가 컴포넌트를 불러오게 된다.



**react-router-dom**은 다른 종류의 라우터들이 있다. 그 중에 우리는 HashRouter를 사용할 것이기 때문에 import해준다. HashRouter 안 속에 Route를 넣어줄 것이다. Route에는 매우 중요한 props가 한 개 들어가는데, 그 props는 렌더링할 스크린이 들어가고, 다른 prop은 뭘 할지 정해주는 것이다.



```react
// App.js

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About"

function App(){
  return <HashRouter>
    <Router path="/about" component={About}/>
  </HashRouter>;
}

export default App;
```



현재 About.js는 비어있으므로 빠르게 component를 만들어보자.

```react
// About.js

import React from "react";

function About(){
  return <span>About this page: I built it</span>
}

export default About;
```

위와 같이 코드 작성 후 화면을 돌아가보면 



다시 App.js로 돌아와서 추가적으로 Route 설정을 해주자

```react
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App(){
  return (
    <HashRouter>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </HashRouter>
  );
}

export default App;

```

이 코드를 작성 후 /에 접근 시 home이 잘 표시되지만, /about 접근 시 about이 home에 겹쳐서 표시된다.

이게 리액트 라우터가 작동하는 방식이기 때문이다.



보기 쉬운 형태로 코드를 바꿔 이유를 알아보자

```react
function App(){
  return (
    <HashRouter>
      <Route path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}
```

만약 Router path가 '/'가 아니라 '/home'처럼 다른 url이라면 겹치지 않고 표시된다.

React Router는 기본적으로 url을 가져온다. 그다음 라우터를 비교한다. 그리고 매치가 된다면 컴포넌트를 보여준다. 그리고 매치가 되는 것도 있는지 계속 찾는다.

그러다보니 '/'를 찾을때 '/about'도 '/'가 매치되기 때문에 겹쳐서 보이는 것이다.



이 현상을 해결하기 위한 방법은 exact true를 첫번째 route에 추가해주는 것이다.

```react
<Route path="/" exact={true} component={Home}/>
```

그러면 url이 '/'일때만, home을 렌더링해준다.



이제 nav를 만들어보자

```react
// App.js

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import About from "./routes/About";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
    </HashRouter>
  );
}

export default App;

```



```react
// components/Navigation.js 생성

import React from "react";

function Navigation(){
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  )
}

export default Navigation;
```

위와 같이 코드를 작성하면, nav를 클릭했을때 새로고침되는 문제가 발생한다. html이기 때문이다.



위 문제를 해결하기 위해 우리는 **Link**를 불러와 사용할 것이다.

```react
// components/Navigation.js

import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation;
```

위와 같이 코드를 변경해주면 Home에서 Home을 클릭하면 새로고침이 이루어지지 않고 잘 동작하는 것을 확인할 수 있다.



**Router 밖에서 Link를 사용할 수 없다는 것을 기억하자**



---

**수업을 마치며 추가 안내사항**

- **react hook**의 등장으로 더 이상 state를 갖기 위해 class component를 가질 필요가 없다.