import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative h-48 w-48 p-4">
          <Image
            src={image.url}
            alt="random-images"
            className="h-auto w-full"
            fill
          />
        </div>
      ))}
    </div>
  );
}
