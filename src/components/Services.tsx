import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Building2,
  PieChart,
  Briefcase,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Calculator,
      title: "Tax Filing & Planning",
      description:
        "Comprehensive tax solutions for individuals and businesses. Minimize your tax liability while staying compliant.",
      features: [
        "Income Tax Returns",
        "Tax Planning",
        "Tax Advisory",
        "TDS Compliance",
      ],
    },
    // {
    //   icon: FileText,
    //   title: "Audit & Assurance",
    //   description: "Professional audit services ensuring accuracy, compliance, and transparency in your financial statements.",
    //   features: ["Statutory Audits", "Internal Audits", "Tax Audits", "Management Audits"]
    // },
    // {
    //   icon: TrendingUp,
    //   title: "Financial Advisory",
    //   description: "Strategic financial guidance to help your business grow and achieve long-term financial goals.",
    //   features: ["Financial Planning", "Investment Advisory", "Risk Management", "Cash Flow Analysis"]
    // },
    {
      icon: Shield,
      title: "GST Compliance",
      description:
        "End-to-end GST services from registration to filing returns and handling compliance issues.",
      features: [
        "GST Registration",
        "Return Filing",
        "GST Advisory",
        "GST TDS",
        "GST Reconciliation",
      ],
    },
    {
      icon: Briefcase, // or any other relevant icon like Building2 or PieChart
      title: "Business Setup & Consulting",
      description:
        "Comprehensive services for company incorporation and expert financial guidance to help businesses launch, grow, and succeed.",
      features: [
        "Company Registration",
        "Licensing & Compliance",
        "Financial Modeling",
        "Preparation of Financial Statements",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Comprehensive Financial
            <span className="text-primary block">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining academic rigor and hands-on training as a CA Finalist to
            deliver tailored tax and advisory services for sustainable growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="card-service h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-muted-foreground text-lg">
              Experience the difference with professional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Aspiring Chartered Accountant",
                description:
                  "CA Finalist delivering reliable and growth-focused financial solutions.",
              },

              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Always meeting deadlines and commitments",
              },
              {
                icon: Users,
                title: "Personal Attention",
                description: "Dedicated support for each client",
              },
              {
                icon: Shield,
                title: "Confidential",
                description: "Strict confidentiality and data security",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
