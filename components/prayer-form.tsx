"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PrayerForm() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);

        fetch("/api/prayers/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title: e.currentTarget.prayerTitle.value,
            text: e.currentTarget.text.value,
          }),
        }).then(async (res) => {
          setLoading(false);
          if (res.status === 200) {
            toast.success("Account created! Redirecting to login...");
          } else {
            toast.error(await res.text());
          }
        });
      }
      }
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label htmlFor="prayerTitle" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="prayerTitle"
            id="prayerTitle"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Your title"
          />
        </div>
      </div>
      <div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
          Add your Content
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name="text"
            id="text"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={''}
          />
        </div>
        <div className='flex justify-end py-4'>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
