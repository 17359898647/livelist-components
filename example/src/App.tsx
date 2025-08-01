import { Button, NumberFieldDemo, OTPField, OTPFieldGroup, OTPFieldInput, OTPFieldSeparator, OTPFieldSlot } from 'livelist-components'
import { Component } from 'solid-js'
import 'livelist-components/index.css'

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Livelist Components Demo</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Buttons</h2>
          <div class="flex gap-4 flex-wrap">
            <Button variant="default">Primary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link" size="sm">Small Link Button</Button>
            <Button variant="outline" size="lg">Large Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Number Field</h2>
          <NumberFieldDemo />
          <OTPField maxLength={6}>
            <OTPFieldInput />
            <OTPFieldGroup>
              <OTPFieldSlot index={0} />
              <OTPFieldSlot index={1} />
              <OTPFieldSlot index={2} />
            </OTPFieldGroup>
            <OTPFieldSeparator />
            <OTPFieldGroup>
              <OTPFieldSlot index={3} />
              <OTPFieldSlot index={4} />
              <OTPFieldSlot index={5} />
            </OTPFieldGroup>
          </OTPField>
        </section>
      </div>
    </div>
  )
}

export default App
