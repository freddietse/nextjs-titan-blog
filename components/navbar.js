import Link from "next/link";

export default function Navbar() {
  const items = [
    {
      id: 0,
      name: "首页",
      url: "/",
    },
    {
      id: 1,
      name: "照片",
      url: "/photograph",
    },
    {
      id: 2,
      name: "资源",
      url: "/resources",
    },
    {
      id: 3,
      name: "关于",
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
