import { BlurryCircle } from "@/components/gradients/blurry-circle";

const DashboardPage = () => {
  return (
    <div className="relative">
      <BlurryCircle className="absolute -top-2 right-[320px]  hidden bg-[#FFECBB] dark:bg-[#FFECBB]/40 md:block" />
      <BlurryCircle className="absolute -bottom-6 left-6 hidden bg-[#FFECBB]/50 dark:bg-[#FFECBB]/20 md:block" />
      <BlurryCircle className="absolute bottom-[-60px] right-0 -z-10 hidden bg-[#3633D0]/5 dark:bg-[#3633D0]/10 md:block" />
    </div>
  );
};

export default DashboardPage;
