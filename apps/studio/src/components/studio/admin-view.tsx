"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import type { StudioRole, StudioTargetManifest } from "@cognidesk/studio-contracts";
import { CheckCircle2, KeyRound, RefreshCw, Save, ShieldOff, UserPlus } from "lucide-react";
import type { AdminOverview } from "@/server/admin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { User } from "./types";
import { formatDateTime } from "./format";
import { DataTable, Metric, PageHeader, Panel, PanelHeader } from "./ui";

type AdminUser = AdminOverview["users"][number];

const studioRoles: StudioRole[] = ["viewer", "dashboard_editor", "operator", "admin"];
const roleLabels: Record<StudioRole, string> = {
  viewer: "Viewer",
  dashboard_editor: "Dashboard editor",
  operator: "Operator",
  admin: "Admin",
};

type CreateForm = {
  name: string;
  email: string;
  role: StudioRole;
  password: string;
  emailVerified: boolean;
};

type EditForm = {
  name: string;
  email: string;
  role: StudioRole;
  emailVerified: boolean;
  disabled: boolean;
  banReason: string;
};

export function AdminView({ manifest, user, overview }: { manifest: StudioTargetManifest; user: User; overview: AdminOverview }) {
  const [currentOverview, setCurrentOverview] = useState(overview);
  const [selectedUserId, setSelectedUserId] = useState(overview.users[0]?.id ?? "");
  const [createForm, setCreateForm] = useState<CreateForm>({
    name: "",
    email: "",
    role: "viewer",
    password: "",
    emailVerified: true,
  });
  const selectedUser = useMemo(
    () => currentOverview.users.find((row) => row.id === selectedUserId) ?? currentOverview.users[0] ?? null,
    [currentOverview.users, selectedUserId],
  );
  const [editForm, setEditForm] = useState<EditForm>(() => editFormFromUser(selectedUser));
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [notice, setNotice] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    setCurrentOverview(overview);
    setSelectedUserId((current) => current || overview.users[0]?.id || "");
  }, [overview]);

  useEffect(() => {
    setCreateForm((current) => current.password ? current : { ...current, password: generatedPassword() });
    setPassword((current) => current || generatedPassword());
  }, []);

  useEffect(() => {
    setEditForm(editFormFromUser(selectedUser));
    setPassword(generatedPassword());
  }, [selectedUser]);

  const activeOperatorSessions = currentOverview.operatorSessions.filter((session) => session.status === "active").length;
  const disabledUsers = currentOverview.users.filter((row) => row.banned).length;

  async function refreshOverview() {
    const body = await requestJson<{ overview: AdminOverview }>("/api/studio/admin/users", { method: "GET" });
    setCurrentOverview(body.overview);
    return body.overview;
  }

  async function runAction(action: string, work: () => Promise<void>) {
    setBusy(action);
    setNotice(null);
    try {
      await work();
    } catch (error) {
      setNotice({ tone: "error", text: error instanceof Error ? error.message : "Admin action failed." });
    } finally {
      setBusy(null);
    }
  }

  function handleCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void runAction("create", async () => {
      const body = await requestJson<{ user: AdminUser }>("/api/studio/admin/users", {
        method: "POST",
        body: JSON.stringify(createForm),
      });
      await refreshOverview();
      setSelectedUserId(body.user.id);
      setCreateForm({
        name: "",
        email: "",
        role: "viewer",
        password: generatedPassword(),
        emailVerified: true,
      });
      setNotice({ tone: "success", text: `Created ${body.user.email}.` });
    });
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedUser) return;
    void runAction("save", async () => {
      const body = {
        name: editForm.name,
        email: editForm.email,
        role: editForm.role,
        emailVerified: editForm.emailVerified,
        banned: editForm.disabled,
        banReason: editForm.disabled ? editForm.banReason : null,
        banExpires: null,
      };
      await requestJson<{ user: AdminUser }>(`/api/studio/admin/users/${selectedUser.id}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      });
      await refreshOverview();
      setNotice({ tone: "success", text: `Updated ${editForm.email}.` });
    });
  }

  function handleResetPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedUser) return;
    void runAction("password", async () => {
      await requestJson<{ user: AdminUser }>(`/api/studio/admin/users/${selectedUser.id}/password`, {
        method: "POST",
        body: JSON.stringify({ newPassword: password }),
      });
      await refreshOverview();
      setPassword(generatedPassword());
      setNotice({ tone: "success", text: `Password reset for ${selectedUser.email}.` });
    });
  }

  function handleRevokeSessions() {
    if (!selectedUser) return;
    void runAction("sessions", async () => {
      await requestJson<{ user: AdminUser }>(`/api/studio/admin/users/${selectedUser.id}/sessions`, {
        method: "DELETE",
      });
      await refreshOverview();
      setNotice({ tone: "success", text: `Revoked sessions for ${selectedUser.email}.` });
    });
  }

  return (
    <section>
      <PageHeader
        eyebrow="Admin"
        title="Workspace controls"
        description="Manage Studio accounts, credentials, sessions, and audit activity."
        actions={(
          <Button type="button" variant="outline" onClick={() => void runAction("refresh", async () => { await refreshOverview(); })} disabled={Boolean(busy)}>
            <RefreshCw data-icon="inline-start" />
            Refresh
          </Button>
        )}
      />
      <div className="grid gap-4 p-8">
        <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          <Metric label="Signed in" value={user.name} detail={user.role} tone="blue" />
          <Metric label="Users" value={String(currentOverview.users.length)} detail={`${disabledUsers} disabled`} tone="violet" />
          <Metric label="Operator sessions" value={String(currentOverview.operatorSessions.length)} detail={`${activeOperatorSessions} active`} tone="green" />
          <Metric label="Target" value={manifest.target.name} detail={manifest.target.environment} tone="slate" />
        </section>

        {notice ? (
          <div className={`rounded-lg border px-4 py-3 text-sm ${
            notice.tone === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          }`}>
            {notice.text}
          </div>
        ) : null}

        <section className="grid grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] gap-4 max-2xl:grid-cols-1">
          <Panel>
            <PanelHeader
              title="Users"
              detail={`${currentOverview.users.length} Studio accounts`}
            />
            <div className="max-w-full overflow-x-auto">
              <table className="w-full min-w-[920px] table-fixed border-collapse text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="w-64 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">User</th>
                    <th className="w-44 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">Role</th>
                    <th className="w-32 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">Status</th>
                    <th className="w-32 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">Auth</th>
                    <th className="w-28 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">Sessions</th>
                    <th className="w-40 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">Updated</th>
                    <th className="w-28 border-b border-slate-200 px-4 py-3 font-medium text-slate-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOverview.users.map((row) => {
                    const selected = selectedUser?.id === row.id;
                    return (
                      <tr className={selected ? "bg-slate-50" : "bg-white"} key={row.id}>
                        <td className="border-b border-slate-100 px-4 py-3 align-top">
                          <strong className="block truncate text-slate-950">{row.name}</strong>
                          <span className="mt-1 block truncate text-xs text-slate-500">{row.email}</span>
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 align-top">
                          <Badge variant={row.role === "admin" ? "default" : "outline"}>{roleLabels[row.role]}</Badge>
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 align-top">
                          <Badge variant={row.banned ? "destructive" : "secondary"}>{row.banned ? "Disabled" : "Active"}</Badge>
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 align-top">
                          <span className="grid gap-1 text-xs text-slate-500">
                            <span>{row.emailVerified ? "Verified" : "Unverified"}</span>
                            <span>{row.hasPassword ? "Password" : "No password"}</span>
                          </span>
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{row.activeSessionCount}</td>
                        <td className="border-b border-slate-100 px-4 py-3 align-top text-xs text-slate-500">{formatDateTime(row.updatedAt)}</td>
                        <td className="border-b border-slate-100 px-4 py-3 align-top">
                          <Button type="button" variant={selected ? "secondary" : "outline"} size="sm" onClick={() => setSelectedUserId(row.id)}>
                            {selected ? "Selected" : "Edit"}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Panel>

          <Panel>
            <PanelHeader title="Create user" detail="Provision a Studio login" />
            <form className="grid gap-4 p-5" onSubmit={handleCreate}>
              <TextField id="create-name" label="Name" value={createForm.name} onChange={(value) => setCreateForm((current) => ({ ...current, name: value }))} required />
              <TextField id="create-email" label="Email" type="email" value={createForm.email} onChange={(value) => setCreateForm((current) => ({ ...current, email: value }))} required />
              <RoleSelect value={createForm.role} onValueChange={(role) => setCreateForm((current) => ({ ...current, role }))} />
              <TextField id="create-password" label="Temporary password" value={createForm.password} onChange={(value) => setCreateForm((current) => ({ ...current, password: value }))} required />
              <SwitchField
                id="create-email-verified"
                label="Email verified"
                checked={createForm.emailVerified}
                onCheckedChange={(checked) => setCreateForm((current) => ({ ...current, emailVerified: checked }))}
              />
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" onClick={() => setCreateForm((current) => ({ ...current, password: generatedPassword() }))}>
                  <KeyRound data-icon="inline-start" />
                  Generate
                </Button>
                <Button type="submit" disabled={busy === "create"}>
                  <UserPlus data-icon="inline-start" />
                  Create user
                </Button>
              </div>
            </form>
          </Panel>
        </section>

        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader
              title="User settings"
              detail={selectedUser ? selectedUser.email : "No user selected"}
            />
            {selectedUser ? (
              <form className="grid gap-4 p-5" onSubmit={handleSave}>
                <TextField id="edit-name" label="Name" value={editForm.name} onChange={(value) => setEditForm((current) => ({ ...current, name: value }))} required />
                <TextField id="edit-email" label="Email" type="email" value={editForm.email} onChange={(value) => setEditForm((current) => ({ ...current, email: value }))} required />
                <RoleSelect value={editForm.role} onValueChange={(role) => setEditForm((current) => ({ ...current, role }))} />
                <SwitchField
                  id="edit-email-verified"
                  label="Email verified"
                  checked={editForm.emailVerified}
                  onCheckedChange={(checked) => setEditForm((current) => ({ ...current, emailVerified: checked }))}
                />
                <SwitchField
                  id="edit-disabled"
                  label="Disabled"
                  checked={editForm.disabled}
                  disabled={selectedUser.id === user.id}
                  onCheckedChange={(checked) => setEditForm((current) => ({ ...current, disabled: checked }))}
                />
                {editForm.disabled ? (
                  <TextField id="edit-ban-reason" label="Disable reason" value={editForm.banReason} onChange={(value) => setEditForm((current) => ({ ...current, banReason: value }))} />
                ) : null}
                <Button type="submit" disabled={busy === "save"}>
                  <Save data-icon="inline-start" />
                  Save settings
                </Button>
              </form>
            ) : (
              <div className="p-5 text-sm text-slate-500">No users found.</div>
            )}
          </Panel>

          <Panel>
            <PanelHeader
              title="Password and sessions"
              detail={selectedUser ? `${selectedUser.activeSessionCount} active sessions` : "No user selected"}
            />
            {selectedUser ? (
              <div className="grid gap-5 p-5">
                <form className="grid gap-3" onSubmit={handleResetPassword}>
                  <TextField id="reset-password" label="New temporary password" value={password} onChange={setPassword} required />
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" variant="outline" onClick={() => setPassword(generatedPassword())}>
                      <KeyRound data-icon="inline-start" />
                      Generate
                    </Button>
                    <Button type="submit" disabled={busy === "password"}>
                      <CheckCircle2 data-icon="inline-start" />
                      Reset password
                    </Button>
                  </div>
                </form>
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-950">Active sessions</h3>
                      <p className="mt-1 text-sm text-slate-500">{selectedUser.activeSessionCount} sessions for this user.</p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      disabled={selectedUser.id === user.id || busy === "sessions" || selectedUser.activeSessionCount === 0}
                      onClick={handleRevokeSessions}
                    >
                      <ShieldOff data-icon="inline-start" />
                      Revoke
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 text-sm text-slate-500">No users found.</div>
            )}
          </Panel>
        </section>

        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Credential grants" />
            <DataTable
              columns={["Category", "Label", "Target", "Created"]}
              rows={currentOverview.credentialGrants.map((grant) => [grant.category, grant.label, grant.targetId, formatDateTime(grant.createdAt)])}
              emptyText="No credential grants have been issued."
            />
          </Panel>
          <Panel>
            <PanelHeader title="Operator sessions" />
            <DataTable
              columns={["Title", "Model", "Status", "Updated"]}
              rows={currentOverview.operatorSessions.map((session) => [session.title, session.modelId ?? "-", session.status, formatDateTime(session.updatedAt)])}
              emptyText="No operator sessions yet."
            />
          </Panel>
        </section>

        <Panel>
          <PanelHeader title="Audit trail" />
          <DataTable
            columns={["Action", "Subject", "Target", "Time"]}
            rows={currentOverview.auditEntries.map((entry) => [
              entry.action,
              `${entry.subjectType}${entry.subjectId ? ` / ${entry.subjectId}` : ""}`,
              entry.targetId ?? "-",
              formatDateTime(entry.createdAt),
            ])}
            emptyText="No audit entries yet."
          />
        </Panel>
      </div>
    </section>
  );
}

function RoleSelect(props: { value: StudioRole; onValueChange: (role: StudioRole) => void }) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-slate-700">Role</span>
      <Select value={props.value} onValueChange={(value) => props.onValueChange(value as StudioRole)}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {studioRoles.map((role) => (
              <SelectItem key={role} value={role}>{roleLabels[role]}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </label>
  );
}

function TextField(props: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm" htmlFor={props.id}>
      <span className="font-medium text-slate-700">{props.label}</span>
      <Input
        id={props.id}
        type={props.type ?? "text"}
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </label>
  );
}

function SwitchField(props: {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-3 py-2">
      <label className="text-sm font-medium text-slate-700" htmlFor={props.id}>{props.label}</label>
      <Switch id={props.id} checked={props.checked} disabled={props.disabled} onCheckedChange={props.onCheckedChange} />
    </div>
  );
}

function editFormFromUser(user: AdminUser | null): EditForm {
  return {
    name: user?.name ?? "",
    email: user?.email ?? "",
    role: user?.role ?? "viewer",
    emailVerified: user?.emailVerified ?? false,
    disabled: user?.banned ?? false,
    banReason: user?.banReason ?? "Disabled by Studio admin",
  };
}

async function requestJson<T>(url: string, init: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      ...(init.body ? { "content-type": "application/json" } : {}),
      ...headersRecord(init.headers),
    },
  });
  const body = await response.json().catch(() => ({})) as { error?: string };
  if (!response.ok) throw new Error(body.error ?? `Request failed with ${response.status}`);
  return body as T;
}

function headersRecord(headers: RequestInit["headers"]) {
  if (!headers) return {};
  if (headers instanceof Headers) {
    const record: Record<string, string> = {};
    headers.forEach((value, key) => {
      record[key] = value;
    });
    return record;
  }
  if (Array.isArray(headers)) return Object.fromEntries(headers);
  return headers;
}

function generatedPassword() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@$%";
  const bytes = new Uint8Array(18);
  globalThis.crypto?.getRandomValues(bytes);
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
}
