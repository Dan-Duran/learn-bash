import { DownloadButton } from "@/components/animated-download-button";
import { GET } from "@/components/get-started";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Video } from "@/components/ui/video";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex sm:min-h-[58vh] min-h-[58vh] flex-col items-center justify-center text-center px-2 py-4">
        <Link
          href="https://github.com/Dan-Duran/learn-bash"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub{" "}
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
          Learn Bash With Me
        </h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          Learn Bash is a free and open-source guide to master command line and shell scripting.
          It is designed to be simple and easy to understand for beginners.
        </p>
        <div className="flex flex-row items-center gap-5">
          <GET/>
          <DownloadButton/>
        </div>
        <span className="flex flex-row items-center gap-2 text-zinc-400 text-xl mt-7 -mb-12 max-[800px]:mb-12">
          <TerminalIcon className="w-4 h-4 mr-1" /> ~ ls -lah
        </span>
      </div>
      
      <div className="relative w-full flex justify-center mb-16">
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <BorderBeam size={200} duration={12} delay={9} />
          <div className="w-full">
            <Video />
          </div>
        </div>
      </div>
    </>
  );
}