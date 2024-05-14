import Image from "next/image";
import Link from "next/link";

interface IconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
}

const Icon = ({ src, alt, width, height, href }: IconProps) => {
  return (
    <Link href={href} passHref={true} target="_blank">
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default Icon;
