import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-block rounded-full border px-4 py-1 text-sm text-muted-foreground">
            Full-Stack Next.js Task
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover & Manage Products with{" "}
            <span className="text-primary">ShopX</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-muted-foreground">
            ShopX is a simple full-stack application built with Next.js and
            Express. Browse products, view details, and manage items securely
            with authentication.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/items">View Items</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/login">Login to Add Items</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
