import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <Link className="underline" href="/">
        Home
      </Link>
      <br />
      <h1>Product List</h1>
      <h2>
        <Link className="underline" href="/products/1">
          Product 1
        </Link>
      </h2>
      <h2>
        <Link className="underline" href="/products/2">
          Product 2
        </Link>
      </h2>
      <h2>
        <Link className="underline" href="/products/3">
          Product 3
        </Link>
      </h2>
    </>
  );
}
