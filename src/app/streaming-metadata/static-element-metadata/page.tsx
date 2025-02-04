/**
 * `next dev`: doesn't block streaming
 * `next start`: doesn't block streaming
 */

import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense>
      <DynamicComponent />
    </Suspense>
  );
}

async function DynamicComponent() {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return null;
}

export const experimental_ppr = true;
