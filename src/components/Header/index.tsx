import Image from 'next/image';
import { BiSearch, BiBell } from 'react-icons/bi'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <Image src="/Watching.svg" alt="logo" width={192} height={40} />

        <nav>
          <ul>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Animes</li>
            <li>Minha lista</li>
          </ul>
        </nav>

        <div className="header-end">
          <BiSearch fontSize={29} />

          <BiBell fontSize={29} />
          
          <div className="border-user">
            <Image src="/PhotoUser.png" alt="foto do usuário" width={45} height={45} />
          </div>
        </div>
      </header>
    </HeaderContainer>
  );
}