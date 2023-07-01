import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>Open any of the links bellow:</p>
      <ul>
        <li>
          <Link
            target="_blank"
            href="/book/uy/power-up-level-1-activity-book-with-online-resources-and-home-booklet-9781108430036"
            locale="en"
          >
            /book/uy/power-up-level-1-activity-book-with-online-resources-and-home-booklet-9781108430036
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="/book/uy/power-up-level-1-activity-book-with-online-resources-and-home-booklet-978110843003"
            locale="en"
          >
            /book/uy/power-up-level-1-activity-book-with-online-resources-and-home-booklet-978110843003
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="/libro/uy/power-up-level-1-activity-book-with-online-resources-and-home-booklet-9781108430036"
            locale="es"
          >
            /libro/uy/power-up-level-1-activity-book-with-online-resources-and-home-booklet-9781108430036
          </Link>
        </li>
      </ul>
    </>
  );
}
