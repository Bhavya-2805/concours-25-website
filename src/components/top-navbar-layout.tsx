import { TopNavbar } from "./top-navbar";

interface TopNavbarLayoutProps {
  children: React.ReactNode;
}

export function TopNavbarLayout({ children }: TopNavbarLayoutProps) {
  return (
    <div className="min-h-screen w-full">
      <TopNavbar />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}