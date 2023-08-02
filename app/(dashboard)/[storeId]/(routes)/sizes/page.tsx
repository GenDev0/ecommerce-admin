import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import BillboardClient from "./components/client";
import { Size } from "@prisma/client";
import { SizeColumn } from "./components/columns";
import SizeClient from "./components/client";

interface SizesPageProps {
  params: {
    storeId: string;
  };
}

const SizesPage = async ({ params: { storeId } }: SizesPageProps) => {
  const sizes: Size[] = await prismadb.size.findMany({
    where: {
      storeId,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedSizes: SizeColumn[] = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
