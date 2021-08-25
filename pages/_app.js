import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Articles | </title>
				<meta name="description" content="articles" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
