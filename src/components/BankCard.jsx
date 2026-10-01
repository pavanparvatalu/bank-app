export default function BankCard({ card }) {
  const dark = card.color !== "white";
  return (
    <div className={`relative h-[180px] min-w-[270px] overflow-hidden rounded-[18px] p-6 ${card.color === "blue" ? "bg-gradient-to-br from-[#4d8dff] to-[#2d58f5]" : card.color === "indigo" ? "bg-gradient-to-br from-[#4848f8] to-[#2d2be7]" : "border border-slate-200 bg-white"}`}>
      <div className={`text-[11px] ${dark ? "text-white/75" : "text-slate-400"}`}>Balance</div>
      <div className={`mt-1 text-[19px] font-bold ${dark ? "text-white" : "text-[#26356b]"}`}>{card.balance}</div>
      <div className="absolute right-5 top-6 text-white/80">▣</div>
      <div className={`absolute bottom-11 left-6 text-[9px] uppercase ${dark ? "text-white/75" : "text-slate-400"}`}>Card Holder</div>
      <div className={`absolute bottom-11 right-6 text-[9px] uppercase ${dark ? "text-white/75" : "text-slate-400"}`}>Valid Thru</div>
      <div className={`absolute bottom-6 left-6 text-[12px] font-medium ${dark ? "text-white" : "text-[#26356b]"}`}>{card.holder}</div>
      <div className={`absolute bottom-6 right-6 text-[12px] ${dark ? "text-white" : "text-[#26356b]"}`}>12/22</div>
      <div className={`absolute bottom-0 left-0 right-0 border-t px-6 py-3 text-[14px] tracking-wider ${dark ? "border-white/10 text-white" : "border-slate-100 text-[#26356b]"}`}>{card.number}</div>
    </div>
  );
}
