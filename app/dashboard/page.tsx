import PageHeader from "@/components/page-header";
import SignOut from "@/components/sign-out";
import UserStats from "@/components/user-stats";
import { unstable_getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await unstable_getServerSession();
  return (
    <div>
      <PageHeader />
      <UserStats email={session?.user?.email} />
      <SignOut />
    </div>
  );
}
