import { FC } from "react";

import Image from "next/image";

import { Product } from "../../types";
import { truncateString } from "@/app/utils";

interface Props {
  item: Product;
}

export const ProductCard: FC<Props> = ({ item }) => {
  const { image, title, description } = item;
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
      <a href="#">
        <div className="h-[320px] overflow-hidden">
          <Image
            className="!h-full"
            src={image}
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
            alt=""
          />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {truncateString(title, 35)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncateString(description, 100)}
        </p>
      </div>
    </div>
  );
};
