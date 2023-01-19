import { unstable_getServerSession } from "next-auth/next";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import SignOut from "@/components/sign-out";
import PrayerForm from "@/components/prayer-form";

export default async function Profile() {
  const session = await unstable_getServerSession();
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <PrayerForm />
      </div>
    </div>
  )
}

