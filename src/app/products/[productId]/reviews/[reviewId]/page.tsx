import { notFound } from "next/navigation";

function randomNum(count: number): number {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = randomNum(2);

  if (random === 1) throw new Error("Something went wrong");

  const reviewId = (await params).reviewId;
  const productId = (await params).productId;

  if (+reviewId > 10) return notFound();
  return (
    <h3>
      This is review no. - {reviewId} for product - {productId}
    </h3>
  );
}
