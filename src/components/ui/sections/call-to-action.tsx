import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-background p-12 text-center shadow-sm">
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Explore ShopX?
          </h2>

          {/* Description */}
          <p className="mt-4 text-lg text-muted-foreground">
            Browse available products or log in to add and manage items using
            the secure authentication system.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/items">Explore Items</Link>
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
