import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  LayoutDashboard,
  Database,
  ShieldCheck,
} from "lucide-react";

const techStack = [
  {
    title: "Next.js (App Router)",
    description:
      "Used for building the frontend with modern routing, server components, and optimized performance.",
    icon: LayoutDashboard,
  },
  {
    title: "shadcn/ui + Tailwind CSS",
    description:
      "Provides accessible UI components and utility-first styling with full customization control.",
    icon: Code2,
  },
  {
    title: "Express.js API",
    description:
      "Handles backend logic and serves product data through RESTful endpoints.",
    icon: Database,
  },
  {
    title: "Authentication & Security",
    description:
      "Cookie-based mock authentication with protected routes for secure access control.",
    icon: ShieldCheck,
  },
];

export default function TechStackSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-muted-foreground">
            ShopX is built using modern and reliable technologies commonly used
            in production-ready web applications.
          </p>
        </div>

        {/* Stack Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <Card key={tech.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
