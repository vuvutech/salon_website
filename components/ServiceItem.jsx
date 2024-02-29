import React from "react";
import {Dna} from "lucide-react";

const ServiceItem = ({ title, icon, description }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[190px] flex-col justify-between rounded-md p-4 space-y-3">
        {icon ?? (
         <Dna className="h-12 w-12" />
        )}
        <div className="space-y-2">
          <h3 className="font-bold">{title ?? ""}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3 z-20">{description ?? " "}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
