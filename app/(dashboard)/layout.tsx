import NavBar from "@/components/navBar";
import Sidebar from "@/components/sideBar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
  const apiLimitCount = 2;

  return (
    <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
            <Sidebar apiLimitCount={apiLimitCount} />
        </div>
        <main className="md:pl-72">
          <NavBar />
          {children}
        </main>
    </div>
  );
}

export default DashboardLayout;