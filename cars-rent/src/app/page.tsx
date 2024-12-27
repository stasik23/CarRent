import { Grid } from "@/components/Grid";
import { TransferForm } from "@/components/TransferForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <div className="p-20 flex justify-end text-sm text-blue-700">
        <Link href={'/category'}>View All</Link>
      </div>
      <TransferForm />
      <Grid />
    </div>

  );
}
