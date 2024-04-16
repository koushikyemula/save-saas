import { BlurryCircle } from "@/components/gradients/blurry-circle";
import { LandingHero } from "@/components/hero";

export default function Home() {
  return (
    <section className="relative mt-4 flex h-full flex-col px-8">
      <BlurryCircle className="absolute right-10 top-[90%] -z-10 hidden bg-[#F59F95]/30 dark:bg-[#F59F95]/10 md:block" />
      <BlurryCircle className="absolute left-10 top-[90%] -z-10 hidden bg-[#3633D0]/10 dark:bg-[#3633D0]/10 md:block" />
      <div className="flex h-full flex-col items-center justify-between text-center">
        <LandingHero />
      </div>
      <BlurryCircle className="absolute -top-2 right-[320px]  hidden bg-[#FFECBB] dark:bg-[#FFECBB]/40 md:block" />
      <BlurryCircle className="absolute -bottom-6 left-6 hidden bg-[#FFECBB]/50 dark:bg-[#FFECBB]/20 md:block" />
      <BlurryCircle className="absolute bottom-[-60px] right-0 -z-10 hidden bg-[#3633D0]/5 dark:bg-[#3633D0]/10 md:block" />
    </section>
  );
}
