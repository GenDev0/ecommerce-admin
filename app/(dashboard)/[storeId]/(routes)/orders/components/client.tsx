"use client";

import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description={"Manage Orders for your store"}
      />

      <Separator />
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={data} searchKey='products' />
      </div>
    </>
  );
};

export default OrderClient;
