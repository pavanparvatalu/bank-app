import { BriefcaseBusiness, LockKeyhole, ShoppingBag, ShieldCheck, PiggyBank } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const services = [
  ["Business loans","It is a long established",BriefcaseBusiness,"pink"],
  ["Checking accounts","It is a long established",PiggyBank,"orange"],
  ["Savings accounts","It is a long established",PiggyBank,"pink"],
  ["Debit and credit cards","It is a long established",ShieldCheck,"blue"],
  ["Life insurance","It is a long established",ShieldCheck,"cyan"],
  ["Business loans","It is a long established",BriefcaseBusiness,"pink"],
];

export default function Services() {
  return <div className="space-y-7">
    <div className="grid gap-4 md:grid-cols-3">{[["Life Insurance","Unlimited protection",ShieldCheck,"cyan"],["Shopping","Buy. Think. Grow.",ShoppingBag,"orange"],["Safety","We are your allies",ShieldCheck,"cyan"]].map(([a,b,I,c])=><div className="card flex items-center gap-4 p-5" key={a}><div className={`grid h-12 w-12 place-items-center rounded-full bg-${c}-50 text-${c}-500`}><I/></div><div><b className="text-sm text-[#26356b]">{a}</b><p className="text-[10px] text-slate-400">{b}</p></div></div>)}</div>
    <div className="card p-5"><SectionTitle>Bank Services List</SectionTitle>{services.map(([name,desc,I,c],i)=><div className="grid gap-3 border-b border-slate-100 py-4 last:border-0 md:grid-cols-[230px_1fr_1fr_1fr_110px] md:items-center" key={i}><div className="flex items-center gap-3"><div className={`grid h-10 w-10 place-items-center rounded-full bg-${c}-50 text-${c}-500`}><I size={18}/></div><div><b className="text-xs text-[#26356b]">{name}</b><p className="text-[9px] text-slate-400">{desc}</p></div></div><span className="hidden text-[10px] text-slate-400 md:block">Lorem Ipsum</span><span className="hidden text-[10px] text-slate-400 md:block">Many publishing</span><span className="hidden text-[10px] text-slate-400 md:block">Lorem Ipsum</span><button className="w-fit rounded-full border border-slate-300 px-4 py-2 text-[10px] font-semibold text-brand">View Details</button></div>)}</div>
  </div>
}
