import { Apple, LockKeyhole, Smartphone } from "lucide-react";
import BankCard from "../components/BankCard";
import SectionTitle from "../components/SectionTitle";

export default function Cards() {
  return <div className="space-y-7">
    <section><SectionTitle>My Cards</SectionTitle><div className="flex gap-4 overflow-x-auto pb-2">{["blue","indigo","white"].map((c,i)=><BankCard key={c} card={{holder:"Eddy Cusuma",balance:"$5,756",number:"3778 •••• •••• 1234",color:c}}/>)}</div></section>
    <div className="grid gap-6 xl:grid-cols-[.7fr_1.3fr]">
      <div className="card p-5"><SectionTitle>Card Expense Statistics</SectionTitle><div className="mx-auto grid h-44 w-44 place-items-center rounded-full" style={{background:"conic-gradient(#25d7c8 0 25%, #ffb01c 25% 45%, #ff5b82 45% 70%, #3030f5 70% 100%)"}}><div className="grid h-24 w-24 place-items-center rounded-full bg-white text-xs font-bold">Expenses</div></div><div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-slate-500"><span>● DBL Bank</span><span>● BRC Bank</span><span>● ABM Bank</span><span>● MCP Bank</span></div></div>
      <div className="card p-5"><SectionTitle>Card List</SectionTitle>{["DBL Bank","BRC Bank","ABM Bank"].map((x,i)=><div key={x} className="flex items-center gap-3 border-b border-slate-100 py-4 last:border-0"><div className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-brand"><Smartphone size={17}/></div><div className="flex-1 text-xs"><b className="text-[#26356b]">{x}</b><div className="text-[10px] text-slate-400">Secondary · •••• 5600</div></div><button className="text-[10px] font-semibold text-brand">View Details</button></div>)}</div>
    </div>
    <div className="grid gap-6 lg:grid-cols-[1fr_250px]">
      <div className="card p-6"><SectionTitle>Add New Card</SectionTitle><p className="max-w-2xl text-xs leading-6 text-slate-400">Credit cards can be used to purchase goods and services or obtain cash advances. Add your card details below.</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><input className="rounded-xl border border-slate-200 px-4 py-3 text-xs outline-none" placeholder="Card Type"/><input className="rounded-xl border border-slate-200 px-4 py-3 text-xs outline-none" placeholder="Name On Card"/><input className="rounded-xl border border-slate-200 px-4 py-3 text-xs outline-none" placeholder="Card Number"/><input className="rounded-xl border border-slate-200 px-4 py-3 text-xs outline-none" placeholder="Expiration Date"/></div><button className="mt-4 rounded-xl bg-brand px-6 py-3 text-xs font-semibold text-white">Add Card</button></div>
      <div className="card p-5"><SectionTitle>Card Setting</SectionTitle>{[[LockKeyhole,"Block Card"],[Smartphone,"Change Pin Code"],[Apple,"Add to Apple Pay"]].map(([I,t])=><button className="flex w-full items-center gap-3 border-b border-slate-100 py-4 text-left last:border-0" key={t}><I size={19} className="text-brand"/><span className="text-xs font-semibold text-[#26356b]">{t}</span></button>)}</div>
    </div>
  </div>
}
