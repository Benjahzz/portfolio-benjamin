'use client'

import { cn } from "@/libs/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";


const buttonVariants = cva(
    " w-auto border-secondary border-[1px] rounded-md px-4 py-2 transition-colors duration-200 z-10 relative disabled:cursor-not-allowed disabled:opacity-80",
    {
      variants: {
        variant: {
          default: "bg-primary hover:text-white hover:bg-secondary text-secondary",
          secondary:
            "bg-secondary text-white hover:opacity-80 transition-opacity duration-200 p-3  ",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    variant,
    ...props
},ref) => {
    return (
        <button ref={ref} className={cn(buttonVariants({variant,className}))} {...props} disabled={disabled}>
            {children}
        </button>
    )
})

Button.displayName = "Button"

export default Button;