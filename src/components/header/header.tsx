import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-3 z-50 h-12 justify-center px-2 md:flex md:px-4">
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-2xl px-5 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <Link href={"/"}>
            <h1 className="text-xl font-bold">Wault</h1>
          </Link>
          {/* <Link href={"/"} className="text-[#878787] transition-colors delay-100 ease-in hover:text-white">
            Features
          </Link>
          <Link href={"/"} className="text-[#878787] transition-colors delay-100 ease-in hover:text-white">
            Pricing
          </Link>
          <Link href={"/"} className="text-[#878787] transition-colors delay-100 ease-in hover:text-white">
            Dashboard
          </Link> */}
        </div>
        <div className="space-x-4">
          <SignInButton>
            <Button className="rounded-full p-5 font-semibold" variant="ghost">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="items-center rounded-full px-4 font-semibold">
              Get Started <ChevronRightIcon className="ml-1 size-3" />
            </Button>
          </SignUpButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
