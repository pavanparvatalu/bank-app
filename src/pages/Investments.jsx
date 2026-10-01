import { TrendingUp, Coins, Repeat2 } from "lucide-react";
import StatCard from "../components/StatCard";
import SectionTitle from "../components/SectionTitle";
import AreaChart from "../components/AreaChart";
import { investments } from "../data/mock";

export default function Investments() {
  return <div className="space-y-7">
    <div className="grid gap-4 lg:grid-cols-3">
      <StatCard icon={<Coins/>} label="Total Invested Amount" value="$150,000" tone="cyan"/>
      <StatCard icon={<TrendingUp/>} label="Number of Investments" value="1,250" tone="pink"/>
      <StatCard icon={<Repeat2/>} label="Rate of Return" value="+5.80%" tone="blue"/>
    </div>
    <div className="grid gap-6 xl:grid-cols-2"><div className="card p-5"><SectionTitle>Yearly Total Investment</SectionTitle><AreaChart/></div><div className="card p-5"><SectionTitle>Monthly Revenue</SectionTitle><AreaChart/></div></div>
    <div className="grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
      <div className="card p-5"><SectionTitle>My Investment</SectionTitle>{investments.map((x,i)=><div key={x.name} className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0"><div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 font-bold">{x.name[0]}</div><div className="min-w-0 flex-1"><b className="text-xs text-[#26356b]">{x.name}</b><div className="text-[10px] text-slate-400">{x.category}</div></div><div className="text-right"><b className="text-xs text-[#26356b]">{x.value}</b><div className={x.return.startsWith("+")?"text-[10px] text-emerald-400":"text-[10px] text-rose-400"}>{x.return}</div></div></div>)}</div>
      <div className="card p-5"><SectionTitle>Trending Stock</SectionTitle>{["Trivago","Canon","Uber Food","Nokia","Tiktok"].map((x,i)=><div className="flex justify-between border-b border-slate-100 py-4 text-xs last:border-0" key={x}><span>{String(i+1).padStart(2,"0")}.</span><b className="text-[#26356b]">{x}</b><span>${[520,480,350,940,670][i]}</span><span className={i===2||i===4?"text-rose-400":"text-emerald-400"}>{["+5%","+10%","-3%","+2%","-12%"][i]}</span></div>)}</div>
    </div>
  </div>
}
