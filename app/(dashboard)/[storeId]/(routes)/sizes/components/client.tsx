"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

import { SizeColumn, columns } from "./columns";

interface SizeClientProps {
  data: SizeColumn[];
}

const SizeClient = ({ data }: SizeClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Sizes (${data.length})`}
          description={"Manage sizes or your store"}
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={data} searchKey='name' />
      </div>
      <Heading title={"API"} description={"API calls for Sizes"} />
      <Separator />
      <ApiList entityName={"sizes"} entityIdName={"sizeId"} />
    </>
  );
};

export default SizeClient;
