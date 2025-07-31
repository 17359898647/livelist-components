import { Component, JSX, splitProps } from 'solid-js'

export interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'shadowed'
}

export const Card: Component<CardProps> = (props) => {
  const [local, others] = splitProps(props, ['variant', 'children', 'class'])

  const baseClasses = 'bg-white rounded-lg'

  const variantClasses = {
    default: '',
    bordered: 'border border-gray-200',
    shadowed: 'shadow-lg',
  }

  const variant = local.variant || 'default'

  return (
    <div
      class={`${baseClasses} ${variantClasses[variant]} ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </div>
  )
}

export const CardHeader: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={`px-6 py-4 border-b border-gray-200 ${local.class || ''}`} {...others}>
      {local.children}
    </div>
  )
}

export const CardBody: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={`px-6 py-4 ${local.class || ''}`} {...others}>
      {local.children}
    </div>
  )
}

export const CardFooter: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ['children', 'class'])

  return (
    <div class={`px-6 py-4 border-t border-gray-200 ${local.class || ''}`} {...others}>
      {local.children}
    </div>
  )
}
