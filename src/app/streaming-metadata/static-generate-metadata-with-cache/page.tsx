/**
 * `next dev`: blocks streaming
 * `next start`: doesn't block streaming
 */

import { connection } from "next/server";
import { cache, Suspense } from "react";

export async function generateMetadata() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Attempt to pre-fill cache in `generateMetadata`
  await getTitle();

  return {
    title: "This is the static page title",
  };
}

export default async function Page() {
  return (
    <Suspense>
      <DynamicComponent />
    </Suspense>
  );
}

async function DynamicComponent() {
  await connection();

  const title = await getTitle();

  return <title>{title}</title>;
}

const getTitle = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return "This is the data page title";
});

export const experimental_ppr = true;
