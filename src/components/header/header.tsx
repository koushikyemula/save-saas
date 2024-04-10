import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { FramerLogoIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-4 z-50 mt-4 h-12 justify-center px-2 md:flex md:px-4">
      <nav className="flex w-3/5 max-w-6xl items-center justify-between rounded-2xl border border-border bg-[#FDFDFC]/70 p-3 px-4 backdrop-blur-xl dark:bg-[#121212]">
        <div className="flex items-center gap-8">
          <FramerLogoIcon />
          <Link href={"/"} className="text-[#878787] transition-colors delay-100 ease-in hover:text-white">
            Pricing
          </Link>
          <Link href={"/"} className="text-[#878787] transition-colors delay-100 ease-in hover:text-white">
            Dashboard
          </Link>
        </div>
        <div className="space-x-4">
          <SignInButton>
            <Button variant="ghost">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="outline" className="border border-primary">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
