import { useRouter } from "next/router";
function Sidebar({}) {
  const router = useRouter();
  return (
    <div className="sidebar">
      <h1 className="heading-1 u-margin-bottom-medium">
        Yusuf İpek <br />
        <span> Web Developer</span> <hr />
        <span> Content Creator </span>
      </h1>
      <ul className="sidebar__list">
        <li
          className={
            router.asPath == "/"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <a href="/">Home</a>
        </li>
        <li
          className={
            router.asPath == "/blog"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <a href="/blog">Blog</a>
        </li>
        <li
          className={
            router.asPath == "/projects"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <a href="/projects">Projects</a>
        </li>
        <li
          className={
            router.asPath == "/youtube"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <a href="/youtube">Youtube</a>
        </li>
        <li
          className={
            router.asPath == "/contact"
              ? "sidebar__list__item sidebar__item--active"
              : "sidebar__list__item"
          }
        >
          <a href="contact">Contact Me </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
