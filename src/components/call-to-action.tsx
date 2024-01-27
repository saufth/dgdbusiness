import React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import { type ButtonVariantProps } from '@/components/ui/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export interface CallToActionProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
      ButtonVariantProps {
        href?: URL
      }

const CallToActionIconVariants = cva(
  'w-auto h-4 sm:h-[18px]',
  {
    variants: {
      variant: {
        default: 'stroke-primary-foreground hover:stroke-accent-foreground',
        destructive: 'stroke-destructive-foreground hover:stroke-destructive',
        outline: 'stroke-primary',
        secondary: 'stroke-muted-foreground hover:stroke-primary',
        ghost: 'stroke-secondary-foreground hover:stroke-accent-foreground',
        link: 'stroke-muted-foreground hover:stroke-primary'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

const CallToAction = React.forwardRef<HTMLAnchorElement, CallToActionProps>(
  ({ className, children = 'Contáctanos', href = '/contacto', variant = 'default', size = 'full', ...props }, ref) => {
    return (
      <Link
        className={cn('group flex items-center gap-x-1', className)}
        variant={variant}
        size={size}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
        <Icons.ArrowUpRight
          className={cn(CallToActionIconVariants({ variant }))}
        />
      </Link>
    )
  }
)
CallToAction.displayName = 'CallToAction'

const linkToAboutUsVariants = cva(
  'group w-fit flex items-center gap-x-2',
  {
    variants: {
      variant: {
        default: '[&_.link-circle]:bg-primary/20 [&_.link-circle-in]:bg-primary [&_.link-text]:text-primary [&_.link-border-b]:bg-primary',
        secondary: '[&_.link-circle]:bg-white/20 [&_.link-circle-in]:bg-white [&_.link-text]:text-white [&_.link-border-b]:bg-white',
        accent: '[&_.link-circle]:bg-accent/20 [&_.link-circle-in]:bg-accent [&_.link-text]:text-accent [&_.link-border-b]:bg-accent',
        muted: '[&_.link-circle]:bg-muted/20 [&_.link-circle-in]:bg-muted [&_.link-text]:text-muted [&_.link-border-b]:bg-muted'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface LinkToActionProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
      NextLinkProps,
      VariantProps<typeof linkToAboutUsVariants> {}

const LinkToAction = React.forwardRef<HTMLAnchorElement, LinkToActionProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <NextLink
        className={cn(linkToAboutUsVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)
LinkToAction.displayName = 'LinkToAction'

export { CallToAction, LinkToAction }
