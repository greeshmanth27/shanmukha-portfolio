import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
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
      tags: ["GST", "Small Business", "Compliance"],
      featured: false
    },
    {
      id: 3,
      title: "Investment Options for Tax Saving Under Section 80C",
      excerpt: "Explore the best investment options available under Section 80C to maximize your tax savings while building wealth.",
      image: "💰",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Investment", "Tax Saving", "Section 80C"],
      featured: false
    },
    {
      id: 4,
      title: "Digital Accounting: Transforming Financial Management",
      excerpt: "How digital tools and cloud-based accounting systems are revolutionizing financial management for modern businesses.",
      image: "💻",
      date: "2024-01-05",
      readTime: "4 min read",
      tags: ["Digital", "Accounting", "Technology"],
      featured: false
    },
    {
      id: 5,
      title: "Startup Funding: Financial Planning for New Ventures",
      excerpt: "Essential financial planning strategies for startups to secure funding and manage cash flow effectively.",
      image: "🚀",
      date: "2024-01-03",
      readTime: "8 min read",
      tags: ["Startup", "Funding", "Financial Planning"],
      featured: false
    },
    {
      id: 6,
      title: "Annual Compliance Calendar for Companies",
      excerpt: "Complete compliance calendar with important dates and deadlines for companies to stay compliant throughout the year.",
      image: "📅",
      date: "2024-01-01",
      readTime: "3 min read",
      tags: ["Compliance", "Calendar", "Companies"],
      featured: false
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
            Latest Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Financial Insights &
            <span className="text-primary block">Expert Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest financial news, tax updates, and expert insights 
            to make informed decisions for your business and personal finances.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Featured Article */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="card-elevated h-full overflow-hidden group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                {blogPosts[0].image}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {blogPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recent Articles List */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-serif font-bold mb-6">Recent Articles</h3>
            {blogPosts.slice(1, 6).map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-2xl">
                      {post.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {post.readTime}
                        </div>
                      </div>
                      <h4 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="p-8 text-center">
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
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;