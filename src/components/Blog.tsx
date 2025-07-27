import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Trophy,
  MapPin,
  Star,
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      id: 1,
      title: "Bogus Tax Refund Claims on the Radar: I‑T Dept Issues Notices",
      excerpt:
        "A detailed analysis of how the I‑T Department is uncovering fraudulent refund claims aided by AI and field intel, and what taxpayers should avoid.",
      image: "⚠️",
      date: "2025-07-16",
      readTime: "6 min read",
      tags: ["Tax Scams", "Income Tax", "Refund Fraud"],
      featured: true,
      link: "https://cleartax.in/s/bogus-income-tax-refund-claims",
    },
    {
      id: 2,
      title: "Which ITR Form Should You File for AY 2025‑26?",
      excerpt:
        "A practical guide to choosing the correct ITR form (ITR‑1 to ITR‑4) based on income sources, category, and new tax regime rules.",
      image: "📑",
      date: "2025‑07‑01",
      readTime: "5 min read",
      tags: ["ITR Guide", "Tax Filing", "Regime Choice"],
      featured: false,
      link: "https://cleartax.in/s/which-itr-to-file",
    },
    {
      id: 3,
      title: "GST Advisory & Advisory Releases: Latest Updates",
      excerpt:
        "An overview of new GST advisory releases from the official GST portal, including key compliance and regulatory guidance for businesses.",
      image: "🧾",
      date: "2025‑07‑27",
      readTime: "4 min read",
      tags: ["GST", "Regulatory Updates", "Business Compliance"],
      featured: false,
      link: "https://services.gst.gov.in/services/advisoryandreleases/read/618",
    },
  ];

  const education = [
    {
      degree: "CA Intermediate",
      institution: "The Institute of Chartered Accountants of India",
      year: "May 2024",
      grade: "335/600 (55.83%)",
      location: "Guntur,India",
      remarks: "Exemptions in Costing, Advanced Accounting, and Taxation",
    },
    {
      degree: "CMA Intermediate",
      institution: "The Institute of Cost Accountants of India",
      year: "Dec 2023",
      grade: "440/800 (55%) AIR 41",
      location: "Guntur,India",
      remarks:
        "Exemptions in Financial Accounting, Cost Accounting, and Indirect Taxation",
    },
    {
      degree: "CA Foundation",
      institution: "The Institute of Chartered Accountants of India",
      year: "Dec 2021",
      grade: "234/400 (58.5%)",
      location: "Guntur,India",
    },
    {
      degree: "CMA Foundation",
      institution: "The Institute of Cost Accountants of India",
      year: "Dec 2021",
      grade: "314/400 (78.5%)",
      location: "Guntur,India",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Acharya Nagarjuna University",
      year: "2021–2024",
      grade: "2558/3400 (75.2%)",
      location: "Guntur, India",
    },
    {
      degree: "Class 12th (Intermediate)",
      institution: "Uma Maheswara College",
      year: "2021",
      grade: "920/1000 (92%)",
      location: "Ongole,India",
    },
  ];

const workExperience = [
  {
    position: "Article Assistant",
    company: "Varma & Varma Chartered Accountants",
    duration: "2024 - 2025",
    location: "Bangalore, India",
    responsibilities: [
      "Conducted detailed vouching and verification of sales, purchases, operating expenses, and capital expenditures (PPE) ensuring accurate accounting and compliance with relevant standards.",
      "Performed reconciliation of books of accounts with bank statements, identifying and rectifying discrepancies effectively.",
      "Examined statutory deductions and compliances under the Income Tax Act, 1961, GST Act, 2017, and other employee benefit regulations.",
      "Reviewed and verified PPE registers, depreciation workings, and related supporting documentation.",
      "Assessed internal controls relevant to financial reporting to ensure the integrity and reliability of financial statements.",
      "Prepared comprehensive documentation of audit procedures and findings in line with regulatory and audit standards.",
      "Undertook project work analyzing trends in income tax collection across sectors from a macro-level compliance behavior perspective.",
      "Developed key professional skills including attention to detail, critical thinking, and adaptability through addressing real-world audit challenges."
    ]
  }
];


  const certifications = [
    {
      title: "ICITSS - Information Technology Course",
      issuer: "The Institute of Chartered Accountants of India (ICAI)",
      year: "2023",
      remarks: "Completed 90+ hours of training as per ICAI requirements",
    },
    {
      title: "ICITSS - Orientation Course",
      issuer: "The Institute of Chartered Accountants of India (ICAI)",
      year: "2023",
    },
    {
      title: "Tally Prime",
      issuer: "Brilliant Computers, Ongole, Andhra Pradesh",
      year: "2021",
    },
    {
      title: "Advanced Tally Prime",
      issuer: "Brilliant Computers, Ongole, Andhra Pradesh",
      year: "2021",
    },
  ];

  const milestones = [
    {
      year: "2024",
      achievement: "Multiple Certifications",
      description: "Achieved Tally and Advance Tally in the same year",
    },
    {
      year: "2024",
      achievement: "CMA Intermediate - All India Rank 41",
      description:
        "Secured 41st rank at the national level in CMA Intermediate examination",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="blog" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Professional Journey & Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Education, Experience &
            <span className="text-primary block">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my professional journey, educational background, and latest
            financial insights to understand the expertise I bring to your
            financial needs.
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

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-primary font-medium">
                          {edu.institution}
                        </p>
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
                    <Badge
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
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
                        <h4 className="text-xl font-semibold mb-2">
                          {exp.position}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-2">
                          {exp.company}
                        </p>
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
                            <li
                              key={respIndex}
                              className="flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                {resp}
                              </span>
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
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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
                <h3 className="text-3xl font-serif font-bold">
                  Certifications
                </h3>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-elevated hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {cert.issuer}
                          </p>
                          <Badge variant="outline">{cert.year}</Badge>
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
                <h3 className="text-3xl font-serif font-bold">
                  Key Milestones
                </h3>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-elevated hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary text-sm">
                            {milestone.year}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">
                            {milestone.achievement}
                          </h4>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Latest Insights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold">Latest Insights</h3>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="card-elevated h-full overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl">
                    {post.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {post.featured && (
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
                          Featured
                        </Badge>
                      )}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
