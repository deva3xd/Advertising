import { useRef, useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  const section1Ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      name: "Beranda",
      link: "#"
    },
    {
      name: "Tentang Kami",
      link: "#about"
    },
    {
      name: "Galeri",
      link: "#galeri"
    },
    {
      name: "Kontak",
      link: "#contact"
    },
  ]

  return (
    <section id="hero" className="bg-black" ref={section1Ref}>
      <div className="max-w-screen-2xl mx-auto min-h-screen flex flex-col items-center justify-between">
        <nav className="bg-black w-full py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative">
            <span className="anton-font text-2xl text-brand font-bold">
              CREASINDO
            </span>

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-controls="navbar-hero"
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

            {/* Menu */}
            <div
              id="navbar-hero"
              className={`${isOpen ? "block" : "hidden"
                } absolute top-full left-0 w-full bg-black md:static md:block md:w-auto`}
            >
              <ul className="font-medium flex flex-col mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 rubik-font text-sm uppercase hover:opacity-75"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Title */}
        <div>
          <h1 className="text-white anton-font uppercase font-bold text-2xl sm:text-3xl md:text-6xl">
            <TypewriterComponent
              options={{
                strings: [
                  "digital adalah segalanya",
                  "tapi segalanya bukan digital",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-light text-xs sm:text-lg text-white mb-6 rubik-font">
          Selamat Datang di Web Profile{" "}
          <span className="text-brand">CREASINDO</span>
        </p>
      </div>
    </section>
  );
}
