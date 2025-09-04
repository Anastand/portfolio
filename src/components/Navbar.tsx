import Link from "next/link";

function Navbar() {
  const links = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact Me",
      href: "/contact",
    },
  ];
  return (
    <div className="flex w-full items-center justify-between px-4 py-4">
      <Link href="https://github.com/anastand/">Anastand</Link>
      <div className="flex items-center gap-4">
        {links.map((link, id) => (
          <Link href={link.href} key={id}>
            {link.title}
          </Link>
        ))}
      </div>
      <a href="mailto:bhardwaj03aryan@gmail.com">Email</a>
    </div>
  );
}

export default Navbar;
