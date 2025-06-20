export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1
        style={{
          backgroundColor: "Highlight",
        }}
      >
        Product layout
      </h1>
      {children}
    </>
  );
}
