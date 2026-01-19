import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const previewItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    price: "$99",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications easily.",
    price: "$149",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "Ergonomic design with high precision sensor.",
    price: "$59",
  },
];

export default function ItemPreviewSection() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Item Preview
          </h2>
          <p className="mt-4 text-muted-foreground">
            Take a quick look at some of the items available in ShopX.
          </p>
        </div>

        {/* Items Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-4 text-lg font-semibold">{item.price}</p>
              </CardContent>

              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/items">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/items">View All Items</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
