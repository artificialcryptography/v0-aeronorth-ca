"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div id="contact" className="py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-white max-w-3xl mx-auto">
            Ready to elevate your project with aerial insights? Get in touch with our team to discuss your specific
            needs.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
            <p className="text-white mb-8">
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer all
              your questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-full mr-4 border border-white/20">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-white">+1 (250) 555-1234</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-full mr-4 border border-white/20">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-white">info@aeronorth.ca</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-3 rounded-full mr-4 border border-white/20">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office</h4>
                  <p className="text-white">
                    123 Victoria Street
                    <br />
                    Kamloops, BC V2C 1A4
                    <br />
                    Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="font-medium text-white">British Columbia</p>
                </div>
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="font-medium text-white">Alberta</p>
                </div>
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="font-medium text-white">Saskatchewan</p>
                </div>
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="font-medium text-white">Manitoba</p>
                </div>
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="font-medium text-white">Yukon</p>
                </div>
                <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <p className="font-medium text-white">Northwest Territories</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-black bg-opacity-50 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send Us a Message</CardTitle>
                <CardDescription className="text-white/70">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-black bg-opacity-50 border border-white/30 text-white p-4 rounded-lg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Thank you! Your message has been sent successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                          Full Name <span className="text-white/50">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                          Email <span className="text-white/50">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-white">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(250) 555-1234"
                          className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium text-white">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-white">
                        Message <span className="text-white/50">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and requirements..."
                        rows={5}
                        required
                        className="bg-black/30 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
