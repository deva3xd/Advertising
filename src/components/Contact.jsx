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
      className="relative py-20 bg-cover bg-center px-4 sm:px-6 lg:px-16"
      id="contact"
      style={{ backgroundImage: `url(${Map})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg lg:text-6xl font-bold text-brand mb-4">CREASINDO</h2>
            <p className="text-gray-200 leading-relaxed font-extralight text-3xl">
              Jl. Bagawantabari, Ds. Siman, Kec. Kepung, Kab. Kediri, Jawa Timur
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="text-white mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-200 text-xl">xxx@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-white mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-gray-200 text-xl">+62 xxx-xxxx-xxxx</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/7%C2%B048'41.5%22S+112%C2%B017'14.7%22E/@-7.8115097,112.2848361,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.811515!4d112.287411?authuser=1&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
              className="inline-block font-normal px-5 py-2 border-2 border-brand hover:bg-brand text-white hover:text-black rounded-sm transition-colors"
            >
              Google Maps
            </a>
          </div>

          {/* contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-1 text-sm">
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
                <label htmlFor="email" className="block text-white font-medium mb-1 text-sm">
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
                <label htmlFor="message" className="block text-white font-medium mb-1 text-sm">
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
                className="font-normal px-5 py-2 border-2 border-brand hover:bg-brand text-white hover:text-black rounded-sm transition-colors disabled:bg-brand disabled:text-black disabled:opacity-60"
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