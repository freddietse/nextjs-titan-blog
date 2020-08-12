export default function Footer() {
  return (
    <footer className="text-base pt-12">
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://nextjs.org/" className="hover:underline">
        Next.js
      </a>
    </footer>
  );
}
