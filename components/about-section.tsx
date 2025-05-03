import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background container with hidden overflow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Image container with reduced width (less cropping) */}
        <div className="absolute h-full w-[140%] left-[-20%]">
          <Image
            src="/images/topo-contour.jpg"
            alt="Topographical background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>

      {/* Content with no horizontal margins */}
      <div className="relative z-10">
        <div id="about" className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Aeronorth</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="max-w-full mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white text-center">Elevating Your Perspective</h3>
            <p className="text-white mb-6 text-center">
              Aeronorth is a leading drone survey company specializing in providing high-precision aerial data for
              construction projects and natural resource management. Founded in 2018, we've helped hundreds of clients
              make better decisions with accurate aerial insights.
            </p>
            <p className="text-white mb-10 text-center">
              Our team of Transport Canada-certified drone pilots and data specialists combines cutting-edge technology
              with industry expertise to deliver actionable intelligence that drives project success.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h4 className="font-bold text-xl mb-2 text-white">200+</h4>
                <p className="text-white">Projects Completed</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h4 className="font-bold text-xl mb-2 text-white">98%</h4>
                <p className="text-white">Client Satisfaction</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h4 className="font-bold text-xl mb-2 text-white">15+</h4>
                <p className="text-white">Industry Experts</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
                <h4 className="font-bold text-xl mb-2 text-white">5</h4>
                <p className="text-white">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
