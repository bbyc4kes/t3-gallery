import { getMyImage } from "~/server/queries";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = ["1", "2", "3", "4", "5", "6"];
  return slugs.map((slug) => ({ id: slug }));
}

export default async function FullPageImageView(props: { imageId: number }) {
  const image = await getMyImage(props.imageId);
  return <img src={image.url} className="w-96" />;
}
