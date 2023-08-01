import React from "react";
import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { CategoryColumn } from "./components/columns";
import CategoryClient from "./components/client";

interface CategoriesPageProps {
  params: {
    storeId: string;
  };
}

const CategoriesPage = async ({ params: { storeId } }: CategoriesPageProps) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const formattedCategories: CategoryColumn[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    billboardLabel: category.billboard.label,
    createdAt: format(category.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
