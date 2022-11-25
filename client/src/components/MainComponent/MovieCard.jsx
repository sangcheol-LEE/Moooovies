import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL } from '../../Config';

const ImageContainer = styled("div")`
  margin: 10px auto;
`;
const Image = styled("img")`
  object-fit: cover;
`;

const MovieCard = ({poster, id}) => {
  return (
    <ImageContainer onClick={() => console.log(id)}>
      <Image src={`${IMAGE_BASE_URL}w300${poster.poster_path}`}/>
    </ImageContainer>
  )
}

export default MovieCard

