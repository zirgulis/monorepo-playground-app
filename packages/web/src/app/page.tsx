"use client";

import { Button } from "@monorepo/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Monorepo Todo App</h1>

        <div className="mb-8">
          <Button
            title="Click meeeeee!"
            onPress={() => alert("Button clicked!")}
          />
        </div>

        <p className="text-center text-gray-600">
          This is a Next.js app using shared components from our monorepo
        </p>
      </div>
    </main>
  );
}
