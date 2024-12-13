import { Grid } from "@/components/Grid";
import { TransferForm } from "@/components/TransferForm";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <TransferForm />
      <Grid />
    </div>

  );
}
