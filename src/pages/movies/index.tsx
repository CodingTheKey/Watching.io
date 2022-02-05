import Head from "next/head";
import { BsPlayFill } from 'react-icons/bs';
import { MovieCard } from "../../components/MovieCard";

import { Container, AvailableMovies } from './styles';

export default function Movies() {
  return (
    <>
      <Head>
        <title>Filmes</title>
        <meta name="description" content="Encontre seus filmes favoritos aqui!" />
      </Head>
      <Container>
        <h1>Filmes</h1>

        <AvailableMovies>
          <MovieCard 
            name="Avengers - EndGame"
            image="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
            publishDate="April 25th, 2019"
          /> 

          <MovieCard 
            name="Avengers - EndGame"
            image="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
            publishDate="April 25th, 2019"
          />
          
          <MovieCard 
            name="Avengers - EndGame"
            image="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
            publishDate="April 25th, 2019"
          />

          <MovieCard 
            name="Avengers - EndGame"
            image="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
            publishDate="April 25th, 2019"
          />

          <MovieCard 
            name="Avengers - EndGame"
            image="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
            publishDate="April 25th, 2019"
          />
        </AvailableMovies>
      </Container>
    </>
  )
}