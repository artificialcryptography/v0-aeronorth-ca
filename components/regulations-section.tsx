import { Shield, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function RegulationsSection() {
  return (
    <div id="regulations" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Regulatory Compliance</h2>
          <p className="text-white max-w-3xl mx-auto">
            Aeronorth operates in full compliance with Transport Canada regulations to ensure safe and legal drone
            operations.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black bg-opacity-50 backdrop-blur-sm border border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Transport Canada Certified</h3>
              </div>
              <p className="text-white mb-6">
                Our pilots hold Advanced Operations certificates from Transport Canada, allowing us to operate in
                complex airspace and near people. We maintain comprehensive flight logs and follow strict safety
                protocols for all operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5" />
                  <span className="text-white">Advanced Operations Certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5" />
                  <span className="text-white">RPAS Safety Assurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5" />
                  <span className="text-white">Special Flight Operations Certificate (SFOC) when required</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-black bg-opacity-50 backdrop-blur-sm border border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Insurance & Safety</h3>
              </div>
              <p className="text-white mb-6">
                Aeronorth carries comprehensive liability insurance that exceeds Transport Canada requirements. Our
                safety management system includes pre-flight assessments, weather monitoring, and continuous training
                for all pilots.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5" />
                  <span className="text-white">$2M Liability Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5" />
                  <span className="text-white">Comprehensive Safety Management System</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5" />
                  <span className="text-white">Regular Equipment Maintenance & Inspections</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
