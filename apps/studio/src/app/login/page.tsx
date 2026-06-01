import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getStudioSession } from "@/server/auth";
import { LoginForm } from "@/components/login-form";

export const runtime = "nodejs";
export const metadata: Metadata = {
  title: "Login | Cognidesk Studio",
  description: "Sign in to Cognidesk Studio.",
};

interface LoginPageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getStudioSession(await headers());
  if (session) redirect("/");
  const params = await searchParams;
  return <LoginForm initialError={params?.error ? "Sign-in failed." : null} />;
}
