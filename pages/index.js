import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const baseUrl = `https://newsapi.org/v2/top-headlines?country=cz&category=technology&apiKey=946c14c2bc5245b3ac16efd9c46f6dbf`;

export const getStaticProps = async () => {
	const res = await fetch(baseUrl);

	console.log(res);
	const data = await res.json();

	return {
		props: {
			articles: data.articles,
		},
		revalidate: 1,
	};
};

export default function Home({ articles }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Articles | Home</title>
				<meta name="description" content="articles" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1> IT NEWS</h1>
				<section>
					{articles.map((article, index) => (
						<article className={`${styles.container}`} key={index}>
							<Link href={"/" + index}>
								<h2 className={styles.title}>{article.title}</h2>
							</Link>
							<Link href={"/" + index}>
								<a className={styles.link}> Na článek</a>
							</Link>
						</article>
					))}
				</section>
			</div>
		</div>
	);
}
