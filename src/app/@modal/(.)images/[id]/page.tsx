import { Modal } from "~/app/@modal/(.)images/[id]/modal";
import { FullPageImageView } from "~/components/full-image-page";

export default async function ImageModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const parsedId = Number(id);
  if (Number.isNaN(parsedId)) throw new Error("Invalid image id");

  return (
    <Modal>
      <FullPageImageView imageId={parsedId} />
    </Modal>
  );
}
