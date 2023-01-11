import UserStats from "@/components/user-stats";
import { unstable_getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await unstable_getServerSession();
  console.log(session?.user);
  return (
    <div className="h-screen  bg-black">
      <UserStats email={session?.user?.email} />
    </div>
  );
}
