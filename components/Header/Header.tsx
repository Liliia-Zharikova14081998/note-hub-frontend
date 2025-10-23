import css from "./Header.module.css";
import Link from "next/link";
import TagsMenu from "../TagsMenu/TagsMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";


export function Header() { 
  return (
    <header className={css.header}>
      <p className={css.logo}>
    NoteHub
  </p>
  <nav aria-label="Main Navigation">
    <ul className={css.navigation}>
      <li className={css.navigationItem}>
        <Link className={css.navigationLink} href="/">Home</Link>
          </li>
            <AuthNavigation />
          <li className={css.navigationItem}>
            <TagsMenu />
          </li>
         
    </ul>
  </nav>
    </header>
    );
}