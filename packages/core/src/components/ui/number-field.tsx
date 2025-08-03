import type { Component, ComponentProps, JSX, ValidComponent } from 'solid-js'
import type { PolymorphicProps } from '@kobalte/core/polymorphic'

import * as NumberFieldPrimitive from '@kobalte/core/number-field'
import { Show, splitProps } from 'solid-js'

import { cn } from '~/lib/utils'

const NumberField = NumberFieldPrimitive.Root

const NumberFieldGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return (
    <div
      class={cn(
        'livelist-relative livelist-rounded-md focus-within:livelist-ring-2 focus-within:livelist-ring-ring focus-within:livelist-ring-offset-2',
        local.class,
      )}
      {...others}
    />
  )
}

type NumberFieldLabelProps<T extends ValidComponent = 'label'>
  = NumberFieldPrimitive.NumberFieldLabelProps<T> & {
    class?: string | undefined
  }

function NumberFieldLabel<T extends ValidComponent = 'label'>(props: PolymorphicProps<T, NumberFieldLabelProps<T>>) {
  const [local, others] = splitProps(props as NumberFieldLabelProps, ['class'])
  return (
    <NumberFieldPrimitive.Label
      class={cn(
        'livelist-text-sm livelist-font-medium livelist-leading-none peer-disabled:livelist-cursor-not-allowed peer-disabled:livelist-opacity-70',
        local.class,
      )}
      {...others}
    />
  )
}

type NumberFieldInputProps<T extends ValidComponent = 'input'>
  = NumberFieldPrimitive.NumberFieldInputProps<T> & {
    class?: string | undefined
  }

function NumberFieldInput<T extends ValidComponent = 'input'>(props: PolymorphicProps<T, NumberFieldInputProps<T>>) {
  const [local, others] = splitProps(props as NumberFieldInputProps, ['class'])
  return (
    <NumberFieldPrimitive.Input
      class={cn(
        'livelist-flex livelist-h-10 livelist-w-full livelist-rounded-md livelist-border livelist-border-input livelist-bg-transparent livelist-px-3 livelist-py-2 livelist-text-sm livelist-ring-offset-background file:livelist-border-0 file:livelist-bg-transparent file:livelist-text-sm file:livelist-font-medium placeholder:livelist-text-muted-foreground focus-visible:livelist-outline-none disabled:livelist-cursor-not-allowed disabled:livelist-opacity-50 data-[invalid]:livelist-border-error-foreground data-[invalid]:livelist-text-error-foreground',
        local.class,
      )}
      {...others}
    />
  )
}

type NumberFieldIncrementTriggerProps<T extends ValidComponent = 'button'>
  = NumberFieldPrimitive.NumberFieldIncrementTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

function NumberFieldIncrementTrigger<T extends ValidComponent = 'button'>(props: PolymorphicProps<T, NumberFieldIncrementTriggerProps<T>>) {
  const [local, others] = splitProps(props as NumberFieldIncrementTriggerProps, [
    'class',
    'children',
  ])
  return (
    <NumberFieldPrimitive.IncrementTrigger
      class={cn(
        'livelist-absolute livelist-right-1 livelist-top-1 livelist-inline-flex livelist-w-4 livelist-h-4 livelist-items-center livelist-justify-center',
        local.class,
      )}
      {...others}
    >
      <Show
        when={local.children}
        fallback={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="livelist-w-4 livelist-h-4"
          >
            <path d="M6 15l6 -6l6 6" />
          </svg>
        )}
      >
        {children => children()}
      </Show>
    </NumberFieldPrimitive.IncrementTrigger>
  )
}

type NumberFieldDecrementTriggerProps<T extends ValidComponent = 'button'>
  = NumberFieldPrimitive.NumberFieldDecrementTriggerProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

function NumberFieldDecrementTrigger<T extends ValidComponent = 'button'>(props: PolymorphicProps<T, NumberFieldDecrementTriggerProps<T>>) {
  const [local, others] = splitProps(props as NumberFieldDecrementTriggerProps, [
    'class',
    'children',
  ])
  return (
    <NumberFieldPrimitive.DecrementTrigger
      class={cn(
        'livelist-absolute livelist-bottom-1 livelist-right-1 livelist-inline-flex livelist-w-4 livelist-h-4 livelist-items-center livelist-justify-center',
        local.class,
      )}
      {...others}
    >
      <Show
        when={local.children}
        fallback={(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="livelist-w-4 livelist-h-4"
          >
            <path d="M6 9l6 6l6 -6" />
          </svg>
        )}
      >
        {children => children()}
      </Show>
    </NumberFieldPrimitive.DecrementTrigger>
  )
}

type NumberFieldDescriptionProps<T extends ValidComponent = 'div'>
  = NumberFieldPrimitive.NumberFieldDescriptionProps<T> & {
    class?: string | undefined
  }

function NumberFieldDescription<T extends ValidComponent = 'div'>(props: PolymorphicProps<T, NumberFieldDescriptionProps<T>>) {
  const [local, others] = splitProps(props as NumberFieldDescriptionProps, ['class'])
  return (
    <NumberFieldPrimitive.Description
      class={cn('livelist-text-sm livelist-text-muted-foreground', local.class)}
      {...others}
    />
  )
}

type NumberFieldErrorMessageProps<T extends ValidComponent = 'div'>
  = NumberFieldPrimitive.NumberFieldErrorMessageProps<T> & {
    class?: string | undefined
  }

function NumberFieldErrorMessage<T extends ValidComponent = 'div'>(props: PolymorphicProps<T, NumberFieldErrorMessageProps<T>>) {
  const [local, others] = splitProps(props as NumberFieldErrorMessageProps, ['class'])
  return (
    <NumberFieldPrimitive.ErrorMessage
      class={cn('livelist-text-sm livelist-text-error-foreground', local.class)}
      {...others}
    />
  )
}

export {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldDescription,
  NumberFieldErrorMessage,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
}
