import Sidebar from "./components/Sidebar";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh justify-center pb-20">
      <div className="flex w-full justify-center">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
