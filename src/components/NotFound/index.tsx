import Image from 'next/image';
import { useRouter } from 'next/router';

import { ContentNotFound, NotFoundContainer } from "./styles";

export function NotFound() {
  const { asPath } = useRouter();

  // Você deve ta pensando:
  // - puta que pariu Nikolas que lógica de filho da puta é essa???
  // Em minha defesa eu achei algo super inteligente e além do mais graças
  // a essa lógica porca eu não precisei fazer outro componente KKKKKKKKKKK
  // mas se vocês tiverem uma sugestão que gastaria menos linhas de código eu 
  // aceito ouvir. 
  
  return(
    <NotFoundContainer>
      <Image src="/404.svg" alt="página em construção" width={500} height={500} />

      <ContentNotFound>
        <h1>Ainda estamos trabalhando nessa página amigo 😔</h1>
        <h2>Que tal assistir outra coisa?</h2>

        <h3>Recomendo:</h3>
        <ul>
          <li>
            <a href={asPath === '/animes' ? "link de alguma serie" : "https://www.crunchyroll.com/pt-br/one-piece"}>
              {asPath === '/animes' ? "alguma serie" : "One Piece"}
            </a>
          </li>
          <li>
            <a href={asPath === '/animes' ? "link de alguma serie" : "https://www.crunchyroll.com/pt-br/attack-on-titan"}>
              {asPath === '/animes' ? "alguma serie" : "Shingeki no Kyojin"}
            </a>
          </li>
          <li>
            <a href={asPath === '/animes' ? "link de alguma serie" : "https://www.crunchyroll.com/pt-br/demon-slayer-kimetsu-no-yaiba"}>
              {asPath === '/animes' ? "alguma serie" : "Demon Slayer"}
            </a>
          </li>
          <li>
            <a href={asPath === '/animes' ? "link de alguma serie" : "https://www.crunchyroll.com/pt-br/jujutsu-kaisen"}>
              {asPath === '/animes' ? "alguma serie" : "Jujutsu Kaisen"}
            </a>
          </li>
          <li>
            <a href={asPath === '/animes' ? "link de alguma serie" : "https://www.netflix.com/watch/81145642?trackId=14277281&tctx=-97%2C-97%2C%2C%2C%2C%2C%2C"}>
             {asPath === '/animes' ? "alguma serie" : "Promised Neverland"}
            </a>
          </li>
        </ul>
      </ContentNotFound>
    </NotFoundContainer>
  );
}