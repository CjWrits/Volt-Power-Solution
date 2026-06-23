"use client";

import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    alert("Namaste! Thank you for your inquiry. Our solar expert will call you shortly.");
  };

  return (
    <>
      <PageHeader 
        title="Connect with Our Experts"
        description="Ready to switch to solar? Have questions about the PM-Surya Ghar scheme? Our India-wide team is here to help."
        breadcrumb="Contact Us"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold text-solar-green-900 mb-8">Head Office</h2>
              
              <div className="space-y-6">
                <Card className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-solar-green-50 rounded-xl flex items-center justify-center text-solar-green-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Call Support</p>
                    <p className="text-lg font-bold text-solar-green-900">+91 9999999999</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-solar-green-50 rounded-xl flex items-center justify-center text-solar-green-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Email Us</p>
                    <p className="text-lg font-bold text-solar-green-900">contact@Volt-Power Solution.in</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-solar-green-50 rounded-xl flex items-center justify-center text-solar-green-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Our Location</p>
                    <p className="text-lg font-bold text-solar-green-900">Vip Boys Hostel, Atif Vihar, Lucknow 226028</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-solar-green-50 rounded-xl flex items-center justify-center text-solar-green-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Office Hours</p>
                    <p className="text-lg font-bold text-solar-green-900">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <Card className="p-8 md:p-12 shadow-2xl border-solar-green-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-solar-yellow-500 rounded-xl flex items-center justify-center text-solar-yellow-950">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-solar-green-900">Get a Free Consultation</h3>
                    <p className="text-gray-500">We respond to all Indian inquiries within 24 working hours.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      placeholder="e.g. Rahul Verma"
                      error={errors.name?.message}
                      {...register("name", { required: "Name is required" })}
                    />
                    <Input
                      label="Email Address"
                      placeholder="rahul@example.com"
                      type="email"
                      error={errors.email?.message}
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Mobile Number"
                      placeholder="+91 98765 43210"
                      error={errors.phone?.message}
                      {...register("phone", { 
                        required: "Mobile number is required",
                        pattern: { value: /^[6-9]\d{9}$/, message: "Invalid Indian mobile number" }
                      })}
                    />
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-solar-green-900 px-1">Sector</label>
                      <select 
                        {...register("service")}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-solar-green-500/50 focus:border-solar-green-500 transition-all text-solar-green-950"
                      >
                        <option value="residential">Residential (Home)</option>
                        <option value="commercial">Commercial (Office/Shop)</option>
                        <option value="industrial">Industrial (Factory)</option>
                        <option value="maintenance">Maintenance</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-solar-green-900 px-1">Describe Your Requirement</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your rooftop area or monthly bill..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-solar-green-500/50 focus:border-solar-green-500 transition-all resize-none text-solar-green-950"
                      {...register("message", { required: "Requirement description is required" })}
                    />
                    {errors.message && <p className="text-xs text-red-500 px-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Request Free Site Audit"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </Button>
                </form>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section className="pt-0">
        <FadeIn direction="up">
          <Card className="h-[400px] w-full bg-solar-green-50 flex flex-col items-center justify-center border-2 border-dashed border-solar-green-200">
            <MapPin size={48} className="text-solar-green-200 mb-4" />
            <p className="text-solar-green-400 font-bold uppercase tracking-widest">Office Map Placeholder</p>
            <p className="text-solar-green-300 text-sm mt-2">BKC, Mumbai, Maharashtra 400051</p>
          </Card>
        </FadeIn>
      </Section>
      <div className="h-24 md:h-32" />
    </>
  );
}
