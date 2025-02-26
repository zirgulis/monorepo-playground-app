"use client";

import { useEffect, useState } from "react";

function* createPaginatedDataGenerator() {
  let page = 0;
  while (true) {
    yield {
      page,
      items: Array.from({ length: 10 }, (_, i) => ({
        id: page * 10 + i,
        title: `Item ${page * 10 + i}`,
      })),
    };
    page++;
  }
}

function* createFibonacciGenerator() {
  let prev = 0,
    curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

function* createWorkflowGenerator() {
  yield "PENDING";
  yield "LOADING";
  yield "PROCESSING";
  yield "COMPLETED";
}

async function* createAsyncGenerator() {
  let page = 0;
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    yield `Async data from page ${page++}`;
  }
}

type Item = {
  id: number;
  title: string;
  fibNumber?: number;
  state?: string;
  asyncData?: string;
};

export default function InfiniteScrollPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [paginatedGen] = useState(() => createPaginatedDataGenerator());
  const [fibGen] = useState(() => createFibonacciGenerator());
  const [workflowGen] = useState(() => createWorkflowGenerator());
  const [loading, setLoading] = useState(false);
  const [currentState, setCurrentState] = useState<string>("PENDING");

  const loadMoreItems = async () => {
    setLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { items: newItems } = paginatedGen.next().value!;
    const nextState = workflowGen.next().value || currentState;
    setCurrentState(nextState);

    const asyncGen = createAsyncGenerator();
    const asyncResult = await asyncGen.next();

    const itemsWithAll = newItems.map((item) => ({
      ...item,
      fibNumber: fibGen.next().value,
      state: nextState,
      asyncData: asyncResult.value,
    }));

    setItems((prev) => [...prev, ...itemsWithAll]);

    setLoading(false);
  };

  const handleScroll = () => {
    if (loading) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight - 200;

    if (scrollPosition >= threshold) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    loadMoreItems();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">
          Infinite Scroll with Generators
        </h1>
        <div className="bg-blue-100 p-4 rounded-lg">
          <p className="font-semibold">Current State: {currentState}</p>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <p>Fibonacci Number: {item.fibNumber}</p>
              <p>State: {item.state}</p>
              <p>Async Data: {item.asyncData}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-center p-4">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}
