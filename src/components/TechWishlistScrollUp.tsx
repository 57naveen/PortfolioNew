import React from "react";
import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

type TechItem = {
  title: string;
  iconType: React.ElementType;
};

const TechWishlistScrollUp = ({
  items,
  className,
  wrapperClassName,
}: {
  items: TechItem[];
  className?: string;
  wrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        // container height + vertical mask image
        "relative overflow-hidden h-[250px]  [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_50%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "animate-move-top [animation-duration:7s] flex flex-col",
          wrapperClassName
        )}
      >
        {/* First list */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 py-2 px-3 text-white outline outline-2 outline-white/10 backdrop-blur-md rounded-md mb-3"
            >
              <TechIcon component={item.iconType} />
              <span className="whitespace-nowrap">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={`copy-${item.title}`}
              className="flex items-center gap-3 py-2 px-3 text-white outline outline-2 outline-white/10 backdrop-blur-md rounded-md mb-3"
            >
              <TechIcon component={item.iconType} />
              <span className="whitespace-nowrap">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechWishlistScrollUp;
