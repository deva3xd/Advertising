import Lottie from "lottie-react";
import Robot from "../assets/animation/Little power robot.json"

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 rubik-font">TENTANG KAMI</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed rubik-font">
              <p>
                Kami adalah advertising agency yang berfokus dalam menciptakan kampanye kreatif dan efektif untuk membantu brand berkembang.
                Dengan pengalaman merancang iklan digital maupun konvensional, kami percaya setiap brand memiliki cerita unik yang perlu disampaikan dengan cara yang tepat.
              </p>
              <p>
                Bagi kami, periklanan bukan hanya soal tampil beda, tapi juga bagaimana brand anda bisa berbicara lebih kuat dan meninggalkan kesan mendalam.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <Lottie animationData={Robot} />
          </div>
        </div>
      </div>
    </section>
  )
}