import { getMyImage } from "~/server/queries";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const parsedId = Number(id);
  if (Number.isNaN(parsedId)) throw new Error("Invalid image id");

  const image = await getMyImage(parsedId);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
