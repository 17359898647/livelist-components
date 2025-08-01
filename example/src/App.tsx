import { Button } from '@livelist/core'
import { Component } from 'solid-js'
import '@livelist/core/index.css'

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Livelist Components Demo</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Buttons</h2>
          <div class="flex gap-4 flex-wrap">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="default" size="sm">Small Button</Button>
            <Button variant="default" size="lg">Large Button</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
