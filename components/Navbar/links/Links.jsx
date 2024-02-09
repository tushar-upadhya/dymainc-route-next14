"use client";

import { useState } from "react";
import styles from "./link.module.css";
import Image from "next/image";
import Nav from "./navlink/Nav";
// import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Nav item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Nav item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={""}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Nav item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Nav item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
