import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>This is home page</h1>
      <section>
        <Link className="underline" href="/about">
          About
        </Link>
        <br />
        <Link className="underline" href="/contact">
          Contact
        </Link>
        <br />
        <Link className="underline" href="/blog">
          Blog
        </Link>
        <br />
        <Link className="underline" href="/articles/breaking-news-123?lang=en">
          Articles in English
        </Link>
        <br />
        <Link className="underline" href="/articles/breaking-news-123?lang=fr">
          Articles in French
        </Link>
        <br />
        <Link className="underline" href="/order-product">
          Order Product
        </Link>
      </section>
    </>
  );
}
