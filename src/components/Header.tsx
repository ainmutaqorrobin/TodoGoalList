import { HeaderProps } from "../interface";

export default function Header(props: HeaderProps) {
  return (
    <header>
      <img {...props.image} />
      {props.children}
    </header>
  );
}
