"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Ui/card";
import { Input } from "./Ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./Ui/textarea";
import { Button } from "./Ui/button";
import { Mail } from "lucide-react";
import { sendContactForm } from "../Components/lib/api";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectDetails: string;
  submittedAt: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectDetails: "",
    submittedAt: "",
  });
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

    const isFormValid = formData.firstName && formData.lastName && formData.email && formData.projectDetails
 const [isSubmitting, setIsSubmitting] = useState(false)
 
  const sendViaEmail = async () => {
    setIsSubmitting(true);
    // try {
    //   // This would typically call your email service API
    //   const response = await fetch('http://localhost:3001 /api/send-email', {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setSubmitStatus("success");
    //     resetForm();
    //   } else {
    //     setSubmitStatus("error");
    //   }
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {
    //   setSubmitStatus("error");
    // } finally {
    //   setIsSubmitting(false);
    // }
      sendContactForm(formData).then(response => {
  console.log("Email sent:", response);
}).catch(err => {
  console.error("Error sending email:", err.message);
});

  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectDetails: "",
      submittedAt: "",
    })
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }
  
  return (
    <div className="min-h-screen bg-slate-800 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Original Form Design */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-xl">
              Tell me about your packaging design requirements and I&apos;ll get
              back to you within 24 hours.
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="bg-white borde r-0 rounded-lg text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-300">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="bg-white border-0 rounded-lg text-black"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white border-0 rounded-lg text-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-300">
                Company
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="bg-white border-0 rounded-lg text-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectDetails" className="text-slate-300">
                Project Details
              </Label>
              <Textarea
                id="projectDetails"
                value={formData.projectDetails}
                onChange={(e) =>
                  handleInputChange("projectDetails", e.target.value)
                }
                className="bg-white border-0 rounded-lg min-h-[120px] text-black"
                placeholder="Tell us about your packaging design needs..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-600 text-white p-3 rounded-lg">
                ✅ Message sent successfully! We&apos;ll get back to you within
                24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-600 text-white p-3 rounded-lg">
                ❌ Failed to send message. Please try again.
              </div>
            )}
          </CardContent>
        </Card>
        <Button
          onClick={sendViaEmail}
          disabled={!isFormValid || isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700"
        >
          <Mail className="w-4 h-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send via Email"}
        </Button>
      </div>
    </div>
  );
}
