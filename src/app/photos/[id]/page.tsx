import Image from "next/image";
import { notFound } from "next/navigation";

import { getImage } from "~/server/queries";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) {
    notFound();
  }

  const image = await getImage(idAsNumber);

  return (
    <div>
      <div className="relative h-48 w-48 p-4">
        <Image
          src={image.url}
          alt={image.name}
          className="h-auto w-full"
          fill
        />
      </div>
    </div>
  );
}
