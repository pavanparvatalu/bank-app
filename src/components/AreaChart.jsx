export default function AreaChart() {
  return (
    <div className="card p-5">
      <h2 className="mb-4 font-semibold text-[#26356b]">Balance History</h2>
      <div className="relative h-[210px] overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-70"/>
        <svg viewBox="0 0 700 210" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#3d48ff" stopOpacity=".22"/><stop offset="1" stopColor="#3d48ff" stopOpacity="0"/></linearGradient></defs>
          <path d="M0 190 C45 125 72 145 105 150 S160 90 205 110 S245 155 280 90 S330 170 370 120 S420 30 455 95 S520 150 550 110 S590 165 620 75 S670 80 700 55 V210 H0Z" fill="url(#fill)"/>
          <path d="M0 190 C45 125 72 145 105 150 S160 90 205 110 S245 155 280 90 S330 170 370 120 S420 30 455 95 S520 150 550 110 S590 165 620 75 S670 80 700 55" fill="none" stroke="#3030f5" strokeWidth="3"/>
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-400"><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span></div>
      </div>
    </div>
  );
}
