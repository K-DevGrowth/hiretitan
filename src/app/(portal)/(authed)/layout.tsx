import { Suspense } from "react";
import { requireCandidate } from "@/lib/auth/guards";

export default function AuthedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <CandidateOnly>{children}</CandidateOnly>
    </Suspense>
  );
}

async function CandidateOnly({ children }: { children: React.ReactNode }) {
  await requireCandidate();
  return <>{children}</>;
}
