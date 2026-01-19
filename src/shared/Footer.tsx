import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">ShopX</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A simple product listing and management application built with
              Next.js and shadcn/ui.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:underline">
                  Items
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/add-item" className="hover:underline">
                  Add Item
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Tech Stack</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Next.js (App Router)</li>
              <li>shadcn/ui</li>
              <li>Tailwind CSS</li>
              <li>Express.js API</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShopX. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for assessment purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
