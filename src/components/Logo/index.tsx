import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
  className?: string;
}
export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={clsx(`text-2xl`, className)}>
      <Image
        width={158}
        alt="Flashpay logo"
        className="h-full"
        height={200}
        src="/logo.svg"
      />
    </Link>
  );
};
