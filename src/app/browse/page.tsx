import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { browseCategories, brands, productLists, BrandLogos } from "@/lib/browse-data";
import { navigation, footerNavigation } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function BrowsePage() {
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
                  className={`text-sm font-medium transition-colors ${
                    item.label === "Browse"
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Browse</h1>

        {/* By Category Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">By category</h2>
            <Link
              href="/categories"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {browseCategories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-medium text-gray-900">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* By Brand Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">By brand</h2>
            <Link
              href="/brands"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((brand) => {
              const LogoComponent = BrandLogos[brand.logo];
              return (
                <Link
                  key={brand.id}
                  href={`/brand/${brand.id}`}
                  className="group block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square flex items-center justify-center mb-4">
                    {LogoComponent && (
                      <LogoComponent className="w-24 h-24 text-black" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{brand.name}</span>
                    <span className="text-sm text-gray-500">{brand.count}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* By List Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">By list</h2>
            <Link
              href="/lists"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productLists.map((list) => (
              <Link
                key={list.id}
                href={`/list/${list.id}`}
                className="group block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-2 gap-1 p-2">
                  {list.images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded overflow-hidden">
                      <Image
                        src={image}
                        alt={`${list.name} item ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="px-4 pb-4 flex items-center justify-between">
                  <span className="font-medium text-gray-900">{list.name}</span>
                  <span className="text-sm text-gray-500">{list.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

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
