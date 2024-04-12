import { BlurryCircle } from "@/components/header/blurry-circle";

export default function Home() {
  return (
    <div className="relative mt-4 flex h-full items-center">
      <BlurryCircle className="absolute -right-6 top-[40%] -z-10 hidden bg-[#F59F95]/30 dark:bg-[#F59F95]/10 md:block" />
      <BlurryCircle className="absolute left-0 top-[70%] -z-10 hidden bg-[#3633D0]/10 dark:bg-[#3633D0]/10 md:block" />
      <div className=""></div>
    </div>
  );
}
