"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]

export function SearchInput() {
  // const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")

  return (
    <div className="flex h-[55px] md:max-w-[400px] flex-col md:flex-row max-md:gap-4">
      <div className="flex items-center justify-between rounded-md bg-background pr-2 ring-offset-background">
        <Input className="no-focus h-[55px]" placeholder="Select a subject" />
        <IoIosSearch className="text-2xl" />
      </div>
      <Button
        variant="outline"
        role="combobox"
        className="bg-main-bold hover:bg-main-bold-hover text-lg min-h-full min-w-[50%] font-semibold hover:text-white">
        Get Started
      </Button>
    </div>
  );
}

export default SearchInput;
