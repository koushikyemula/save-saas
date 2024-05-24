import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import ShimmerButton from "./magicui/shimmer-button";
import { Button } from "./ui/button";

export const LandingHero = () => {
  const { userId } = auth();
  return (
    <div className="mt-24 flex h-full flex-col items-center justify-center gap-y-6">
      <h2 className="text-clip text-6xl font-extrabold">Save Literally Anything!</h2>
      <p className="text-pretty text-2xl text-[#707070]">
        Your minimalistic wault for saving literally anything
      </p>
      <Link href="/">
        {userId ? (
          // <Button
          //   variant="outline"
          //   className="mask-effect hover:mask-effect h-12 rounded-full border-2 border-primary px-6 text-center font-semibold">
          //   Get started
          // </Button>
          <ShimmerButton>Get started</ShimmerButton>
        ) : (
          // <Button
          //   variant="outline"
          //   className="mask-effect hover:mask-effect h-12 rounded-full border-2 border-primary px-6 text-center font-semibold">
          //   Dashboard
          // </Button>
          <ShimmerButton>Dashboard</ShimmerButton>
        )}
      </Link>
    </div>
  );
};
