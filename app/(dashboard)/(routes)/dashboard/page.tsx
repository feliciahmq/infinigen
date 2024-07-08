import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard page</p>
      <UserButton />
    </div>
  );
}

export default DashboardPage;