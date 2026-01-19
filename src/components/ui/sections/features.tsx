import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Package, PlusCircle, Server } from "lucide-react";

const features = [
  {
    title: "Product Listing",
    description:
      "Browse a list of products fetched from an Express.js API with clean and responsive UI.",
    icon: Package,
  },
  {
    title: "Authentication",
    description:
      "Secure mock authentication using cookies with protected routes for authorized users.",
    icon: ShieldCheck,
  },
  {
    title: "Add New Items",
    description:
      "Authenticated users can add new products using a protected form and store data via API.",
    icon: PlusCircle,
  },
  {
    title: "Backend Integration",
    description:
      "RESTful API built with Express.js to manage product data efficiently.",
    icon: Server,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Core Features
          </h2>
          <p className="mt-4 text-muted-foreground">
            ShopX provides essential features to demonstrate a full-stack
            Next.js application with authentication and API integration.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
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
