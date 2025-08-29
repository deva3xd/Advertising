export default function Footer() {
  return (
    <footer className="bg-[#353535] border-t border-gray-700">
      <div className="max-w-6xl mx-auto pt-12 pb-4 px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-brand text-3xl font-bold mb-4 anton-font">ADVERTISING AGENCY</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Kami adalah agensi periklanan yang berfokus pada solusi kreatif dan inovatif untuk membantu bisnis
              berkembang.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand transition-colors">
                  Advertising
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <p>Jl. Bagawantabari, Kepung,</p>
              <p>Kediri, Jawa Timur</p>
              <p>Email: xxx@gmail.com</p>
              <p>Telepon: +62 xxx-xxxx-xxxx</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
      <div className="max-w-6xl mx-auto bg-[#292929] mt-8 py-2 flex flex-row justify-center md:flex-row items-center">
        <p className="text-gray-400 text-sm">©2025 Advertising Agency</p>
      </div>
    </footer>
  )
}