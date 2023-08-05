import { cn } from "@/libs/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const titleVariants = cva(
    " content-none after:block after:w-20 after:bg-white after:h-1 after:mt-4 z-10",
    {
      variants: {
        variant: {
          default: "text-3xl font-bold text-center after:mx-auto mx-auto",
          secondary:
            "text-2xl font-base",
          
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )


interface TitleProps extends React.HTMLProps<HTMLHeadingElement>, VariantProps<typeof titleVariants> {
}
const Title: React.FC<TitleProps> = ({ children,variant,className }) => {
    return (
        <h2 className={cn(titleVariants({variant,className}))}>{children}</h2>
    )
}

export default Title