/**
 * `next dev`: blocks streaming
 * `next start`: blocks streaming
 */

import { connection } from "next/server";

export async function generateMetadata() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    title: "This is the static page title",
  };
}

export default async function Page() {
  return <DynamicComponent />;
}

async function DynamicComponent() {
  await connection();

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return null;
}

export const experimental_ppr = true;
