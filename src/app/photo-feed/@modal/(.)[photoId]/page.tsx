import Image from "next/image";
import Modal from "@/components/modal";
import wondersImages from "../../wonders";

export default async function InterceptedPhotoDetails({
  params,
}: {
  params: Promise<{ photoId: string }>;
}) {
  const photoId = (await params).photoId;
  const image = wondersImages.find((img) => img.id === photoId)!;
  return (
    <Modal>
      <Image
        src={image.src}
        alt={image.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h2 className="text-xl font-semibold">{image.name}</h2>
        <h3>{image.photographer}</h3>
        <h3>{image.location}</h3>
      </div>
    </Modal>
  );
}
