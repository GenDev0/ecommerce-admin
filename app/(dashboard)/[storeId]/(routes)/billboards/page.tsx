import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import BillboardClient from "./components/client";
import { Billboard } from "@prisma/client";
import { BillboardColumn } from "./components/columns";

interface BillBoardsPageProps {
  params: {
    storeId: string;
  };
}

const BillBoardsPage = async ({ params: { storeId } }: BillBoardsPageProps) => {
  const billboards: Billboard[] = await prismadb.billboard.findMany({
    where: {
      storeId,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map(
    (billboard) => ({
      id: billboard.id,
      label: billboard.label,
      createdAt: format(billboard.createdAt, "MMMM do, yyyy"),
    })
  );

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillBoardsPage;
