import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";

export const P2PTransation = ({
  p2pTransfers,
  id,
}: {
  p2pTransfers: any[];
  id: string;
}) => {
  console.log(p2pTransfers);
  console.log(id);
  return (
    <Center>
      <Card title="Transfer money to your friend">
        {p2pTransfers.map((t: any) => (
          <div className="flex justify-between mt-2 items-start" key={t.id}>
            {t.toUserId === Number(id) ? (
              <div className="flex justify-between mb-2 w-full">
                <div>
                  <div className="text-sm text-green-600">Received INR</div>
                  <div className="text-slate-600 text-xs">
                    {t.timestamp.toDateString()}
                  </div>
                </div>
                <div className="flex flex-col justify-center text-green-600">
                  + Rs {t.amount / 100}
                </div>
              </div>
            ) : (
              <div className="flex justify-between mb-2 w-full">
                <div>
                  <div className="text-sm text-red-600">Sent INR</div>
                  <div className="text-slate-600 text-xs">
                    {t.timestamp.toDateString()}
                  </div>
                </div>
                <div className="flex flex-col justify-center text-red-600">
                  - Rs {t.amount / 100}
                </div>
              </div>
            )}
          </div>
        ))}
      </Card>
    </Center>
  );
};
