import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Trophy, 
  Calendar,
  MapPin,
  Clock,
  Star
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProfessionalProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const education = [
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Mumbai University",
      year: "2015-2018",
      grade: "First Class with Distinction",
      location: "Mumbai, India"
    },
    {
      degree: "Chartered Accountancy (CA)",
      institution: "Institute of Chartered Accountants of India (ICAI)",
      year: "2018-2021",
      grade: "All India Rank 45",
      location: "New Delhi, India"
    },
    {
      degree: "Master of Business Administration (MBA) - Finance",
      institution: "NMIMS University",
      year: "2021-2023",
      grade: "CGPA 9.2/10",
      location: "Mumbai, India"
    }
  ];

  const workExperience = [
    {
      position: "Senior Financial Consultant",
      company: "PwC India",
      duration: "2023 - Present",
      location: "Mumbai, India",
      responsibilities: [
        "Lead financial audits for Fortune 500 companies",
        "Provide strategic tax planning and compliance services",
        "Manage a team of 8 junior consultants",
        "Specialize in international taxation and transfer pricing"
      ]
    },
    {
      position: "Tax Associate",
      company: "Deloitte Haskins & Sells",
      duration: "2021 - 2023",
      location: "Mumbai, India",
      responsibilities: [
        "Prepared and reviewed corporate tax returns",
        "Assisted in GST compliance and advisory services",
        "Conducted due diligence for M&A transactions",
        "Provided training to new recruits"
      ]
    },
    {
      position: "Audit Intern",
      company: "KPMG India",
      duration: "2020 - 2021",
      location: "Mumbai, India",
      responsibilities: [
        "Performed substantive audit procedures",
        "Assisted in internal control testing",
        "Prepared working papers and audit documentation",
        "Gained exposure to various industry sectors"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Information Systems Auditor (CISA)",
      issuer: "ISACA",
      year: "2023",
      credentialId: "CISA-789456123"
    },
    {
      title: "Certified Fraud Examiner (CFE)",
      issuer: "Association of Certified Fraud Examiners",
      year: "2022",
      credentialId: "CFE-456789321"
    },
    {
      title: "Financial Risk Manager (FRM)",
      issuer: "Global Association of Risk Professionals",
      year: "2022",
      credentialId: "FRM-987654321"
    },
    {
      title: "Certified Public Accountant (CPA)",
      issuer: "American Institute of CPAs",
      year: "2021",
      credentialId: "CPA-123456789"
    }
  ];

  const milestones = [
    {
      year: "2024",
      achievement: "Established Independent Practice",
      description: "Launched CA Professional with 50+ satisfied clients"
    },
    {
      year: "2023",
      achievement: "Senior Consultant Promotion",
      description: "Promoted to Senior Financial Consultant at PwC India"
    },
    {
      year: "2022",
      achievement: "Multiple Certifications",
      description: "Achieved CFE and FRM certifications in the same year"
    },
    {
      year: "2021",
      achievement: "CA Final - All India Rank 45",
      description: "Cleared CA Final examination with distinction"
    },
    {
      year: "2020",
      achievement: "Best Intern Award",
      description: "Recognized as Best Audit Intern at KPMG India"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="profile" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Education, Experience &
            <span className="text-primary block">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my educational background, professional experience, 
            certifications, and key milestones in my journey as a Chartered Accountant.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold">Education</h3>
            </div>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                        <p className="text-lg text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {edu.grade}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold">Work Experience</h3>
            </div>
          </motion.div>

          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{exp.position}</h4>
                        <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications and Milestones Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-bold">Certifications</h3>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-elevated hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                          <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{cert.year}</Badge>
                            <span className="text-xs text-muted-foreground">
                              ID: {cert.credentialId}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-bold">Key Milestones</h3>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-elevated hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary text-sm">{milestone.year}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{milestone.achievement}</h4>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;