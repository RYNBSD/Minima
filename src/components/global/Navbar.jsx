const navigation = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About us",
    link: "#about-us",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "success story",
    link: "#success-story",
  },
  {
    name: "Testimonial",
    link: "#testimonial",
  },
  {
    name: "Our Team",
    link: "#our-team",
  },
];

export default function Navbar() {
  return (
    <nav className="w-screen grid place-items-center py-3">
      <div className="container flex items-center justify-between gap-5">
        <div className="grow flex items-center justify-start gap-1">
          <img src="/asset/logo-black.png" alt="logo" width="56" height="56" />
          <h1 className="font-bold text-[20px]">Minima</h1>
        </div>
        <ul className="flex items-center justify-between grow-[3]">
          {navigation.map((navigate) => (
            <li
              className="relative before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] hover:before:w-full before:bg-black before:transition-all"
              key={navigate.name}
            >
              <a href={navigate.link}>{navigate.name}</a>
            </li>
          ))}
        </ul>
        <div className="grow grid place-items-center">
          <button
            className="bg-black text-[12px] font-medium grid place-items-center text-white py-2 px-6 rounded-lg"
            type="button"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
