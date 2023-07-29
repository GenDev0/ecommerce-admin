import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params: { storeId },
}: DashboardPageProps) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });

  return <div>This is the Dashboard for {store?.name}</div>;
};

export default DashboardPage;
