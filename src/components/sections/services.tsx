"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Palette,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "Building responsive, high-performance, modern web applications using cutting-edge technologies like React.js, Next.js, and TypeScript.",
    features: [
      "Single Page Applications (SPA)",
      "Server-Side Rendering (SSR)",
      "Progressive Web Apps (PWA)",
      "API Integration & Development",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming design mockups into pixel-perfect, accessible, and responsive user interfaces with attention to detail.",
    features: [
      "Responsive Design",
      "Animation & Micro-interactions",
      "Cross-browser Compatibility",
      "Accessibility (WCAG)",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Lightbulb,
    title: "Frontend Consulting",
    description:
      "Expert guidance on frontend architecture, code review, performance optimization, and best practices for scalable applications.",
    features: [
      "Architecture Planning",
      "Code Review & Audit",
      "Performance Optimization",
      "Tech Stack Selection",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Leading and mentoring frontend teams, establishing coding standards, and ensuring project delivery with high quality.",
    features: [
      "Team Mentorship",
      "Code Standards & Guidelines",
      "Sprint Planning",
      "Technical Decision Making",
    ],
    gradient: "from-emerald-500 to-green-600",
  },
];

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Material UI",
  "Shadcn UI",
  "Chakra UI",
  "React Query",
  "REST APIs",
  "GraphQL",
  "Git",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Layers className="w-3 h-3 mr-1" />
            Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive frontend development services to bring your digital
            vision to life with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full card-hover overflow-hidden group">
                <CardContent className="p-0">
                  {/* Gradient header */}
                  <div
                    className={`bg-gradient-to-r ${service.gradient} p-6 relative overflow-hidden`}
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm skill-badge"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
          >
            <a href="#contact">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
