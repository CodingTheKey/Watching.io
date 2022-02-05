import React from 'react';
import { BsPlayFill } from 'react-icons/bs';

import { Container } from './styles';

interface MovieCardProps {
  name: string;
  image: string;
  publishDate: string;
}

export function MovieCard({ image, name, publishDate }: MovieCardProps) {
  return (
    <Container>
      <img src={image} alt={name} />
      <div className="movieInfo">
        <p>{name}</p>
        <time>{publishDate}</time>
      </div>

      <button className="playButton">
        <BsPlayFill />
      </button>
    </Container>
  );
}