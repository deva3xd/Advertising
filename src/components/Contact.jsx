import { Phone, Mail } from "lucide-react";
import { useState } from "react"
import Map from "../assets/images/map.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${Map})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-base lg:text-xl font-normal text-white rubik-font mb-4">CREASINDO</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4 border-t border-white">
            <p className="text-gray-200 leading-relaxed font-extralight text-2xl">
              Jl. Bagawantabari, Kec. Kepung, Kab. Kediri, Jawa Timur
            </p>
            <div className="flex items-center space-x-4 rubik-font">
              <Phone className="text-white mt-1 flex-shrink-0" size={26} />
              <div>
                <p className="text-gray-200">+62 xxx-xxxx-xxxx</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 rubik-font">
              <Mail className="text-white mt-1 flex-shrink-0" size={26} />
              <div>
                <p className="text-gray-200">xxx@gmail.com</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/7%C2%B048'41.5%22S+112%C2%B017'14.7%22E/@-7.8115097,112.2848361,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.811515!4d112.287411?authuser=1&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              className="inline-block font-bold px-5 py-2 border-2 border-brand hover:bg-brand text-white hover:text-black rounded-sm transition-colors"
            >
              Google Maps
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white text-white rounded-sm border border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white text-white rounded-sm border border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white text-white rounded-sm border border-gray-600 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="font-bold px-5 py-2 border-2 border-brand hover:bg-brand text-white hover:text-black rounded-sm transition-colors disabled:bg-brand disabled:text-black disabled:opacity-60"
                disabled
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}