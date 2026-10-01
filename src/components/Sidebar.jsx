import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, ReceiptText, UserRound, BarChart3, CreditCard,
  HandCoins, Wrench, Settings, ShieldCheck, X
} from "lucide-react";
import Logo from "./Logo";

const links = [
  ["/", "Dashboard", LayoutDashboard],
  ["/transactions", "Transactions", ReceiptText],
  ["/accounts", "Accounts", UserRound],
  ["/investments", "Investments", BarChart3],
  ["/cards", "Credit Cards", CreditCard],
  ["/loans", "Loans", HandCoins],
  ["/services", "Services", Wrench],
  ["/settings", "Setting", Settings],
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <button aria-label="Close menu" onClick={onClose} className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden" />}
      <aside className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-slate-100 bg-white px-6 py-7 transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-12 flex items-center justify-between">
          <Logo />
          <button onClick={onClose} className="rounded-lg p-1 text-slate-400 lg:hidden"><X size={20}/></button>
        </div>
        <nav className="space-y-2">
          {links.map(([to, label, Icon]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={onClose}
              className={({ isActive }) => `group relative flex items-center gap-4 rounded-xl px-2.5 py-3 text-[15px] font-medium transition ${isActive ? "text-brand" : "text-[#8d95a7] hover:bg-slate-50 hover:text-[#26356b]"}`}
            >
              {({ isActive }) => <>
                {isActive && <span className="absolute -left-6 top-0 h-full w-[4px] rounded-r-full bg-brand" />}
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.9} />
                <span>{label}</span>
              </>}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-[#f5f7fb] p-4 text-xs text-slate-400">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#26356b]"><ShieldCheck size={16}/> Secure banking</div>
          Your dashboard is protected with modern account security.
        </div>
      </aside>
    </>
  );
}
