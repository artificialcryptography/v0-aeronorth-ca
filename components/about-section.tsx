export default function AboutSection() {
  return (
    <div className="py-24 w-full">
      <div className="container mx-auto px-4">
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
            <div className="bg-black bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <h4 className="font-bold text-xl mb-2 text-white">200+</h4>
              <p className="text-white">Projects Completed</p>
            </div>
            <div className="bg-black bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <h4 className="font-bold text-xl mb-2 text-white">98%</h4>
              <p className="text-white">Client Satisfaction</p>
            </div>
            <div className="bg-black bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <h4 className="font-bold text-xl mb-2 text-white">15+</h4>
              <p className="text-white">Industry Experts</p>
            </div>
            <div className="bg-black bg-opacity-70 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
              <h4 className="font-bold text-xl mb-2 text-white">5</h4>
              <p className="text-white">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
