import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      landing page
      <div>
        <Button>Button</Button>
        <Link href={"/"}>
          <Button variant={"outline"}>check</Button>
        </Link>
      </div>
    </div>
  );
}
