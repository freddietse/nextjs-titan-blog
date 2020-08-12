import Link from "next/link";
import Navbar from "./navbar";
import SocialMedia from "./socialMedia";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div
      className="
      grid
      grid-cols-12
      grid-rows-12
      sm:grid-rows-12
      md:grid-rows-12
      lg:grid-rows-1
      xl:grid-rows-1
      container
      mx-auto
      "
    >
      <div
        className="
        col-span-12
        sm:col-span-12
        md:col-span-12
        lg:col-span-3
        xl:col-span-3
        row-span-4
        sm:row-span-4
        md:row-span-4
        lg:row-span-12
        xl:row-span-12
        flex
        flex-col
        h-full
        p-4
        sm:p-4
        md:p-8
        lg:p-16
        xl:p-16
        "
      >
        <div className="flex flex-col mb-6">
          <img
            src="/profile.jpg"
            alt=""
            className="w-32 h-32 mb-4 rounded-sm"
          />
          <h1 className="text-2xl font-bold text-gray-900">
            <Link href="/">
              <a className="big">FREDDIE TSE</a>
            </Link>
          </h1>
        </div>
        <SocialMedia />
        <Navbar />
      </div>
      <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-9 row-span-8 sm:row-span-8 p-4 sm:p-4 md:p-8 lg:p-16 xl:p-16 flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
