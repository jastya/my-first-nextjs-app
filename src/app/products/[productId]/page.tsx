// import { Metadata } from "next";

// type Props = Promise<{ productId: string }>;

// export const generateMetadata = async ({
//   props,
// }: {
//   props: Props;
// }): Promise<Metadata> => {
//   const productId = (await props).productId;
//   const title = await new Promise((resolve) => {
//     setTimeout(() => resolve(`iPhone ${productId}`), 100);
//   });
//   return { title: `Product ${title}` };
// };

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Product Details Page {productId}</h1>;
}
