import { motion } from "framer-motion";

export default function StatCard({ icon, label, value, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-500",
    pink: "bg-pink-50 text-pink-500",
    orange: "bg-orange-50 text-orange-500",
    cyan: "bg-cyan-50 text-cyan-500",
  };
  return (
    <motion.div whileHover={{ y: -2 }} className="card flex items-center gap-4 p-5">
      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tones[tone]}`}>{icon}</div>
      <div><div className="text-xs text-slate-400">{label}</div><div className="mt-1 text-xl font-bold text-[#26356b]">{value}</div></div>
    </motion.div>
  );
}
