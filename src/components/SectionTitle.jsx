export default function SectionTitle({ children, action }) {
  return <div className="mb-4 flex items-center justify-between"><h2 className="text-[15px] font-semibold text-[#26356b]">{children}</h2>{action && <button className="text-xs font-semibold text-brand">{action}</button>}</div>;
}
