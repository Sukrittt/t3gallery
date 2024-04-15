import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { getImages } from "~/server/queries";

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
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id}>
          <div className="relative h-48 w-48 p-4">
            <Image
              src={image.url}
              alt={image.name}
              className="h-auto w-full"
              fill
            />
          </div>
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
