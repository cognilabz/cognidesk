import { z } from "zod";

export const StudioRoleSchema = z.enum(["viewer", "dashboard_editor", "operator", "admin"]);
export type StudioRole = z.infer<typeof StudioRoleSchema>;

export const StudioPermissionSchema = z.enum([
  "studio:view",
  "dashboards:edit",
  "dashboards:publish",
  "operator:use",
  "operator:publish_code",
  "admin:manage",
]);
export type StudioPermission = z.infer<typeof StudioPermissionSchema>;

export const permissionsByRole: Record<StudioRole, StudioPermission[]> = {
  viewer: ["studio:view"],
  dashboard_editor: ["studio:view", "dashboards:edit", "dashboards:publish"],
  operator: ["studio:view", "dashboards:edit", "dashboards:publish", "operator:use", "operator:publish_code"],
  admin: ["studio:view", "dashboards:edit", "dashboards:publish", "operator:use", "operator:publish_code", "admin:manage"],
};

export function roleHasPermission(role: StudioRole, permission: StudioPermission) {
  return permissionsByRole[role].includes(permission);
}
