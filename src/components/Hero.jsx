import { useRef } from "react";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  const section1Ref = useRef(null);
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
        <Navbar className="!bg-black py-4 px-4 sm:px-6 lg:px-8 mx-0 w-screen">
          <NavbarBrand href="#">
            <span className="anton-font text-2xl text-brand font-bold">CREASINDO</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            {items.map((item, index) => {
              return (
                <NavbarLink key={index} href={item.link} active className="!text-white !bg-black hover:opacity-75 rubik-font text-sm uppercase">
                  {item.name}
                </NavbarLink>
              )
            })}
          </NavbarCollapse>
        </Navbar>
        <div>
          <h1 className="text-white anton-font uppercase font-bold text-2xl sm:text-3xl md:text-6xl">
            <TypewriterComponent
              options={{
                strings: ['digital adalah segalanya', 'tapi segalanya bukan digital'],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50
              }}
            />
          </h1>
        </div>
        <p className="font-light text-xs sm:text-lg text-white mb-6 rubik-font">
          Selamat Datang di Web Profile <span className="text-brand">CREASINDO</span>
        </p>
      </div>
    </section>
  )
}
