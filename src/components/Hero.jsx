import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Meeting from "../assets/images/meeting.png";

export default function Hero() {
  const section1Ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      name: "Beranda",
      link: "#home"
    },
    {
      name: "Tentang Kami",
      link: "#about"
    },
    {
      name: "Galeri",
      link: "#gallery"
    },
    {
      name: "Kontak",
      link: "#contact"
    },
  ]

  return (
    <section id="home" className="bg-black py-4 px-4 sm:px-6 lg:px-16" ref={section1Ref}>
      {/* navbar */}
      <nav className="bg-black w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto relative">
          <span className="anton-regular text-2xl text-brand font-bold">
            CREASINDO
          </span>
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
          <div
            id="navbar-hero"
            className={`${isOpen ? "block" : "hidden"
              } absolute top-full left-0 w-full md:static md:block md:w-auto`}
          >
            <ul className="font-medium flex flex-col mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 text-sm uppercase hover:opacity-75"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar end */}

      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-between mt-12 mb-8">
          <div className="flex text-white items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">Selamat datang di web profile <span className="text-brand">CREASINDO</span></h1>
              <p className="font-normal text-xl mt-4">Kami membuat iklan untuk dapat menjangkau orang yang tepat dan waktu yang tepat.</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={Meeting} width={500} alt="Meeting" />
            </div>
          </div>
          <div className="text-white flex gap-4 items-center justify-between">
            <a href="#contact" className="bg-brand px-8 py-2 rounded-md text-black hover:bg-brand/90 flex items-center gap-1">
              Hubungi Sekarang <ArrowUpRight size={28} />
            </a>
            <div className="h-[1px] flex-1 bg-white"></div>
            <span className="text-white">Cepat | Murah | Berkualitas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
