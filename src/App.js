import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';
class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async() => {   //자바 스크립트에게 getMovies() 함수는 시간이 필요하고
    const{
      data: {
        data: {movies},
      },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  };

  componentDidMount(){                       //첫번째 인자로 setTimeout(...)을 전달했고
    //영화 데이터 로딩!
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;        
    return (
      <section class = "container">
        { isLoading ? (
          <div class = "loader">
            <span class = "loader__text">Loading...</span>
          </div>
        ) : (
          <div class = "movies">
            {movies.map((movie) => (
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
    )}
  </section>
);    
  }
}                        
export default App;
