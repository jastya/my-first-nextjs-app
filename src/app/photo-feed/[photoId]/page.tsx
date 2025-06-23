import Image from "next/image";
import wondersImages from "../wonders";

export default async function PhotoDetails({
  params,
}: {
  params: Promise<{ photoId: string }>;
}) {
  const photoId = (await params).photoId;
  const image = wondersImages.find((img) => img.id === photoId)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mz-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{image.name}</h1>
        </div>
        <Image
          src={image.src}
          alt={image.name}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white py-4">
          <h3>{image.photographer}</h3>
          <h3>{image.location}</h3>
        </div>
      </div>
    </div>
  );
}
