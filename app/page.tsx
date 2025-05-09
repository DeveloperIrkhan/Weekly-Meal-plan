import Link from "next/link";
import { BiSolidDish } from "react-icons/bi";
import { MdManageAccounts, MdOutlineRoomPreferences } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <section className="w-screen h-2/4 bg-white flex flex-col justify-center items-center gap-y-3">
        <p className="text-5xl font-bold">Personalized AI Meal Plans</p>
        <p className="text-xl font-semibold">
          Let Our AI decide, You Focus on Cooking and enjoying!
        </p>
        <Link href={"/auth"}
          className="bg-green-400 px-4 py-2 rounded-xl text-white duration-300 transition 
        hover:translate-y-2 hover:bg-white hover:text-green-400 hover:border hover:border-green-400
        hover:shadow-[0_0_25px_rgba(34,197,94,0.7)]"
        >
          Get Started
        </Link>
      </section>
      <section className="bg-black text-white py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-gray-400 mt-2">
            Follow these simple steps to get your personalized meal plan
          </p>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="flex flex-col items-center text-center group hover:cursor-pointer">
              <div className="bg-green-500 group-hover:bg-white rounded-full p-4 mb-4">
                <MdManageAccounts
                  size={25}
                  className="group-hover:text-green-600 text-lg transition-colors duration-400"
                />
              </div>
              <h3 className="text-xl font-semibold transition group-hover:translate-y-2 duration-300 ">Create an Account</h3>
              <p className="text-gray-400 mt-2 transition group-hover:translate-y-2 group-hover:fontbold duration-300">
                Sign up or sign in to access your personalized meal plans.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group hover:cursor-pointer">
              <div className="bg-green-500 group-hover:bg-white rounded-full p-4 mb-4">
                <MdOutlineRoomPreferences
                  size={25}
                  className="group-hover:text-green-600 text-lg transition-colors duration-400"
                />
              </div>
              <h3 className="text-xl font-semibold transition group-hover:translate-y-2 duration-300 ">Set Your Preferences</h3>
              <p className="text-gray-400 mt-2 transition group-hover:translate-y-2 group-hover:fontbold duration-300">
                Input your dietary preferences and goals to tailor your meal
                plans.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group hover:cursor-pointer ">
              <div className="bg-green-500 group-hover:bg-white rounded-full p-4 mb-4">
                <BiSolidDish
                  size={25}
                  className="group-hover:text-green-600 text-lg transition-colors duration-400"
                />
              </div>
              <h3 className="text-xl font-semibold transition group-hover:translate-y-2 duration-300 ">Receive Your Meal Plan</h3>
              <p className="text-gray-400 mt-2 transition group-hover:translate-y-2 group-hover:fontbold duration-300">
                Get your customized meal plan delivered weekly to your account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
