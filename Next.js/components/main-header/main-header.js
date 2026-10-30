'use client';


import Link from "next/link";

import logoImg from "../../public/images/logo.png";
import styles from "./main-header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function MainHeader() {

  const path = usePathname();
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={logoImg.src} alt="My Food App" />
        <p>Net level food</p>
      </Link>

      <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/meals" className={path === "/meals" ? styles.active : undefined}>
                    Meals
                </Link>
            </li>
            <li>
                <Link href="/meals/share" className={path === "/meals/share" ? styles.active : undefined}>
                    Share Meals
                </Link>
            </li>
            <li>
                <Link href="/community" className={path === "/community"  ? styles.active : undefined}>
                    Community
                </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
