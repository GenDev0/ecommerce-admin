"use client";

import { useEffect, useState } from "react";

import StoreModal from "@/components/modals/store-modal";

type Props = {};

export const ModalProvider = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
