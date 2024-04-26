import Link from "next/link";

import { Button } from "./ui/button";

export const LandingHero = () => {
  return (
    <div className="mt-24 flex h-full flex-col items-center justify-center gap-y-6">
      <h2 className="text-clip text-6xl font-extrabold">Save Literally Anything!</h2>
      <p className="text-pretty text-2xl text-[#707070]">
        Your minimalistic wault for saving literally anything
      </p>
      <Link href="/">
        <Button variant="outline" className="h-12 rounded-full border border-primary px-6">
          Get started
        </Button>
      </Link>
    </div>
  );
};
