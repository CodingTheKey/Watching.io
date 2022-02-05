import Head from "next/head";
import { NotFound } from "../../components/NotFound";

export default function series() {
  return (
    <>
      <Head>
        <title>Séries</title>
        <meta name="description" content="Encontre suas séries favoritas aqui!" />
      </Head>
      <NotFound />
    </>
  );
}