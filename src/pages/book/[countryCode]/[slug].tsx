import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <div>{router.locale === "en" ? "Hello!" : "Hola!"}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
