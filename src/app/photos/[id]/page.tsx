import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { notFound } from "next/navigation";

import FullPageImageView from "~/components/full-page-image";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) {
    notFound();
  }

  return (
    <div className="flex h-[80vh] w-screen items-center justify-center">
      <Suspense
        fallback={<Loader2 className="h-4 w-4 animate-spin text-white" />}
      >
        <FullPageImageView photoId={idAsNumber} />
      </Suspense>
    </div>
  );
}
