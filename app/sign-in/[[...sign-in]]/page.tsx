import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="m-8">
        <SignIn />
      </div>
    </div>
  );
}
