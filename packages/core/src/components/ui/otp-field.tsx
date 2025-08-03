import type { Component, ComponentProps, ValidComponent } from 'solid-js'
import type { DynamicProps, RootProps } from '@corvu/otp-field'

import { Show, splitProps } from 'solid-js'
import OtpField from '@corvu/otp-field'

import { cn } from '~/lib/utils'

export const REGEXP_ONLY_DIGITS = '^\\d*$'
export const REGEXP_ONLY_CHARS = '^[a-zA-Z]*$'
export const REGEXP_ONLY_DIGITS_AND_CHARS = '^[a-zA-Z0-9]*$'

type OTPFieldProps<T extends ValidComponent = 'div'> = RootProps<T> & { class?: string }

function OTPField<T extends ValidComponent = 'div'>(props: DynamicProps<T, OTPFieldProps<T>>) {
  const [local, others] = splitProps(props as OTPFieldProps, ['class'])
  return (
    <OtpField
      class={cn(
        'livelist-flex livelist-items-center livelist-gap-2 disabled:livelist-cursor-not-allowed has-[:disabled]:livelist-opacity-50',
        local.class,
      )}
      {...others}
    />
  )
}

const OTPFieldInput = OtpField.Input

const OTPFieldGroup: Component<ComponentProps<'div'>> = (props) => {
  const [local, others] = splitProps(props, ['class'])
  return <div class={cn('livelist-flex livelist-items-center', local.class)} {...others} />
}

const OTPFieldSlot: Component<ComponentProps<'div'> & { index: number }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'index'])
  const context = OtpField.useContext()
  const char = () => context.value()[local.index]
  const showFakeCaret = () => context.value().length === local.index && context.isInserting()

  return (
    <div
      class={cn(
        'livelist-group livelist-relative livelist-flex livelist-size-10 livelist-items-center livelist-justify-center livelist-border-y livelist-border-r livelist-border-input livelist-text-sm first:livelist-rounded-l-md first:livelist-border-l last:livelist-rounded-r-md',
        local.class,
      )}
      {...others}
    >
      <div
        class={cn(
          'livelist-absolute livelist-inset-0 livelist-z-10 livelist-transition-all group-first:livelist-rounded-l-md group-last:livelist-rounded-r-md',
          context.activeSlots().includes(local.index) && 'livelist-ring-2 livelist-ring-ring livelist-ring-offset-background',
        )}
      />
      {char()}
      <Show when={showFakeCaret()}>
        <div class="livelist-flex livelist-pointer-events-none livelist-items-center livelist-inset-0 livelist-justify-center livelist-absolute">
          <div class="livelist-bg-foreground livelist-h-4 livelist-w-px livelist-duration-1000 livelist-animate-bounce-alt" />
        </div>
      </Show>
    </div>
  )
}

const OTPFieldSeparator: Component<ComponentProps<'div'>> = (props) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="livelist-size-6"
      >
        <circle cx="12.1" cy="12.1" r="1" />
      </svg>
    </div>
  )
}

export { OTPField, OTPFieldGroup, OTPFieldInput, OTPFieldSeparator, OTPFieldSlot }
