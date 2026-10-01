import { Bell, Menu, Search, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Header({ onMenu, title }) {
  return (
    <header className="sticky top-0 z-30 flex h-[78px] items-center justify-between border-b border-slate-100 bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-10">
      <div className="flex items-center gap-4">
        <button onClick={onMenu} className="rounded-xl p-2 text-slate-500 hover:bg-slate-50 lg:hidden"><Menu /></button>
        <h1 className="hidden text-[22px] font-bold text-[#26356b] sm:block">{title}</h1>
      </div>
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden h-11 w-[250px] items-center gap-2 rounded-full bg-[#f5f7fb] px-4 text-slate-400 md:flex">
          <Search size={17}/><input className="w-full bg-transparent text-sm outline-none" placeholder="Search for something"/>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-[#f5f7fb] text-slate-500"><Settings2 size={18}/></button>
        <button className="relative grid h-10 w-10 place-items-center rounded-full bg-[#f5f7fb] text-slate-500"><Bell size={18}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500"/></button>
        <motion.div whileHover={{ scale: 1.04 }} className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-amber-200 to-slate-300">
          <div className="grid h-full place-items-center text-sm font-bold text-white">EC</div>
        </motion.div>
      </div>
    </header>
  );
}
