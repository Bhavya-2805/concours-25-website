import { ArrowLeft } from "lucide-react";

export function EventNotFound({ title, message }: { title: string; message: string }) {
  return (
    <div className="min-h-[80vh] bg-stage flex items-center justify-center px-6 pt-28 pb-20">
      <div className="text-center max-w-xl">
        <div className="font-display font-black text-outline-red text-[9rem] leading-none">404</div>
        <h1 className="mt-2 font-display font-black text-5xl text-chrome">{title}</h1>
        <p className="mt-4 text-lg text-[#c9cbce]/70">{message}</p>
        <button type="button" className="btn btn-primary mt-8" onClick={() => window.history.back()}>
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    </div>
  );
}
