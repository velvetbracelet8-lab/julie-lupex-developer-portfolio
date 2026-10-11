
"use client";

type AdminNavigationProps = {
  role: string;
};

export default function AdminNavigation({
  role,
}: AdminNavigationProps) {
  // Keep the existing prop accepted without rendering navigation.
  void role;

  return null;
}