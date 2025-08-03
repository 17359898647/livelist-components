import type { PolymorphicProps } from '@kobalte/core/polymorphic'
import type { VariantProps } from 'class-variance-authority'
import type { JSX, ValidComponent } from 'solid-js'

import * as ButtonPrimitive from '@kobalte/core/button'
import { cva } from 'class-variance-authority'
import { splitProps } from 'solid-js'

import { cn } from '~/lib/utils'

const buttonVariants = cva(
  'livelist-inline-flex livelist-items-center livelist-justify-center livelist-gap-2 livelist-whitespace-nowrap livelist-rounded-md livelist-text-sm livelist-font-medium livelist-ring-offset-background livelist-transition-colors focus-visible:livelist-outline-none focus-visible:livelist-ring-2 focus-visible:livelist-ring-ring focus-visible:livelist-ring-offset-2 disabled:livelist-pointer-events-none disabled:livelist-opacity-50 [&_svg]:livelist-pointer-events-none [&_svg]:livelist-w-4 [&_svg]:livelist-h-4 [&_svg]:livelist-shrink-0',
  {
    variants: {
      variant: {
        default: 'livelist-bg-primary livelist-text-primary-foreground hover:livelist-bg-primary/90',
        destructive: 'livelist-bg-destructive livelist-text-destructive-foreground hover:livelist-bg-destructive/90',
        outline: 'livelist-border livelist-border-input hover:livelist-bg-accent hover:livelist-text-accent-foreground',
        secondary: 'livelist-bg-secondary livelist-text-secondary-foreground hover:livelist-bg-secondary/80',
        ghost: 'hover:livelist-bg-accent hover:livelist-text-accent-foreground',
        link: 'livelist-text-primary livelist-underline-offset-4 hover:livelist-underline',
      },
      size: {
        default: 'livelist-h-10 livelist-px-4 livelist-py-2',
        sm: 'livelist-h-9 livelist-px-3 livelist-text-xs',
        lg: 'livelist-h-11 livelist-px-8',
        icon: 'livelist-w-10 livelist-h-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps<T extends ValidComponent = 'button'> = ButtonPrimitive.ButtonRootProps<T>
  & VariantProps<typeof buttonVariants> & { class?: string | undefined, children?: JSX.Element }

function Button<T extends ValidComponent = 'button'>(props: PolymorphicProps<T, ButtonProps<T>>) {
  const [local, others] = splitProps(props as ButtonProps, ['variant', 'size', 'class'])
  return (
    <ButtonPrimitive.Root
      class={cn(buttonVariants({ variant: local.variant, size: local.size }), local.class)}
      {...others}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
