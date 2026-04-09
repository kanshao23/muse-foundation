import { Shield, FileCheck } from "lucide-react";

interface ComplianceBadgeProps {
  type: "acnc" | "dgr" | "abn";
  value: string;
}

const icons = {
  acnc: Shield,
  dgr: FileCheck,
  abn: Shield,
};

const labels = {
  acnc: "ACNC Registered",
  dgr: "DGR Endorsed",
  abn: "ABN",
};

export function ComplianceBadge({ type, value }: ComplianceBadgeProps) {
  const Icon = icons[type];

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-muse-dark/5 rounded-lg border border-muse-dark/10">
      <Icon className="w-5 h-5 text-muse-gold flex-shrink-0" />
      <div>
        <p className="text-xs font-semibold text-muse-dark uppercase tracking-wide">
          {labels[type]}
        </p>
        <p className="text-sm text-muse-gray">{value}</p>
      </div>
    </div>
  );
}
