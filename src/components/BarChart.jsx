export default function BarChart() {
  const values = [68, 48, 62, 90, 45, 72, 76];
  const deposits = [35, 22, 38, 56, 31, 43, 52];
  return (
    <div className="card p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-semibold text-[#26356b]">Weekly Activity</h2>
        <div className="flex gap-4 text-[11px] text-slate-400"><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-brand"/>Deposit</span><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-pink-400"/>Withdraw</span></div>
      </div>
      <div className="flex h-[210px] items-end justify-between gap-3 border-b border-slate-100 px-2">
        {values.map((v, i) => <div key={i} className="flex h-full flex-1 items-end justify-center gap-1">
          <div className="w-3 rounded-t-md bg-brand" style={{height: `${v}%`}}/>
          <div className="w-3 rounded-t-md bg-cyan-400" style={{height: `${deposits[i]}%`}}/>
        </div>)}
      </div>
      <div className="mt-3 flex justify-between px-1 text-[11px] text-slate-400">{["Sat","Sun","Mon","Tue","Wed","Thu","Fri"].map(d => <span key={d}>{d}</span>)}</div>
    </div>
  );
}
