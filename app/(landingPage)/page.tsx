import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

function LandingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col font-protest">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Best project managment system
        </div>
        <h1 className="text-2xl md:text-4xl text-center text-neutral-800 mb-6">
          TaskTower: Elevating Your Projects to New Heights!
        </h1>
        <div className="text-2xl md:text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          Work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 font-poppins mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Introducing TaskTower - your ultimate solution for seamless project
        management. With TaskTower, you can effortlessly organize tasks,
        streamline workflows, and collaborate with your team like never before.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/signup">
          Start using TaskTower
        </Link>
      </Button>
    </div>
  );
}

export default LandingPage;
