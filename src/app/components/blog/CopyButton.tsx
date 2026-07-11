"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button onClick={copy} className="rounded-md p-2 hover:bg-zinc-800">
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
}
