import { ArrowDownToLine, PiggyBank, WalletCards } from "lucide-react";
import { transactions } from "../data/mock";
import StatCard from "../components/StatCard";
import SectionTitle from "../components/SectionTitle";
import BankCard from "../components/BankCard";
import BarChart from "../components/BarChart";

export default function Accounts() {
  return <div className="space-y-7">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard icon={<WalletCards/>} label="My Balance" value="$12,750" tone="orange"/>
      <StatCard icon={<ArrowDownToLine/>} label="Income" value="$5,600" tone="blue"/>
      <StatCard icon={<ArrowDownToLine/>} label="Expense" value="$3,460" tone="pink"/>
      <StatCard icon={<PiggyBank/>} label="Total Saving" value="$7,920" tone="cyan"/>
    </div>
    <div className="grid gap-6 xl:grid-cols-[1.45fr_.65fr]">
      <div className="card p-5"><SectionTitle>Last Transaction</SectionTitle>{transactions.slice(0,3).map((t,i)=><div className="flex items-center gap-3 border-b border-slate-100 py-4 last:border-0" key={i}><div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500">{i===0?"S":i===1?"M":"E"}</div><div className="flex-1"><b className="text-xs text-[#26356b]">{t.name}</b><p className="text-[10px] text-slate-400">{t.date}</p></div><span className={t.amount>0?"text-emerald-400":"text-rose-400"}>{t.amount>0?"+":"-"}${Math.abs(t.amount)}</span></div>)}</div>
      <div><SectionTitle action="See All">My Card</SectionTitle><BankCard card={{holder:"Eddy Cusuma",balance:"$5,756",number:"3778 •••• •••• 1234",color:"blue"}}/></div>
    </div>
    <BarChart/>
  </div>
}
