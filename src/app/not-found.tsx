"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="animate-pulse mb-6 text-6xl">404</div>
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-4 text-lg">
        Redirecting to homepage in{" "}
        <span className="font-bold">{countdown}</span> seconds...
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        aria-label="Go to homepage"
      >
        Go Home Now
      </button>
    </div>
  );
}
