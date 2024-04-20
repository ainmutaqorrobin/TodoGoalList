import { ReactNode } from "react";

interface Image {
  src: string;
  alt: string;
}
interface HeaderProps {
  image: Image;
  children: ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <img {...props.image} />
      {props.children}
    </header>
  );
}