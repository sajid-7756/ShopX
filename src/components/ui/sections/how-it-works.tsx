import { Card, CardContent } from "@/components/ui/card";
import { Search, LogIn, Eye, PlusCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Browse Products",
    description:
      "Explore a list of products available in ShopX without needing to log in.",
    icon: Search,
  },
  {
    step: "02",
    title: "Login Securely",
    description:
      "Sign in using mock authentication to access protected features.",
    icon: LogIn,
  },
  {
    step: "03",
    title: "View Item Details",
    description:
      "Click on any product to view full details including description and price.",
    icon: Eye,
  },
  {
    step: "04",
    title: "Add New Items",
    description:
      "Authenticated users can add new products using a protected form.",
    icon: PlusCircle,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Follow these simple steps to understand how users interact with
            ShopX.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step} className="relative">
                <CardContent className="pt-10">
                  {/* Step Number */}
                  <span className="absolute -top-4 left-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                    {step.step}
                  </span>

                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
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
