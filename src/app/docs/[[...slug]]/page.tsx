export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 1) {
    return <h2>This is for feature - {slug[0]}</h2>;
  } else if (slug?.length === 2) {
    return (
      <h2>
        This is for feature - {slug[0]} and concept = {slug[1]}
      </h2>
    );
  }
  return <h1>Docs page</h1>;
}
