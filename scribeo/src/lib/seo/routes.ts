type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

/** Route manifest — drives sitemap. New routes added here update it automatically. */
export const ROUTES = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}>;
