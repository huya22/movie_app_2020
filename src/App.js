import React from 'react';
class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount(){                       //첫번째 인자로 setTimeout(...)을 전달했고
    //영화 데이터 로딩!
    setTimeout(() => {              
      this.setState({isLoading:false});      //state를 바꾸려면 setState() 함수 사용!!
    }, 6000);                                //두번째 인자로 6000밀리초를 전달
  }

  render(){
    const {isLoading} = this.state;        
    return <div>{isLoading ? 'Loading...': 'We are ready'}</div>;    //삼항 연산자(true면 왼쪽 flase면 오른쪽 출력)
  }
}                        
export default App;
