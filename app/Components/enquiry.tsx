"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./Ui/button"
import { Textarea } from "./Ui/textarea"
import { Input } from "./Ui/input"
import { FaEnvelope, FaPaperPlane, FaPhone, FaBox } from 'react-icons/fa';


export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Fixed: Prevent default form submission
    setIsSubmitting(true) // Fixed: Set loading state
    setSubmitStatus("idle")
    try {
      // Transform data to match API expectations
      const apiData = {
        firstName: formData.name.split(" ")[0] || formData.name,
        lastName: formData.name.split(" ").slice(1).join(" ") || "",
        email: formData.email, 
        projectDetails: `Phone: ${formData.phone}\n\nRequirement Details:\n${formData.requirement}`,
        submittedAt: new Date().toISOString(),
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      })

      console.log("Response status:", response.status)
      const result = await response.json()
      console.log("Response data:", result)

      if (response.ok && result.success) {
        setSubmitStatus("success")
        resetForm()
      } else {
        console.error("API Error:", result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Network Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      requirement: "",
    })
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  // Form validation
  const isFormValid = formData.name && formData.email && formData.phone && formData.requirement

  return (
    <section className="relative py-5 bg-gradient-to-br from-orange-50 via-orange-25 to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-orange-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-orange-500 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-amber-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 border-2 border-orange-400 rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-[5rem] relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-6">
              
              <div className="text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Tell Us What Are You Looking For?</h2>
                <p className="text-gray-700 text-lg">Get custom packaging solutions tailored to your business needs</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info Row */}
              <div className="grid md:grid-cols-3 gap-4 text-lg">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-800 font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Requirement Textarea */}
              <div>
                <label htmlFor="requirement" className="block text-gray-800 font-medium mb-2 text-lg">
                  Describe Your Requirement *
                </label>
                <Textarea
                  id="requirement"
                  name="requirement"
                  placeholder="Kindly describe your packaging requirements in detail - product type, quantity, size, design preferences, etc."
                  value={formData.requirement}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/90 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center">
                  <span className="mr-2">✅</span>
                  <div>
                    <strong>Success!</strong> Your inquiry has been submitted successfully. We&apos;ll get back to you soon.
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center">
                  <span className="mr-2">❌</span>
                  <div>
                    <strong>Error!</strong> Failed to submit your inquiry. Please try again or contact us directly.
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Enquiry...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <FaPaperPlane className="h-5 w-5" />
                      <span>Send Enquiry</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <FaPhone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">Call Us Directly</h3>
                  <p className="text-gray-700">+91 88055 19081</p>
                  <p className="text-gray-600 text-sm">Quick & Direct Support</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <FaEnvelope className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-700">adminallpack128@gmail.com</p>
                  <p className="text-gray-600 text-sm">Quick Response Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
