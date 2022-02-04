import Image from 'next/image';
import { BiSearch, BiBell } from 'react-icons/bi'
import Link from 'next/link';

import { useRouter } from 'next/router';

import { HeaderContainer } from './styles'

export function Header() {
  const { asPath } = useRouter();

  return (
    <HeaderContainer>
      <header>
        <Image src="/Watching.svg" alt="logo" width={192} height={40} />

        <nav>
          <ul>
            <Link href="/" passHref>
              <li className={asPath === '/' ? 'active' : ''}>Inicio</li>
            </Link>
            <Link href="/movies" passHref>
              <li className={asPath === '/movies' ? 'active' : ''}>Filmes</li>
            </Link>
            <Link href="/series" passHref>
              <li className={asPath === '/series' ? 'active' : ''}>Séries</li>
            </Link>
            <Link href="/animes" passHref>
              <li className={asPath === '/animes' ? 'active' : ''}>Animes</li>
            </Link>
            <Link href="/my-list" passHref>
              <li className={asPath === '/my-list' ? 'active' : ''}>Minha lista</li>
            </Link>
          </ul>
        </nav>

        <div className="header-end">
          <BiSearch fontSize={29} />

          <div className="notification">
            <BiBell fontSize={29} />
            <div className="notification-counter">
              3
            </div>
          </div>
          
          <div className="border-user">
            <Image src="/PhotoUser.png" alt="foto do usuário" width={45} height={45} />
          </div>
        </div>
      </header>
    </HeaderContainer>
  );
}