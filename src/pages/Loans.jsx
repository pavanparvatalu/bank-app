import { BriefcaseBusiness, Building2, HandCoins, Wrench } from "lucide-react";
import { loans } from "../data/mock";
import SectionTitle from "../components/SectionTitle";

export default function Loans() {
  return <div className="space-y-7">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[
      ["Personal Loans","$50,000",HandCoins,"blue"],["Corporate Loans","$100,000",BriefcaseBusiness,"orange"],["Business Loans","$500,000",Building2,"pink"],["Custom Loans","Choose Money",Wrench,"cyan"]
    ].map(([a,b,I,t])=><div className="card flex items-center gap-4 p-5" key={a}><div className={`grid h-12 w-12 place-items-center rounded-full bg-${t}-50 text-${t}-500`}><I/></div><div><div className="text-[10px] text-slate-400">{a}</div><b className="text-sm text-[#26356b]">{b}</b></div></div>)}</div>
    <div className="card overflow-hidden p-5"><SectionTitle>Active Loans Overview</SectionTitle><div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-xs"><thead className="text-[10px] text-slate-400"><tr>{["SL No","Loan Money","Left to repay","Duration","Interest rate","Installment",""].map(h=><th className="px-3 py-4 font-medium" key={h}>{h}</th>)}</tr></thead><tbody>{loans.map((r,i)=><tr className="border-t border-slate-100" key={i}>{r.map((v,j)=><td className="px-3 py-4 text-slate-500" key={j}>{v}</td>)}<td><button className="rounded-full border border-brand px-4 py-1.5 text-[10px] font-semibold text-brand">Repay</button></td></tr>)}<tr className="border-t border-slate-100 font-semibold text-rose-500"><td className="px-3 py-4">Total</td><td className="px-3 py-4">$1,250,000</td><td className="px-3 py-4">$750,000</td><td colSpan="2"></td><td className="px-3 py-4">$50,000 / month</td></tr></tbody></table></div></div>
  </div>
}
