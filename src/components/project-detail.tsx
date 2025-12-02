"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  Folder,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Project, projects } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className={`absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl -translate-y-1/2`}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="ghost" asChild className="mb-8 -ml-2">
              <Link href="/projects" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Category & Year */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                className={`bg-gradient-to-r ${project.color} text-white border-0`}
              >
                {project.category}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </Badge>
              {project.featured && (
                <Badge variant="secondary">⭐ Featured Project</Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              {project.title}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="w-4 h-4" />
                <span>{project.category}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <Button
                  asChild
                  className={`rounded-full bg-gradient-to-r ${project.color} hover:opacity-90`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="rounded-full">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4"
      >
        <div
          className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} p-1`}
        >
          <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
            <div className="text-center p-8">
              <Folder className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">Project Preview</p>
              <p className="text-sm text-muted-foreground/70">
                Screenshot coming soon
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* About */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  About the Project
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-4 flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                          <span>{challenge}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Tech Stack */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Info */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">Project Info</h3>
                  <Separator />
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Role</span>
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year</span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-8">Related Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/projects/${relatedProject.slug}`}>
                      <Card className="h-full card-hover overflow-hidden group">
                        <div
                          className={`h-32 bg-gradient-to-br ${relatedProject.color} p-4 flex items-end`}
                        >
                          <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                            {relatedProject.category}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {relatedProject.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {relatedProject.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-primary to-accent"
              >
                <Link href="/#contact">
                  Get in Touch
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
