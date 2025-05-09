import { SignUp } from "@clerk/nextjs";
export default function Auth() {
  return (
    <div className="flex justify-center items-center p-4">
      <SignUp signInFallbackRedirectUrl={"/subscribe"} />
    </div>
  );
}
