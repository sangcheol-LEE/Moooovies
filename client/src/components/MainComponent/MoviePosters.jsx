import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';


const PosterContainer = styled("div")`
  margin-top: 10px;
  display:grid;
  grid-template-columns: repeat(4,1fr);
`;

const MoviePosters = ({popularMovies}) => {
  return (
    <>
      <TitleBox>
        <h2 style={{color:"green"}}> 최근 개봉작 </h2>
      </TitleBox>

      <PosterContainer>
        {
          popularMovies && popularMovies.map((poster, idx) => {
            return (
              <MovieCard poster={poster} key={idx} id={idx}/>
            )
          })
        }
      </PosterContainer>
    </>
  );
};

export default MoviePosters;


const TitleBox = styled("div")`
h2{
  /* margin: 10px; */
  padding : 0 10px;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  padding-bottom : 5px;
}
`;