import { requirePermission } from "@/lib/auth/guards";

const page = async () => {
  await requirePermission({ interview: ["read"] });
  return <div>page</div>;
};

export default page;
