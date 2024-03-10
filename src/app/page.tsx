"use client";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://154.53.166.212:9898/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (response.status === 201) {
        const responseData = await response.json();

        if (responseData.rowAffected > 0) {
          toast({
            title: "Thank You!",
            description:
              "Your email address has been successfully added. You will receive updates soon!",
          });
        }
      } else if (response.status === 409) {
        const responseData = await response.json();

        if (responseData.error) {
          toast({
            variant: "destructive",
            title: "Error Occurred!",
            description: "The email address already exists.",
          });
        }
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-5 text-sm text-center relative z-10">
          We are shaping the future of cybersecurity, software development, and
          cloud solutions. Follow us as we pave the way for a more secure and
          innovative digital landscape. Stay tuned for more updates!
        </p>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="hi@nettasec.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-80 sm:w-1/2 sm:max-w-md relative z-10 mt-2 p-3 bg-neutral-950 placeholder:text-neutral-700 text-neutral-400"
            style={{ flex: "8" }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 ml-2 w-20 sm:w-1/2 sm:max-w-md relative z-10 mt-2 p-3 bg-neutral-950 placeholder:text-neutral-700 text-neutral-400"
            style={{ flex: "2" }}
          >
            Submit
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
