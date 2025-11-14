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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none cursor-pointer"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          {!isOpen ? (
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
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>{" "}
              </g>
            </svg>
          )}
        </button>
        <div
          id="navbar-default"
          className={`${isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto bg-black`}
        >
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
