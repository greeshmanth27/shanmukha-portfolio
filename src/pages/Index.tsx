import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProfessionalProfile from "@/components/ProfessionalProfile";
import VisitingCard from "@/components/VisitingCard";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      {/* <ProfessionalProfile /> */}
      <Blog />
      <VisitingCard />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4">Shanmukha Kanamarlapudi</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                   CA & CMA Finalist offering personalized, transparent, and client-focused tax and compliance services. From GST and ITR filing to TDS, PF, PT, and digital signature assistance — get timely, accurate, and affordable solutions you can trust.
              </p>
              {/* <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  📧
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  📱
                </div>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  💼
                </div>
              </div> */}
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Tax Filing</li>
                <li className="hover:text-primary cursor-pointer transition-colors">GST Compliance</li>
                </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+91 6305023803</li>
                <li>shanmukha23803@gmail.com</li>
                <li>Hyderabad, India</li>
                <li>Mon-Sat 9AM-6PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; Designed with care for financial excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;