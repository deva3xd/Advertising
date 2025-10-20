export default function Footer() {
  return (
    <footer className="bg-black px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto pt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-brand text-3xl font-bold mb-4 anton-regular">ADVERTISING AGENCY</h2>
            <p className="text-gray-300 leading-relaxed">
              Kami adalah agen periklanan yang berfokus pada solusi kreatif dan inovatif untuk membantu bisnis
              berkembang.
            </p>
          </div>

          {/* services */}
          <div>
            <h3 className="text-brand font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:underline transition-colors">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:underline transition-colors">
                  Website
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-brand font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Email: xxx@gmail.com</span></li>
              <li><span className="text-gray-300">Telepon: +62 xxx-xxxx-xxxx</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="max-w-screen-xl mx-auto border-t border-white mt-8 py-4 px-4 sm:px-6 lg:px-16">
        <p className="text-gray-400 text-sm text-center">©2025 Advertising Agency</p>
      </div>
    </footer>
  )
}