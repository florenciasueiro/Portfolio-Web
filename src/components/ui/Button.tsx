import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const variants = cva("button", { variants: { variant: { primary: "button-primary", ghost: "button-ghost" } }, defaultVariants: { variant: "primary" } });
type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants> & { asChild?: boolean };

export function Button({ asChild, variant, className, ...props }: Props) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn(variants({ variant }), className)} {...props} />;
}
