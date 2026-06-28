"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole, LogIn } from "lucide-react";

interface LoginFormProps {
  initialError?: string | null;
  mode?: "login" | "setup";
}

export function LoginForm({ initialError = null, mode = "login" }: LoginFormProps) {
  const { refresh, replace } = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(initialError);
  const [busy, setBusy] = useState(false);
  const isSetup = mode === "setup";

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (isSetup && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setBusy(true);
    setError(null);
    const response = await fetch(isSetup ? "/api/studio/setup-admin" : "/api/auth/sign-in/email", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(isSetup ? { name, email, password, confirmPassword } : { email, password }),
    });
    setBusy(false);
    if (!response.ok) {
      const body = await response.json().catch(() => null) as { error?: string } | null;
      setError(body?.error ?? (isSetup ? "Admin setup failed." : "Sign-in failed."));
      return;
    }
    replace("/");
    refresh();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <form className="grid w-full max-w-md gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm" method="post" action={isSetup ? "/api/studio/setup-admin" : "/api/studio/login"} onSubmit={submit}>
        <div className="grid size-11 place-items-center rounded-full bg-slate-950 text-white">
          <LockKeyhole size={20} />
        </div>
        <div className="grid gap-1">
          <h1 className="text-xl font-semibold text-slate-950">Cognidesk Studio</h1>
          {isSetup ? <p className="text-sm text-slate-600">Create the first admin account for this Studio database.</p> : null}
        </div>
        {isSetup ? (
          <label className="grid gap-2 text-sm text-slate-600">
            Name
            <input className="h-11 rounded-lg border border-slate-200 px-3 text-slate-950" name="name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required />
          </label>
        ) : null}
        <label className="grid gap-2 text-sm text-slate-600">
          Email
          <input className="h-11 rounded-lg border border-slate-200 px-3 text-slate-950" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="username" required />
        </label>
        <label className="grid gap-2 text-sm text-slate-600">
          Password
          <input className="h-11 rounded-lg border border-slate-200 px-3 text-slate-950" name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete={isSetup ? "new-password" : "current-password"} minLength={8} required />
        </label>
        {isSetup ? (
          <label className="grid gap-2 text-sm text-slate-600">
            Confirm password
            <input className="h-11 rounded-lg border border-slate-200 px-3 text-slate-950" name="confirmPassword" type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} autoComplete="new-password" minLength={8} required />
          </label>
        ) : null}
        {error ? <p className="text-sm text-rose-600">{error}</p> : null}
        <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-white disabled:opacity-50" type="submit" disabled={busy}>
          <LogIn size={16} />
          {busy ? (isSetup ? "Creating admin" : "Signing in") : (isSetup ? "Create admin" : "Enter Studio")}
        </button>
      </form>
    </main>
  );
}
