import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products, categories, navigation, footerNavigation } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-500 mb-4 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Updated every Sunday
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Discover well-designed,
            <br />
            carefully curated products
          </h1>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe and join 4,500+ readers for weekly emails featuring
            timeless, design-led products across home, work, and life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="name@email.com"
              className="flex-1 h-11"
            />
            <Button className="h-11 px-6 bg-black hover:bg-gray-800 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    index === 0
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {index === 1 && (
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  )}
                  {index === 2 && (
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                  )}
                  {index >= 3 && index <= 7 && (
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  )}
                  {category.label}
                </button>
              ))}
            </div>
            <button className="text-sm text-gray-600 hover:text-black whitespace-nowrap ml-4">
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                  {product.isStaffPick && (
                    <Badge className="absolute top-3 left-3 bg-amber-400 text-black hover:bg-amber-400 text-xs font-medium">
                      Staff Pick
                    </Badge>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">
                    {product.brand} · {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-gray-600">
                      ${product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Show More Button */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Button
            variant="outline"
            className="rounded-full px-8 h-11 border-gray-300 hover:bg-gray-50"
          >
            Show More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Logo and Subscribe */}
            <div className="col-span-2 lg:col-span-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black mb-4"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
              <div className="flex gap-2 mb-4">
                <Input
                  type="email"
                  placeholder="name@email.com"
                  className="h-9 text-sm"
                />
                <Button
                  size="sm"
                  className="h-9 bg-black hover:bg-gray-800 text-white"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Select links may be affiliate based. Prices listed are
                non-dynamic and may change. I back what I share, and only
                include products I use, trust or see real value in.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-3">
                Navigation
              </h4>
              <ul className="space-y-2">
                {footerNavigation.navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-3">Info</h4>
              <ul className="space-y-2">
                {footerNavigation.info.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-medium text-gray-900 mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                {footerNavigation.contact.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-xs text-gray-600 hover:text-black transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © 2025 Curated Supply. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made by{" "}
              <Link
                href="https://twitter.com"
                className="underline hover:text-black"
              >
                @justinstorment
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
