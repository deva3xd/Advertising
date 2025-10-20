import { useEffect, useState } from "react";

export default function NavBar({ sectionId }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      name: "Beranda",
      link: "#home",
    },
    {
      name: "Tentang Kami",
      link: "#about",
    },
    {
      name: "Galeri",
      link: "#gallery",
    },
    {
      name: "Kontak",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const sectionEl = document.getElementById(sectionId);

    if (!sectionEl) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px" }
    );
    observer.observe(sectionEl);
    return () => observer.unobserve(sectionEl);
  }, [sectionId]);

  return (
    <nav
      className={`bg-black fixed top-0 w-full py-4 px-4 sm:px-6 lg:px-16 mx-0 z-50 transform ${showNavbar
        ? "translate-y-0 transition-all duration-300 delay-75"
        : "-translate-y-full transition-all duration-300 delay-75"
        }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <span className="anton-regular text-2xl text-brand font-bold">
          CREASINDO
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none cursor-pointer"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 text-sm uppercase hover:opacity-75"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
