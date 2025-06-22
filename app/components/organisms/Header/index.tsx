import { Github, Linkedin, Menu, Mountain } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

const navItems = [
  "About",
  "Work Experience",
  "Education",
  "Licenses & Certifications",
  "Skills",
  "Projects",
  "test",
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#363636] px-4 md:px-10 py-3 sticky top-0 bg-[#1a1a1a] z-10">
      <div className="flex items-center gap-4">
        <Mountain className="h-6 w-6" />
        <h1 className="text-lg font-bold">Portfolio</h1>
      </div>
      <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-6 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .replace(/ & /g, "-")
                .replace(/ /g, "-")}`}
              className="text-sm font-medium hover:underline"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#1a1a1a] text-white border-l-[#363636]"
          >
            <nav className="grid gap-6 text-lg font-medium mt-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}`}
                  className="hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex gap-2 mt-6">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
