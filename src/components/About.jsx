import { Search, Box } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-background text-white" id="about">
      <div className="max-w-screen-xl mx-auto">
        <span className="text-base sm:text-xl font-extralight">KENAPA HARUS MEMILIH KAMI?</span>
        <h2 className="text-3xl sm:text-6xl font-bold my-12">Karena kami peduli terhadap detail serta kualitas produk</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2">
            <div className="bg-gray-500 p-4 rounded-md">
              <Search size={20} />
            </div>
            <p className="text-base sm:text-xl">Di produksi dengan bahan berkualitas</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-500 p-4 rounded-md">
              <Box size={20} />
            </div>
            <p className="text-base sm:text-xl">Memiliki pengalaman lebih dari 4 Tahun</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-500 p-4 rounded-md">
              <Box size={20} />
            </div>
            <p className="text-base sm:text-xl">Memiliki pengalaman lebih dari 4 Tahun</p>
          </div>
        </div>
      </div>
    </section >
  )
}