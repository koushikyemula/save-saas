import { cn } from "@/lib/utils";
import GridPattern from "@/components/gradients/animated-grid-pattern";
import { BlurryCircle } from "@/components/gradients/blurry-circle";
import { LandingHero } from "@/components/hero";

export default function Home() {
  return (
    <section className="relative mt-4 flex h-full flex-col px-8">
      <div className="flex h-full flex-col items-center justify-between text-center">
        <LandingHero />
      </div>
    </section>
  );
}
