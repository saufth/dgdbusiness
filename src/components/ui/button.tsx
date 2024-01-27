import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-max inline-flex items-center justify-center rounded-md transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border-[1.5px] border-accent text-primary hover:bg-accent/10',
        secondary: 'bg-secondary shadow-sm hover:bg-secondary/80 text-secondary-foreground',
        ghost: 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground border',
        link: 'hover:text-accent'
      },
      size: {
        default: 'h-10 sm:h-11 px-5 text-sm sm:text-base',
        xs: 'px-1.5 text-xs sm:text-sm',
        sm: 'px-2 py-1.5 sm:px-2.5 text-sm sm:text-base',
        lg: 'w-fit h-12 sm:h-13 px-4 sm:px-6 text-sm sm:text-base',
        full: 'w-full md:w-fit h-12 sm:h-13 px-4 sm:px-6 text-sm sm:text-base',
        icon: 'h-9 sm:h-10 w-9 sm:w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
