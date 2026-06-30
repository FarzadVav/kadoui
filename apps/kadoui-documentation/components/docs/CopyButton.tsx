"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

type CopyButtonPropsT = {
  text: string;
  className?: string;
};

export function CopyButton({ text, className }: CopyButtonPropsT) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className={`btn btn-ghost btn-foreground btn-square btn-xs ${className ?? ""}`}
      title={copied ? "Copied!" : "Copy code"}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}
