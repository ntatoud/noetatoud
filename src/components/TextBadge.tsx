import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TextBadgeProps = {
  children?: ReactNode;
  logo: React.JSX.Element;
  className?: string;
} & (
  | {
      hasLink?: true;
      href: string;
    }
  | { hasLink?: false }
);

const TextBadge = ({ ...props }: TextBadgeProps) => {
  if (props.hasLink) {
    return (
      <a
        href={props.href}
        className={cn(
          "inline-flex items-center rounded border border-gray-600 no-underline mx-1 px-1 leading-6",
          {
            "py-2": !props.children,
          },
          props.className,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.logo}
        {props.children}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center rounded border border-input border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      {props.logo}
      {props.children}
    </span>
  );
};

export default TextBadge;
