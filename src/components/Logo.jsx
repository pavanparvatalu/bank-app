import { CreditCard } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5 text-[#26356b]">
      <CreditCard size={25} strokeWidth={2.2} className="text-brand" />
      <span className="text-[21px] font-extrabold tracking-[-.7px]">BankDash.</span>
    </div>
  );
}
