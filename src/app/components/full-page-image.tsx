import Image from "next/image";

import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div className="relative h-96 w-96 p-4">
      <Image src={image.url} alt={image.name} className="h-auto w-full" fill />
    </div>
  );
}
