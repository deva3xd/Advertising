import Lottie from "lottie-react";
import Robot from "../assets/animation/Little power robot.json";
import { Banknote, Hourglass, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 rubik-font">TENTANG KAMI</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed rubik-font" data-aos="fade-right">
              <p>
                Kami adalah <b>Advertising Agency</b> yang berfokus dalam menciptakan kampanye kreatif dan efektif untuk membantu brand berkembang.
                Dengan pengalaman merancang iklan digital maupun konvensional, kami percaya setiap brand memiliki cerita unik yang perlu disampaikan dengan cara yang tepat.
              </p>
              <p>
                Bagi kami, periklanan bukan hanya soal tampil beda, tapi juga bagaimana brand anda bisa berbicara lebih kuat dan meninggalkan kesan mendalam.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last" data-aos="fade-left">
            <Lottie animationData={Robot} />
          </div>
        </div>
        <div data-aos="fade-down">
          <h2 className="text-3xl underline lg:text-4xl font-bold text-black mb-6 rubik-font text-center">PROSES</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-20">
            <div className="w-1/2 md:w-full">
              <div className="rounded-lg text-black p-10 border-4 border-black flex justify-center items-center">
                <Users size={90} />
              </div>
              <span className="font-medium flex justify-center mt-2 text-black text-base">Konsultasi</span>
            </div>
            <div className="w-1/2 md:w-full">
              <div className="rounded-lg text-black p-10 border-4 border-black flex justify-center items-center">
                <Hourglass size={90} />
              </div>
              <span className="font-medium flex justify-center mt-2 text-black text-base">Pembuatan</span>
            </div>
            <div className="w-1/2 md:w-full">
              <div className="rounded-lg text-black p-10 border-4 border-black flex justify-center items-center">
                <Banknote size={90} />
              </div>
              <span className="font-medium flex justify-center mt-2 text-black text-base">Pembayaran</span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}