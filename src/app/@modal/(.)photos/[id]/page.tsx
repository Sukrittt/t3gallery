import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-page-image";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (isNaN(idAsNumber)) {
    return <Modal>Invalid photo ID</Modal>;
  }

  return (
    <Modal>
      <Suspense fallback={<Loader2 className="h-4 w-4 animate-spin" />}>
        <FullPageImageView photoId={idAsNumber} />
      </Suspense>
    </Modal>
  );
}
