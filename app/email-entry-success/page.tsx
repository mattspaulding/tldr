import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between bg-slate-900">
      <div className="flex items-center justify-center mb-auto h-screen">
        <main className="content-center max-w-xl">
          <h1 className="text-center text-slate-100 text-2xl">Success!</h1>
          <div className="text-slate-400">Go back <Link className="text-slate-100 underline" href={'/'}>home</Link></div>
        </main>
      </div>
    </div>
  );
}
