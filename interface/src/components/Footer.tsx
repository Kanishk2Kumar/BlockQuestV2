import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-md flex-wrap sm:py-0 py-3 max-sm:px-4">
      <div className="flex items-center gap-3 ml-12">
        <p className="flex items-center text-center">
          Built by{" "}
          <Link
            className="underline underline-offset-2 flex items-center"
            target="_blank"
            href="https://github.com/Kanishk2Kumar"
          >
            <span className="ml-1 font-saira">Team Optimus</span>
            <Image src="/images/Teamlogo.png" alt="Team Logo" height={25} width={25} className="ml-2" />
          </Link>
        </p>
      </div>
        <div className="gap-4 hidden md:flex mr-12">
          <FooterButtons />
          <Link href="https://www.buymeacoffee.com/" target="_blank">
          <Image
            src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=m3hu1&button_colour=9333EA&font_colour=FFFFFF&font_family=Inter&outline_colour=000000&coffee_colour=ffffff"
            alt="Buy Me A Coffee"
            width={171}
            height={1}
            unoptimized
          />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/sponsors/Kanishk2Kumar"
        target="_blank"
        className={buttonVariants({ variant: "outline" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor Us
      </Link>
    </>
  );
}