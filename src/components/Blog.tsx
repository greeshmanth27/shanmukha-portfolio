// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// const Blog = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const blogPosts = [
//     {
//       id: 1,
//       title: "New Income Tax Slab Changes 2024: What You Need to Know",
//       excerpt: "Comprehensive guide to the latest income tax changes and how they affect your tax planning strategy for the upcoming financial year.",
//       image: "📊",
//       date: "2024-01-15",
//       readTime: "5 min read",
//       tags: ["Tax Planning", "Income Tax", "2024 Updates"],
//       featured: true
//     },
//     {
//       id: 2,
//       title: "GST Compliance: Best Practices for Small Businesses",
//       excerpt: "Essential GST compliance strategies to help small businesses navigate complex regulations and avoid common pitfalls.",
//       image: "🏢",
//       date: "2024-01-10",
//       readTime: "7 min read",
//       tags: ["GST", "Small Business", "Compliance"],
//       featured: false
//     },
//     {
//       id: 3,
//       title: "Investment Options for Tax Saving Under Section 80C",
//       excerpt: "Explore the best investment options available under Section 80C to maximize your tax savings while building wealth.",
//       image: "💰",
//       date: "2024-01-08",
//       readTime: "6 min read",
//       tags: ["Investment", "Tax Saving", "Section 80C"],
//       featured: false
//     },
//     {
//       id: 4,
//       title: "Digital Accounting: Transforming Financial Management",
//       excerpt: "How digital tools and cloud-based accounting systems are revolutionizing financial management for modern businesses.",
//       image: "💻",
//       date: "2024-01-05",
//       readTime: "4 min read",
//       tags: ["Digital", "Accounting", "Technology"],
//       featured: false
//     },
//     {
//       id: 5,
//       title: "Startup Funding: Financial Planning for New Ventures",
//       excerpt: "Essential financial planning strategies for startups to secure funding and manage cash flow effectively.",
//       image: "🚀",
//       date: "2024-01-03",
//       readTime: "8 min read",
//       tags: ["Startup", "Funding", "Financial Planning"],
//       featured: false
//     },
//     {
//       id: 6,
//       title: "Annual Compliance Calendar for Companies",
//       excerpt: "Complete compliance calendar with important dates and deadlines for companies to stay compliant throughout the year.",
//       image: "📅",
//       date: "2024-01-01",
//       readTime: "3 min read",
//       tags: ["Compliance", "Calendar", "Companies"],
//       featured: false
//     }
//   ];

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <section id="blog" className="py-20" ref={ref}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
//             <BookOpen className="w-4 h-4 mr-2" />
//             Latest Insights
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
//             Financial Insights &
//             <span className="text-primary block">Expert Articles</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Stay updated with the latest financial news, tax updates, and expert insights 
//             to make informed decisions for your business and personal finances.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid lg:grid-cols-3 gap-8"
//         >
//           {/* Featured Article */}
//           <motion.div variants={itemVariants} className="lg:col-span-2">
//             <Card className="card-elevated h-full overflow-hidden group cursor-pointer">
//               <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
//                 {blogPosts[0].image}
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center gap-4 mb-4">
//                   <Badge variant="secondary" className="bg-primary/10 text-primary">
//                     Featured
//                   </Badge>
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Calendar className="w-4 h-4 mr-1" />
//                     {new Date(blogPosts[0].date).toLocaleDateString()}
//                   </div>
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Clock className="w-4 h-4 mr-1" />
//                     {blogPosts[0].readTime}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
//                   {blogPosts[0].title}
//                 </h3>
//                 <p className="text-muted-foreground mb-6 leading-relaxed">
//                   {blogPosts[0].excerpt}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex flex-wrap gap-2">
//                     {blogPosts[0].tags.map((tag, index) => (
//                       <Badge key={index} variant="outline" className="text-xs">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                   <Button variant="ghost" className="group/btn">
//                     Read More
//                     <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           </motion.div>

//           {/* Recent Articles List */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h3 className="text-2xl font-serif font-bold mb-6">Recent Articles</h3>
//             {blogPosts.slice(1, 6).map((post, index) => (
//               <motion.div
//                 key={post.id}
//                 variants={itemVariants}
//                 className="group cursor-pointer"
//               >
//                 <Card className="p-4 hover:shadow-lg transition-all duration-300">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-2xl">
//                       {post.image}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center gap-2 mb-2">
//                         <div className="text-xs text-muted-foreground">
//                           {new Date(post.date).toLocaleDateString()}
//                         </div>
//                         <div className="text-xs text-muted-foreground">
//                           {post.readTime}
//                         </div>
//                       </div>
//                       <h4 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
//                         {post.title}
//                       </h4>
//                       <div className="flex flex-wrap gap-1">
//                         {post.tags.slice(0, 2).map((tag, tagIndex) => (
//                           <Badge key={tagIndex} variant="outline" className="text-xs">
//                             {tag}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Newsletter Signup */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-20"
//         >
//           <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
//             <div className="p-8 text-center">
//               <h3 className="text-2xl font-serif font-bold mb-4">Stay Updated</h3>
//               <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//                 Subscribe to our newsletter for the latest financial updates, tax news, 
//                 and expert insights delivered directly to your inbox.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//                 <Button className="btn-primary whitespace-nowrap">
//                   Subscribe Now
//                 </Button>
//               </div>
//               <p className="text-xs text-muted-foreground mt-4">
//                 No spam, unsubscribe at any time.
//               </p>
//             </div>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Blog;



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
  Star
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const blogPosts = [
    {
      id: 1,
      title: "New Income Tax Slab Changes 2024: What You Need to Know",
      excerpt: "Comprehensive guide to the latest income tax changes and how they affect your tax planning strategy for the upcoming financial year.",
      image: "📊",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Tax Planning", "Income Tax", "2024 Updates"],
      featured: true
    },
    {
      id: 2,
      title: "GST Compliance: Best Practices for Small Businesses",
      excerpt: "Essential GST compliance strategies to help small businesses navigate complex regulations and avoid common pitfalls.",
      image: "🏢",
      date: "2024-01-10",
      readTime: "7 min read",
      tags: ["GST", "Small Business"],
      featured: false
    },
    {
      id: 3,
      title: "Investment Options for Tax Saving Under Section 80C",
      excerpt: "Explore the best investment options available under Section 80C to maximize your tax savings while building wealth.",
      image: "💰",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Investment", "Tax Saving"],
      featured: false
    }
  ];

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
        "Manage a team of 8 junior consultants"
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
        "Conducted due diligence for M&A transactions"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certified Information Systems Auditor (CISA)",
      issuer: "ISACA",
      year: "2023"
    },
    {
      title: "Certified Fraud Examiner (CFE)",
      issuer: "Association of Certified Fraud Examiners",
      year: "2022"
    },
    {
      title: "Financial Risk Manager (FRM)",
      issuer: "Global Association of Risk Professionals",
      year: "2022"
    },
    {
      title: "Certified Public Accountant (CPA)",
      issuer: "American Institute of CPAs",
      year: "2021"
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
            Explore my professional journey, educational background, and latest financial insights 
            to understand the expertise I bring to your financial needs.
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
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
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
                <h3 className="text-3xl font-serif font-bold">Certifications</h3>
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
                          <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                          <p className="text-primary font-medium mb-2">{cert.issuer}</p>
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
                <h3 className="text-3xl font-serif font-bold">Key Milestones</h3>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-elevated hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
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
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
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
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest financial updates, tax news, 
                and expert insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Blog;