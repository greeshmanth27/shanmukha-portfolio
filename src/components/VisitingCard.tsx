import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Download,
  QrCode
} from "lucide-react";

const VisitingCard = () => {
 const handleDownloadImage = () => {
  const link = document.createElement("a");
  link.href = "/visiting.jpg"; // Your image path in /public
  link.download = "Shanmukha_CA_Profile.jpg";
  link.click();
};

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch for professional financial services and expert consultation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="card-elevated bg-gradient-to-br from-background to-card border-primary/20 overflow-hidden">
            <div className="relative p-8 lg:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gold to-primary rounded-full blur-3xl"></div>
              </div>

              <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                {/* Profile Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-xl">
                      <img src="/Ghibli.jpg" alt="Profile" className=" w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold mb-2">Shanmukha Kanamarlapudi</h3>
                      <p className="text-xl text-primary font-medium mb-2">
                        CA & CMA Finalist | B.Com Graduate
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          100+ Happy Clients
                        </Badge>
                        <Badge variant="secondary" className="bg-gold/10 text-gold-dark">
                          1+ Years Experience
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">+91 6305023803</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">Shanmukha23803@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Office</p>
                        <p className="font-medium">Hyderabad, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-primary" />
                      </div> */}
                      {/* <div>
                        <p className="text-sm text-muted-foreground">Website</p>
                        <p className="font-medium">www.caprofessional.com</p>
                      </div> */}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Specializations</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Tax Planning", 
                        "GST Compliance",
                        "Financial Advisory",
                        
                      ].map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* QR Code & Actions */}
                <div className="text-center space-y-6">
                  {/* <div className="w-40 h-40 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-primary/30">
                    <div className="text-center">
                      <QrCode className="w-16 h-16 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">Scan to Connect</p>
                    </div>
                  </div> */}
                  <div className="w-40 h-40 mx-auto flex flex-col items-center justify-center space-y-2">
  <img
    src="/QrCode.jpg" // Replace with your QR image path
    alt="QR Code"
    className="w-32 h-32 object-contain rounded-md shadow-md border border-primary/20"
  />
  <p className="text-xs text-muted-foreground text-center">Scan to Connect</p>
</div>





                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownloadImage}
                      className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Visiting Card
                    </motion.button>

<div className="flex gap-2">
  <motion.a
    href="https://www.linkedin.com/in/shanmukha-kanamarlapudi-75064a320" // Replace with actual LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
  >
    <Linkedin className="w-4 h-4" />
    LinkedIn
  </motion.a>

  <motion.a
    href="https://wa.me/+916305023803"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
  >
    <Phone className="w-4 h-4" />
    WhatsApp
  </motion.a>
</div>

                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitingCard;