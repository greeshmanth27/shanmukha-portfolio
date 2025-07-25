import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again or contact directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+91 98765 43210",
      description: "Mon to Fri 9AM to 6PM"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@caprofessional.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      info: "123 Business District, Mumbai",
      description: "Available for in-person consultations"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Saturday: 10:00 AM - 4:00 PM"
    }
  ];

  const services = [
    "Tax Filing & Planning",
    "GST Compliance",
    "Company Incorporation",
    "Financial Advisory",
    "Audit & Assurance",
    "Business Consulting"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
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
            Let's discuss your financial goals and how I can help you achieve them. 
            Book a free consultation or reach out with any questions.
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
              <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your requirements, financial goals, or any questions you have..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Services you're interested in:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-border" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary h-12 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h3 className="text-xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          {item.title}
                        </h4>
                        <p className="font-medium">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-serif font-bold mb-4">Why Choose Me?</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: "10+ years of professional experience" },
                  { icon: CheckCircle, text: "500+ satisfied clients" },
                  { icon: CheckCircle, text: "Personalized financial solutions" },
                  { icon: CheckCircle, text: "Timely and reliable service" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-serif font-bold mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a 30-minute free consultation to discuss your financial needs.
                </p>
                <Button className="w-full btn-secondary">
                  Schedule Call
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;