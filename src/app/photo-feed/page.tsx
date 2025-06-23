import Link from "next/link";
import Image from "next/image";

import wondersImages from "./wonders";
import "./styles.css";

export default function PhotosList() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Photo Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wondersImages.map((image) => (
          <div key={image.id}>
            <Link href={`/photo-feed/${image.id}`}>
              <Image
                src={image.src}
                alt={image.name}
                className="w-full object-cover aspect-square"
              ></Image>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
