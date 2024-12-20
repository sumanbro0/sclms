"use client";

import React from "react";
import { defaultColumns } from "./column";
import MainTable from "@/shared/table/main-table";
import WidgetCard from "@core/components/cards/widget-card";
import { Person, defaultData } from "@/data/tan-table-data";
import { useTanStackTable } from "@/shared/tan-table/custom-table-components/use-TanStack-Table";

export default function TableRowPinning() {
  const { table, setData } = useTanStackTable<Person>({
    tableData: defaultData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 12,
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <>
      <WidgetCard title={"Row Pinning"} className="flex flex-col gap-4">
        <MainTable
          table={table}
          variant={"modern"}
          classNames={{
            container: "h-[500px]",
          }}
        />
      </WidgetCard>
    </>
  );
}
