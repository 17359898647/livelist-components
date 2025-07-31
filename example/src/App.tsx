import { Component } from 'solid-js';
import { Button, Card, CardHeader, CardBody, CardFooter } from '@livelist/core';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Livelist Components Demo</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Buttons</h2>
          <div class="flex gap-4 flex-wrap">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cards</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="default">
              <CardHeader>
                <h3 class="text-lg font-semibold">Default Card</h3>
              </CardHeader>
              <CardBody>
                <p>This is a default card with no border or shadow.</p>
              </CardBody>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <h3 class="text-lg font-semibold">Bordered Card</h3>
              </CardHeader>
              <CardBody>
                <p>This card has a subtle border.</p>
              </CardBody>
              <CardFooter>
                <Button size="sm" variant="outline">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="shadowed" class="md:col-span-2">
              <CardHeader>
                <h3 class="text-lg font-semibold">Shadowed Card</h3>
              </CardHeader>
              <CardBody>
                <p>This card has a prominent shadow for emphasis.</p>
              </CardBody>
              <CardFooter>
                <div class="flex gap-2">
                  <Button size="sm" variant="primary">Save</Button>
                  <Button size="sm" variant="outline">Cancel</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
