import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
       
          <Card>
            <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-xl">
            {/* <img src={item.img} alt={item.title} className="rounded-xl transition duration-300 ease-in-out hover:scale-125 w-full h-40" /> */}
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={40}
              className="rounded-xl transition duration-300 ease-in-out hover:scale-125 w-full h-40"
            />
            </div>
            <CardTitle className="text-black mt-4">{item.title}</CardTitle>
              <ul className="list-disc space-y-2  mt-2 ml-2">
                {
                  item.description.map((points,index)=>{
                    return <li key={index}>{points}</li>
                  })
                }
              </ul>
          </Card>
        </div>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white border shadow-md dark:border-white/[0.2] relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};
