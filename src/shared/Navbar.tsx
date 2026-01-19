"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const links = (
    <div className="flex gap-5">
      <NavigationMenuLink asChild>
        <Link href="/login" className="font-medium">
          Login
        </Link>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <Link href="/login" className="font-medium">
          Sign Up
        </Link>
      </NavigationMenuLink>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          ShopX
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/items" className="font-medium">
                  Items
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>{links}</NavigationMenuItem>

            <NavigationMenuItem>
              <Button asChild size="sm">
                <Link href="/add-item">Add Item</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-6">
              <Link href="/items" className="text-lg">
                Items
              </Link>
              <Link href="/login" className="text-lg">
                Login
              </Link>
              <Button asChild>
                <Link href="/add-item">Add Item</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
