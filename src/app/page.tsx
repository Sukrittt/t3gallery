import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <p>Please sign in.</p>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}

async function Images() {
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
