"use client";

import { useIsMounted } from "packages/isomorphic-core/src/hooks/use-is-mounted";
import cn from "packages/isomorphic-core/src/utils/class-names";
import useWindowScroll from "react-use/lib/useWindowScroll";

// import cn from "@core/utils/class-names";
// import { useIsMounted } from "@core/hooks/use-is-mounted";
// import { useWindowScroll } from "@core/hooks/use-window-scroll";

interface StickyHeaderProps {
  className?: string;
  offset?: number;
}

export default function StickyHeader({
  offset = 2,
  className,
  children,
}: React.PropsWithChildren<StickyHeaderProps>) {
  const isMounted = useIsMounted();
  const windowScroll = useWindowScroll();
  return (
    <header
      className={cn(
        "sticky top-0 z-[9999] flex items-center bg-gray-0/80 p-4 backdrop-blur-xl dark:bg-gray-50/50 md:px-5 lg:px-6",
        ((isMounted && windowScroll.y) as number) > offset ? "card-shadow" : "",
        className
      )}
    >
      {children}
    </header>
  );
}
