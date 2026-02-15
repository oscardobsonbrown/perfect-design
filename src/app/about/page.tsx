import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { navigation, footerNavigation } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {}
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

            {}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.label === "About"
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {}
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

      {}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Built for those who
            <br />
            care what they
            <br />
            bring into their lives
          </h1>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              This website exists because the world doesn't need more stuff,
              it needs better stuff.
            </p>

            <p>
              We're surrounded by things built fast, priced to move, and
              meant to be replaced. Yet there's a quiet kind of luxury in
              choosing well.
            </p>

            <p>
              Everything here is chosen for its quality and utility.
            </p>

            <p>
              Tools and objects that make life simpler, not busier. Materials
              that improve with time. Products that feel as considered as the
              spaces they inhabit.
            </p>

            <p>
              It's not about how things look, but how they endure. Not status
              objects, but standards. Not what they do, but how well it's done.
            </p>

            <p>
              Design that respects your time and attention.
            </p>

            <p>
              Welcome to Curated Supply, a place for those who believe that
              what you own, should matter.
            </p>
          </div>

          {}
          <div className="flex items-center gap-3 mt-10 pt-10 border-t">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Justin"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900">Justin</p>
              <p className="text-sm text-gray-500">Designer & Curator</p>
            </div>
          </div>
        </section>

        {}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact</h2>
          <p className="text-gray-600 mb-6">
            Have a question or product worth sharing? I read everything.
          </p>

          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your name"
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Your email"
              className="h-12"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none resize-none"
            />
            <Button className="w-full h-12 bg-black hover:bg-gray-800 text-white">
              Send message
            </Button>
          </form>
        </section>
      </main>

      {}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {}
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

            {}
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

            {}
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

            {}
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

          {}
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
