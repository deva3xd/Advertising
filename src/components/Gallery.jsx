import Gambar1 from "../assets/images/1.png";
import Gambar2 from "../assets/images/2.png";
import Gambar3 from "../assets/images/3.png";
import Gambar4 from "../assets/images/4.png";
import Gambar5 from "../assets/images/5.png";
import Gambar6 from "../assets/images/6.png";

export default function Gallery() {
  const galleryItems = [
    { image:Gambar1, alt: "Showcase 1" },
    { image:Gambar2, alt: "Showcase 2" },
    { image:Gambar3, alt: "Showcase 3" },
    { image:Gambar4, alt: "Showcase 4" },
    { image:Gambar5, alt: "Showcase 5" },
    { image:Gambar6, alt: "Showcase 6" },
  ]
  return (
    <section id="galeri" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 rubik-font">GALERI</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="zoom-in"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}