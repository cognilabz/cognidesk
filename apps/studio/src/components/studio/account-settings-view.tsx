"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { KeyRound, Save } from "lucide-react";
import type { AccountSettings } from "@/server/account";
import { Button, Panel, PanelHeader } from "./ui";

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  revokeOtherSessions: boolean;
};

const emptyPasswordForm: PasswordForm = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  revokeOtherSessions: true,
};

export function AccountSettingsView(props: { account: AccountSettings }) {
  const router = useRouter();
  const [account, setAccount] = useState(props.account);
  const [profileForm, setProfileForm] = useState({
    name: props.account.name,
    email: props.account.email,
  });
  const [passwordForm, setPasswordForm] = useState<PasswordForm>(emptyPasswordForm);
  const [profileStatus, setProfileStatus] = useState<StatusState>({ kind: "idle" });
  const [passwordStatus, setPasswordStatus] = useState<StatusState>({ kind: "idle" });

  async function submitProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProfileStatus({ kind: "loading" });
    try {
      const nextAccount = await accountRequest("/api/studio/account", {
        method: "PATCH",
        body: JSON.stringify(profileForm),
      });
      setAccount(nextAccount);
      setProfileForm({ name: nextAccount.name, email: nextAccount.email });
      setProfileStatus({ kind: "success", message: "Profile saved." });
      router.refresh();
    } catch (error) {
      setProfileStatus({ kind: "error", message: errorMessage(error) });
    }
  }

  async function submitPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordStatus({ kind: "error", message: "Passwords do not match." });
      return;
    }
    setPasswordStatus({ kind: "loading" });
    try {
      await accountRequest("/api/studio/account/password", {
        method: "POST",
        body: JSON.stringify(passwordForm),
      });
      setPasswordForm(emptyPasswordForm);
      setPasswordStatus({ kind: "success", message: "Password changed." });
      router.refresh();
    } catch (error) {
      setPasswordStatus({ kind: "error", message: errorMessage(error) });
    }
  }

  return (
    <div className="grid gap-4 p-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
      <Panel>
        <PanelHeader title="Profile" />
        <form className="grid gap-5 p-5" onSubmit={submitProfile}>
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Name"
              value={profileForm.name}
              autoComplete="name"
              onChange={(value) => setProfileForm((current) => ({ ...current, name: value }))}
            />
            <TextField
              label="Email"
              type="email"
              value={profileForm.email}
              autoComplete="email"
              onChange={(value) => setProfileForm((current) => ({ ...current, email: value }))}
            />
          </div>
          <div className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm md:grid-cols-3">
            <ReadOnlyField label="Role" value={account.role} />
            <ReadOnlyField label="Email status" value={account.emailVerified ? "Verified" : "Unverified"} />
            <ReadOnlyField label="Updated" value={shortDate(account.updatedAt)} />
          </div>
          <FormFooter status={profileStatus}>
            <Button type="submit" variant="primary" disabled={profileStatus.kind === "loading"}>
              <Save className="size-4" aria-hidden="true" />
              Save profile
            </Button>
          </FormFooter>
        </form>
      </Panel>

      <Panel>
        <PanelHeader title="Password" />
        <form className="grid gap-4 p-5" onSubmit={submitPassword}>
          <TextField
            label="Current password"
            type="password"
            value={passwordForm.currentPassword}
            autoComplete="current-password"
            onChange={(value) => setPasswordForm((current) => ({ ...current, currentPassword: value }))}
          />
          <TextField
            label="New password"
            type="password"
            value={passwordForm.newPassword}
            autoComplete="new-password"
            onChange={(value) => setPasswordForm((current) => ({ ...current, newPassword: value }))}
          />
          <TextField
            label="Confirm password"
            type="password"
            value={passwordForm.confirmPassword}
            autoComplete="new-password"
            onChange={(value) => setPasswordForm((current) => ({ ...current, confirmPassword: value }))}
          />
          <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <input
              className="mt-1 size-4 rounded border-slate-300 text-slate-950 focus:ring-slate-300"
              type="checkbox"
              checked={passwordForm.revokeOtherSessions}
              onChange={(event) => setPasswordForm((current) => ({ ...current, revokeOtherSessions: event.target.checked }))}
            />
            <span>Sign out other sessions</span>
          </label>
          <FormFooter status={passwordStatus}>
            <Button type="submit" variant="primary" disabled={passwordStatus.kind === "loading"}>
              <KeyRound className="size-4" aria-hidden="true" />
              Change password
            </Button>
          </FormFooter>
        </form>
      </Panel>
    </div>
  );
}

type StatusState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function TextField(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "email" | "password" | "text";
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-slate-700">{props.label}</span>
      <input
        className="min-h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
        type={props.type ?? "text"}
        value={props.value}
        autoComplete={props.autoComplete}
        required
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
}

function ReadOnlyField(props: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{props.label}</span>
      <strong className="mt-1 block truncate font-medium text-slate-950">{props.value}</strong>
    </div>
  );
}

function FormFooter(props: { children: ReactNode; status: StatusState }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
      <StatusMessage status={props.status} />
      {props.children}
    </div>
  );
}

function StatusMessage(props: { status: StatusState }) {
  if (props.status.kind === "loading") return <span className="text-sm text-slate-500">Saving...</span>;
  if (props.status.kind === "success") return <span className="text-sm font-medium text-emerald-700">{props.status.message}</span>;
  if (props.status.kind === "error") return <span className="text-sm font-medium text-rose-700">{props.status.message}</span>;
  return <span className="text-sm text-slate-400">Ready</span>;
}

async function accountRequest(url: string, init: RequestInit) {
  const response = await fetch(url, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const payload = await response.json() as { account?: AccountSettings; error?: string };
  if (!response.ok) throw new Error(payload.error ?? "Request failed.");
  if (!payload.account) throw new Error("Account response was empty.");
  return payload.account;
}

function shortDate(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Request failed.";
}
