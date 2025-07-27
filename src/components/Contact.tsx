"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  X,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    services: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      services: formData.services.join(", "),
    };

    emailjs
      .send("service_qwcz3lq", "template_i1idecj", payload, "UXw33D1KutaXyXxQn")
      .then(() => {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          services: [],
        });
      })
      .catch(() => {
        toast({
          title: "Failed to Send Message",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  // Consultation Modal Logic
  const [showModal, setShowModal] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [isBooking, setIsBooking] = useState(false);

  const handleConsultInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setConsultForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);

    emailjs
      .send(
        "service_qwcz3lq", // Use your EmailJS service ID
        "template_9ndlnkm", // Create a separate template for consultation
        consultForm,
        "UXw33D1KutaXyXxQn" // Your public key
      )
      .then(() => {
        toast({
          title: "Consultation Booked!",
          description: "You'll be contacted soon with confirmation.",
        });
        setConsultForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
        });
        setShowModal(false);
      })
      .catch(() =>
        toast({
          title: "Booking Failed",
          description: "Please try again later.",
          variant: "destructive",
        })
      )
      .finally(() => setIsBooking(false));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+91 6305023803",
      description: "Mon to Sat 9AM to 6PM",
    },
    {
      icon: Mail,
      title: "Email",
      info: "shanmukha23803@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Sat: 9:00 AM - 6:00 PM",
      description: "Sunday: 10:00 AM - 4:00 PM",
    },
  ];

  const services = [
    "Tax Filing & Planning",
    "GST Compliance",
    "Company Incorporation",
    "Financial Advisory",
    "Business Consulting",
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Start Your
            <span className="text-primary block">Financial Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your financial goals and how I can help you achieve
            them. Book a free consultation or reach out with any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} />
                  <Input name="email" type="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} />
                </div>

                {/* Phone & Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                  <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} />
                </div>

                {/* Message */}
                <Textarea name="message" required rows={5} placeholder="Your message..." value={formData.message} onChange={handleInputChange} />

                {/* Services */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {services.map((service, idx) => (
                    <label key={idx} className="flex items-center space-x-2 text-sm">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Sidebar Info + Modal Trigger */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-xl font-serif font-bold mb-6">
                Contact Information
              </h3>
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">
                        {item.title}
                      </h4>
                      <p className="font-medium">{item.info}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-serif font-bold mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute free consultation to discuss your financial needs.
              </p>
              <Button onClick={() => setShowModal(true)} className="w-full">Schedule Call</Button>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative">
            <button className="absolute top-3 right-3" onClick={() => setShowModal(false)}>
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-4">Book Consultation</h3>
            <form onSubmit={handleConsultSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                required
                value={consultForm.name}
                onChange={handleConsultInputChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={consultForm.email}
                onChange={handleConsultInputChange}
              />
              <Input
                name="phone"
                type="number"
                placeholder="Phone Number"
                required
                value={consultForm.phone}
                onChange={handleConsultInputChange}
              />
              <Input
                name="date"
                type="date"
                required
                value={consultForm.date}
                onChange={handleConsultInputChange}
              />
              <Input
                name="time"
                type="time"
                required
                value={consultForm.time}
                onChange={handleConsultInputChange}
              />
              <Button type="submit" className="w-full" disabled={isBooking}>
                {isBooking ? "Booking..." : "Book Now"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
