"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";

const education = [
  {
    degree: "Master in Frontend Web Development",
    institution: "Red and White Multimedia Institute, Surat",
    date: "December 2022",
    description:
      "Specialized in modern frontend technologies including React.js, advanced JavaScript, and responsive web design.",
  },
  {
    degree: "B.E. Mechanical",
    institution: "L.E. College, Morbi",
    date: "June 2018",
    description:
      "Bachelor of Engineering in Mechanical Engineering with strong foundation in analytical thinking and problem-solving.",
  },
];

const experience = [
  {
    role: "Team Leader",
    company: "Current Company",
    location: "Surat, India",
    date: "August 2022 - Present",
    description:
      "Leading a team of frontend developers, architecting scalable web applications, conducting code reviews, and mentoring junior developers.",
    highlights: [
      "Led team of 5+ developers",
      "Delivered 15+ major projects",
      "Improved team productivity by 40%",
    ],
  },
  {
    role: "React.js Developer",
    company: "Greeweb Solutions",
    location: "Surat, India",
    date: "2020 - August 2022",
    description:
      "Developed responsive web applications using React.js, implemented complex UI components, and optimized application performance.",
    highlights: [
      "Built 20+ web applications",
      "Reduced load time by 50%",
      "Integrated REST APIs",
    ],
  },
];

const skills = [
  { name: "React.js", level: 95, category: "framework" },
  { name: "Next.js", level: 90, category: "framework" },
  { name: "TypeScript", level: 88, category: "language" },
  { name: "JavaScript", level: 95, category: "language" },
  { name: "HTML5", level: 98, category: "language" },
  { name: "CSS3", level: 95, category: "language" },
  { name: "Tailwind CSS", level: 92, category: "styling" },
  { name: "Material UI", level: 88, category: "styling" },
  { name: "Shadcn UI", level: 90, category: "styling" },
  { name: "Chakra UI", level: 85, category: "styling" },
  { name: "Ant Design", level: 87, category: "styling" },
  { name: "React Query", level: 88, category: "library" },
  { name: "API Integration", level: 92, category: "library" },
];

const services = [
  {
    title: "Web App Development",
    description:
      "Building responsive, high-performance, modern web applications.",
  },
  {
    title: "Frontend Consulting",
    description: "Expert guidance on frontend architecture and best practices.",
  },
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

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Award className="w-3 h-3 mr-1" />
            About Me
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer with 4 years of experience,
            committed to creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="experience" className="gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="gap-2">
              <Code2 className="w-4 h-4" />
              <span className="hidden sm:inline">Skills</span>
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 ring-4 ring-background" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="secondary">{exp.role}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="card-hover h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {edu.date}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Skills grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="skill-badge"
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Services */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Professional Services
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="card-hover h-full">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                            <Code2 className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-semibold mb-2">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
