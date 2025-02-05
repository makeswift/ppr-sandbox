/**
 * `next dev`: blocks streaming
 * `next start`: doesn't block streaming
 */

import { connection } from "next/server";
import { Suspense } from "react";

export async function generateMetadata() {
  await connection();

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    title: "This is the dynamic page title",
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

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return null;
}

export const experimental_ppr = true;
