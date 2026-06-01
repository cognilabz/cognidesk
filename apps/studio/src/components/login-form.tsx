"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, LogIn } from "lucide-react";

interface LoginFormProps {
  initialError?: string | null;
}

export function LoginForm({ initialError = null }: LoginFormProps) {
  const { refresh, replace } = useRouter();
  const [email, setEmail] = useState("admin@local.cognidesk.dev");
  const [password, setPassword] = useState("cognidesk-studio-admin");
  const [error, setError] = useState<string | null>(initialError);
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    const response = await fetch("/api/auth/sign-in/email", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setBusy(false);
    if (!response.ok) {
      setError("Sign-in failed.");
      return;
    }
    replace("/");
    refresh();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <form className="grid w-full max-w-md gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm" method="post" action="/api/studio/login" onSubmit={submit}>
        <div className="grid size-11 place-items-center rounded-full bg-slate-950 text-white">
          <LockKeyhole size={20} />
        </div>
        <h1 className="text-xl font-semibold text-slate-950">Cognidesk Studio</h1>
        <label className="grid gap-2 text-sm text-slate-600">
          Email
          <input className="h-11 rounded-lg border border-slate-200 px-3 text-slate-950" name="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm text-slate-600">
          Password
          <input className="h-11 rounded-lg border border-slate-200 px-3 text-slate-950" name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
        </label>
        {error ? <p className="text-sm text-rose-600">{error}</p> : null}
        <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-white disabled:opacity-50" type="submit" disabled={busy}>
          <LogIn size={16} />
          {busy ? "Signing in" : "Enter Studio"}
        </button>
      </form>
    </main>
  );
}
