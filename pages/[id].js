import { baseUrl } from "./index";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getStaticPaths = async () => {
	const res = await fetch(baseUrl);
	const data = await res.json();

	const paths = data.articles.map((article, index) => {
		return {
			params: { id: index.toString() },
		};
	});

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(baseUrl);
	const data = await res.json();

	return {
		props: {
			article: data.articles[id],
		},
		revalidate: 1,
	};
};

const Details = ({ article }) => {
	return (
		<>
			<article className={styles.article}>
				<Link href={"/"}>
					<a className={`${styles.link} ${styles.left}`}> ️← ZPĚT </a>
				</Link>
				<h2 className={styles.title}>{article.title}</h2>
				<sub className={styles.author}>{article.author}</sub>

				<img
					className={styles.img}
					src={article.urlToImage}
					alt=""
					width="100%"
				/>
				<p className={styles.description}>{article.description}</p>

				<a
					className={styles.link}
					href={article.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Celý článek
				</a>
			</article>
		</>
	);
};

export default Details;
