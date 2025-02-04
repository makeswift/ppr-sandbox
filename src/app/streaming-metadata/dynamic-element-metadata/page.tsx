/**
 * `next dev`: doesn't block streaming
 * `next start`: doesn't block streaming
 */

import { connection } from "next/server";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense>
      <DynamicComponent />
    </Suspense>
  );
}

async function DynamicComponent() {
  await connection();

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return <title>This is the dynamic page title</title>;
}

export const experimental_ppr = true;
