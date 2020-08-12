import Link from "next/link";

export default function Navbar() {
  const items = [
    {
      id: 0,
      name: "home",
      url: "/",
    },
    {
      id: 1,
      name: "photograph",
      url: "/photograph",
    },
    {
      id: 2,
      name: "resources",
      url: "/resources",
    },
    {
      id: 3,
      name: "about me",
      url: "/about",
    },
  ];
  return (
    <nav className="flex flex-col py-10">
      {items.map((item) => (
        <Link href={item.url} key={item.id}>
          <a className="py-3 font-bold duration-700 hover:text-yellow-500">
            {item.name.toUpperCase()}
          </a>
        </Link>
      ))}
    </nav>
  );
}
