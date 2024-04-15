import Image from "next/image";

import { Modal } from "./modal";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) {
    return <Modal>Invalid photo ID</Modal>;
  }

  const image = await getImage(idAsNumber);

  return (
    <Modal>
      <div className="relative h-48 w-48 p-4">
        <Image
          src={image.url}
          alt={image.name}
          className="h-auto w-full"
          fill
        />
      </div>
    </Modal>
  );
}
