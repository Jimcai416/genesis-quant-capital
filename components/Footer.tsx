export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="container-std py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-2">
          <div>© {new Date().getFullYear()} Genesis Quant Capital Ltd.</div>
          <div>Registered in England & Wales • Company No. 16749769</div>
          <div className="text-xs">
            Genesis Quant Capital Ltd does not offer investment services to the public. Information is for educational and informational purposes only.
          </div>
        </div>
      </div>
    </footer>
  );
}
