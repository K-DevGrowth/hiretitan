import { requirePermission } from "@/lib/auth/guards";

const page = async () => {
  await requirePermission({ user: ["list"] });
  return <div>page</div>;
};

export default page;
