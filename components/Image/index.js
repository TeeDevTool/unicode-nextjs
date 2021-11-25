import Image from "next/image";

const ImageCustom = (props) => {
  const { name, url } = props;
  const alt = name.toLowerCase();

  return <Image src={url} alt={alt} width={80} height={80} />;
};
export default ImageCustom;
