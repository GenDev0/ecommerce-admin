import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { Color } from "@prisma/client";
import { ColorColumn } from "./components/columns";
import ColorClient from "./components/client";

interface ColorsPageProps {
  params: {
    storeId: string;
  };
}

const ColorsPage = async ({ params: { storeId } }: ColorsPageProps) => {
  const colors: Color[] = await prismadb.color.findMany({
    where: {
      storeId,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedColors: ColorColumn[] = colors.map((color) => ({
    id: color.id,
    name: color.name,
    value: color.value,
    createdAt: format(color.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
