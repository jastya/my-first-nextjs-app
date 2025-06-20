import Link from "next/link";

const Blog = () => (
  <section className="flex">
    <Link href="/blog/first">First</Link>
    <br />
    <Link href="/blog/second">Second</Link>
  </section>
);

export default Blog;
