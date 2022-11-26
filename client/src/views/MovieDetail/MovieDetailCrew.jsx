import React from 'react';
import { IMAGE_BASE_URL } from '../../Config';

const MovieDetailCrew = ({movieCrew}) => {
  console.log(movieCrew)
  const {profile_path, original_name,character,name  } = movieCrew;
  return (
    <>
      <div style={{margin: "10px auto", position: "relative"}}>
        <img style={{objectFit: "cover"}}src={`${IMAGE_BASE_URL}w300${profile_path}`} alt={original_name}/>
        <div style={{position:"absolute", left:"10px", bottom: "10px"}}>
            <span style={{color: "#fff", fontWeight:"bold"}}>{`${name} - ${character}역 `}</span>
        </div>
      </div>
    </>
  );
};

export default MovieDetailCrew;