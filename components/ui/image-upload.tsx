"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {value.map((url) => (
          <div
            key={url}
            className='relative w-[200px] h-[200px] rounded-md overflow-hidden'
          >
            <div className='z-10 absolute top-2 ring-2'>
              <Button
                type='button'
                variant={"destructive"}
                size={"icon"}
                onClick={() => onRemove(url)}
              >
                <Trash className='w-4 h-4' />
              </Button>
            </div>
            <Image
              src={url}
              alt={"Billboard Image"}
              fill
              className='object-cover'
            />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset='zifs9ryi'>
        {({ open }) => {
          const onClick = () => {
            open();
          };
          return (
            <Button
              type='button'
              disabled={disabled}
              variant={"secondary"}
              onClick={onClick}
            >
              <ImagePlus className='mr-2 w-4 h-4' />
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
