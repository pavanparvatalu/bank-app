import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const titles = {
  "/": "Overview", "/transactions": "Transactions", "/accounts": "Accounts",
  "/investments": "Investments", "/cards": "Credit Cards", "/loans": "Loans",
  "/services": "Services", "/settings": "Setting"
};

export default function PageShell({ children }) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  return (
    <div className="min-h-screen dashboard-bg">
      <Sidebar open={menu} onClose={() => setMenu(false)} />
      <div className="lg:pl-[250px]">
        <Header onMenu={() => setMenu(true)} title={titles[location.pathname] || "BankDash"} />
        <main className="mx-auto max-w-[1440px] p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
