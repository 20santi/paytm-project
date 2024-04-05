import prisma from "@repo/db/client";
import { SendCard } from "../../../components/SendCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { P2PTransation } from "../../../components/P2PTransaction";

export default async function p2p() {
  const session = await getServerSession(authOptions);
  const p2pTransfers = await prisma.p2pTransfer.findMany({
    where: {
      OR: [
        { fromUserId: Number(session.user.id) },
        { toUserId: Number(session.user.id) },
      ],
    },
  });

  return (
    <div className="w-full flex gap-x-10 items-center justify-center">
      <div className="">
        <SendCard />
      </div>
      <div className="">
        <P2PTransation p2pTransfers={p2pTransfers} id={session.user.id}/>
      </div>
    </div>
  );
}
