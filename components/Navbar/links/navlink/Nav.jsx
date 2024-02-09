import { usePathname } from "next/navigation";
import style from "./nav.module.css";
import Link from "next/link";

const Nav = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${style.container} ${pathName === item.path && style.active}`}
    >
      {item.title}
    </Link>
  );
};

export default Nav;
