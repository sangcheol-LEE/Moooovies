import React from 'react';
import styled from 'styled-components';
import {IMAGE_BASE_URL} from "../../Config"


const MainImage = ({mainMovie}) => {

  const {backdrop_path,title,overview} = mainMovie

  return (
    backdrop_path && (
      <>
        <ImageContinaer>
          <Image src={`${IMAGE_BASE_URL}w1280${backdrop_path}`}/>
          <TextContainer>
            <h2>{title}</h2>
            <p>{overview}</p>
        </TextContainer>
        </ImageContinaer>
      </>
    )
  );
};

export default MainImage;

const ImageContinaer = styled("div")`
  position:relative;
  width:100%;
  margin: 0;
  margin-top: 10px;


`;
const Image = styled("img")`
  width:100%;
`;


const TextContainer = styled("div")`
  max-width: 500px;
  position: absolute;
  color : #fff;
  bottom: 2rem;
  left:2rem;
  p{
    font-size: 1rem;
  }
`;