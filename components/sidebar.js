import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
const ThemeToggle = dynamic(() => import("./themeToggle"), {
  ssr: false,
});
function Sidebar({}) {
  const router = useRouter();

  return (
    <div id="sidebar" className="sidebar">
      <ThemeToggle />
      <h1 className="heading-1 u-margin-bottom-medium">
        Yusuf İpek <br />
        <span> Web Developer</span> <hr />
        <span> Content Creator </span>
      </h1>

      <ul className="sidebar__list">
        <li
          className={
            router.asPath == "/" || router.asPath == "/#contact"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            router.asPath == "/blog"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <Link href="/blog">Blog</Link>
        </li>
        <li
          className={
            router.asPath == "/projects"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <Link href="/projects">Projects</Link>
        </li>
        <li
          className={
            router.asPath == "/youtube"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <Link href="/youtube">Youtube</Link>
        </li>
        <li
          className={
            router.asPath == "/contact"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <Link href="/#contact">Contact Me </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
