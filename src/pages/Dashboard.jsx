import { ArrowDownLeft, ArrowUpRight, CircleDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { cards } from "../data/mock";
import BankCard from "../components/BankCard";
import SectionTitle from "../components/SectionTitle";
import BarChart from "../components/BarChart";
import AreaChart from "../components/AreaChart";

export default function Dashboard() {
  return (
    <div className="space-y-7">
      <div className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
        <section>
          <SectionTitle action="See All">My Cards</SectionTitle>
          <div className="flex gap-4 overflow-x-auto pb-2">{cards.slice(0,2).map((c,i)=><BankCard key={i} card={c}/>)}</div>
        </section>
        <section>
          <SectionTitle>Recent Transaction</SectionTitle>
          <div className="card space-y-2 p-4">
            {[
              ["Deposit from my Card","28 January 2021","-$850"],
              ["Deposit Paypal","25 January 2021","+$2,500"],
              ["Jemi Wilson","21 January 2021","+$5,400"],
            ].map(([name,date,amount],i)=><motion.div whileHover={{x:2}} key={name} className="flex items-center gap-3 rounded-xl p-2 hover:bg-slate-50">
              <div className={`grid h-10 w-10 place-items-center rounded-full ${i===0?"bg-orange-50 text-orange-500":i===1?"bg-blue-50 text-blue-500":"bg-cyan-50 text-cyan-500"}`}><CircleDollarSign size={18}/></div>
              <div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold text-[#26356b]">{name}</div><div className="text-[10px] text-slate-400">{date}</div></div>
              <div className={`text-xs font-semibold ${amount.startsWith("+")?"text-emerald-400":"text-rose-400"}`}>{amount}</div>
            </motion.div>)}
          </div>
        </section>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.55fr_1fr]">
        <BarChart/>
        <div className="card p-5">
          <SectionTitle>Expense Statistics</SectionTitle>
          <div className="mx-auto flex h-[210px] max-w-[250px] items-center justify-center">
            <div className="relative h-44 w-44 rounded-full" style={{background:"conic-gradient(#3030f5 0 35%, #ff12d7 35% 55%, #ff9d19 55% 70%, #30345f 70% 100%)"}}>
              <div className="absolute inset-10 grid place-items-center rounded-full bg-white text-center"><b className="text-lg text-[#26356b]">100%</b><span className="text-[9px] text-slate-400">Total</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500"><span>● Entertainment 30%</span><span>● Bills 15%</span><span>● Investment 20%</span><span>● Others 35%</span></div>
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="card p-5">
          <SectionTitle>Quick Transfer</SectionTitle>
          <div className="flex gap-5 overflow-x-auto pb-3">
            {["Livia Bator","Randy Press","Workman"].map((n,i)=><div className="min-w-[90px] text-center" key={n}><div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full bg-slate-200 text-xs font-bold text-slate-500">{n.split(" ").map(x=>x[0]).join("")}</div><div className="text-[10px] text-slate-500">{n}</div></div>)}
          </div>
          <div className="mt-3 flex items-center gap-2"><span className="text-xs text-slate-400">Write Amount</span><input className="min-w-0 flex-1 rounded-full bg-[#f5f7fb] px-4 py-2 text-xs outline-none" value="$525.50" readOnly/><button className="rounded-full bg-brand px-5 py-2 text-xs font-semibold text-white">Send ↗</button></div>
        </div>
        <AreaChart/>
      </div>
    </div>
  );
}
