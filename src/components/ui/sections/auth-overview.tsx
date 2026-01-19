import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Cookie, ShieldCheck } from "lucide-react";

const authFeatures = [
  {
    title: "Mock Authentication",
    description:
      "ShopX uses a simple mock authentication system with a hardcoded email and password for demonstration purposes.",
    icon: Lock,
  },
  {
    title: "Cookie-Based Sessions",
    description:
      "Authentication state is stored securely in cookies to manage user sessions across protected routes.",
    icon: Cookie,
  },
  {
    title: "Protected Routes",
    description:
      "Only authenticated users can access restricted pages like adding new items.",
    icon: ShieldCheck,
  },
];

export default function AuthOverviewSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Authentication Overview
          </h2>
          <p className="mt-4 text-muted-foreground">
            ShopX demonstrates a simple authentication flow using cookies and
            protected routes.
          </p>
        </div>

        {/* Auth Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authFeatures.map((feature) => {
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
