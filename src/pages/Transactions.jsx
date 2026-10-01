import { Download, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { transactions } from "../data/mock";
import BankCard from "../components/BankCard";
import SectionTitle from "../components/SectionTitle";

export default function Transactions() {
  const [filter, setFilter] = useState("All Transactions");
  const shown = useMemo(() => filter === "All Transactions" ? transactions : transactions.filter(t => filter === "Income" ? t.amount > 0 : t.amount < 0), [filter]);
  return <div className="space-y-7">
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <section><SectionTitle action="+ Add Card">My Cards</SectionTitle><div className="flex gap-4 overflow-x-auto pb-2"><BankCard card={transactions.length ? {holder:"Eddy Cusuma",balance:"$5,756",number:"3778 •••• •••• 1234",color:"blue"} : {}}/><BankCard card={{holder:"Eddy Cusuma",balance:"$5,756",number:"3778 •••• •••• 1234",color:"white"}}/></div></section>
      <div><SectionTitle>My Expense</SectionTitle><div className="card grid h-[180px] place-items-center p-5"><div className="flex h-28 items-end gap-4">{[40,60,45,72,90,55].map((h,i)=><div key={i} className={`w-7 rounded-t-lg ${i===4?"bg-cyan-400":"bg-slate-200"}`} style={{height:`${h}%`}}/>)}</div></div></div>
    </div>
    <div className="card overflow-hidden">
      <div className="border-b border-slate-100 px-5 pt-5"><div className="flex gap-7 text-xs font-semibold">{["All Transactions","Income","Expense"].map(x=><button key={x} onClick={()=>setFilter(x)} className={`pb-3 ${filter===x?"border-b-2 border-brand text-brand":"text-slate-400"}`}>{x}</button>)}</div></div>
      <div className="hidden overflow-x-auto md:block"><table className="w-full min-w-[760px] text-left text-xs"><thead className="text-[10px] text-slate-400"><tr>{["Description","Transaction ID","Type","Card","Date","Amount","Receipt"].map(h=><th className="px-5 py-4 font-medium" key={h}>{h}</th>)}</tr></thead><tbody>{shown.map((t,i)=><tr key={i} className="border-t border-slate-100"><td className="px-5 py-4 font-medium text-[#26356b]">{t.name}</td><td className="px-5 py-4 text-slate-400">{t.id}</td><td className="px-5 py-4 text-slate-500">{t.type}</td><td className="px-5 py-4 text-slate-500">{t.card}</td><td className="px-5 py-4 text-slate-500">{t.date}</td><td className={`px-5 py-4 font-semibold ${t.amount>0?"text-emerald-400":"text-rose-400"}`}>{t.amount>0?"+":"-"}${Math.abs(t.amount).toLocaleString()}</td><td className="px-5 py-4"><button className="rounded-full border border-slate-200 px-4 py-1.5 text-[10px] text-brand"><Download size={12} className="mr-1 inline"/>Download</button></td></tr>)}</tbody></table></div>
      <div className="space-y-3 p-4 md:hidden">{shown.map((t,i)=><div key={i} className="rounded-xl bg-[#f8f9fc] p-4"><div className="flex justify-between"><b className="text-xs text-[#26356b]">{t.name}</b><span className={t.amount>0?"text-emerald-500":"text-rose-500"}>{t.amount>0?"+":"-"}${Math.abs(t.amount).toLocaleString()}</span></div><div className="mt-2 text-[10px] text-slate-400">{t.type} · {t.date}</div></div>)}</div>
    </div>
  </div>
}
