import Image from "next/image";
import { format } from "date-fns";

import { getShortenedText } from "~/utils";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div className="space-y-2">
      <div className="relative h-96 w-96 overflow-hidden rounded-md p-4">
        <Image
          src={image.url}
          alt={image.name}
          className="h-auto w-full"
          fill
        />
      </div>

      <div className="flex items-center justify-between text-[13px] font-medium text-white">
        <p>{getShortenedText(image.name, 25)}</p>
        <p>{format(image.createdAt, "MMMM do, h:mm a")}</p>
      </div>
    </div>
  );
}
