import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect, useState } from "react";

export default function NavBar({ sectionId }) {
  const [showNavbar, setShowNavbar] = useState(false);
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
    <Navbar className={`!bg-black fixed top-0 w-full py-4 px-4 sm:px-6 lg:px-8 mx-0 z-50 transform ${showNavbar ? "translate-y-0 transition-all duration-300 delay-75" : "-translate-y-full transition-all duration-300 delay-75"}`}>
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
  );
}
