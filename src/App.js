//클래스형 컴포넌트를 사용하는 이유 = state를 사용하기 위해 

import React from 'react';
class App extends React.Component{       
                                         //실제로는 React.Component 클래스는 다음과 같이 500줄이 넘는 코드로 여러 기능이 구현 되어 있음.
                                         //따라서 상속 받지 않으면 React.Component의 코드를 하나하나 다 쳐 넣어야 함.
                                        
  constructor(props){
    super(props);
    console.log('hello');
  }
  state = {                              //state는 객체 형태의 데이터
    count: 0,
  };
  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  }
  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  }
  componentDidMount(){
    console.log('component rendered');
  }
  componentDidUpdate(){
    console.log('I just updated');
  }
  componentWillUnmount(){
    console.log('component rendered');
  }
  render(){                                //App 컴포넌트는 클래스(함수가 아님)라서 reuturn 문 사용 불가.
                                           //클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수를 사용.
    console.log("I'm rendering");
    return (                               //함수형 컴포넌트는 return 문으로 JSX 반환.
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
                                                       //클해스형 컴포넌트는 return() 함수로 JSX를 반환.
  }
}                                          
export default App;
