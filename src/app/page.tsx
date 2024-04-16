import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { getShortenedText } from "~/utils";
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
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {images.map((image) => (
        <Link href={`/photos/${image.id}`} key={image.id} className="space-y-2">
          <div className="relative h-48 w-48 overflow-hidden rounded-md p-4 transition hover:scale-105">
            <Image
              src={image.url}
              alt={image.name}
              className="h-auto w-full"
              fill
            />
          </div>
          <p className="text-[13px] font-medium text-white">
            {getShortenedText(image.name, 25)}
          </p>
        </Link>
      ))}
    </div>
  );
}
