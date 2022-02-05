import Head from "next/head";
import { NotFound } from "../../components/NotFound";

export default function animes() {
  return (
    <>
      <Head>
        <title>Animes</title>
        <meta name="description" content="Encontre seus animes favoritos aqui!" />
      </Head>
      <NotFound />
    </>
  );
}