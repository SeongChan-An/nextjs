import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <img className={styles.img} src="/vercel.svg" />
      <div>
        <Link href="/">
          <a
            className={`${styles.link} ${
              router.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={[
              styles.link,
              router.pathname === "/about" ? styles.active : "",
            ].join(" ")}
          >
            About
          </a>
        </Link>
      </div>
    </nav>
  );
}
