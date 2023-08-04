import ShowFIles from "@/components/ShowFiles";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="flex h-full justify-center">
      <ShowFIles />
    </main>
  );
}
