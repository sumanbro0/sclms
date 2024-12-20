"use client";

import React from "react";
import { defaultColumns } from "./column";
import TableToolbar from "@/shared/tan-table/table-toolbar";
import MainTable from "@/shared/table/main-table";
import WidgetCard from "@core/components/cards/widget-card";
import { Person, defaultData } from "@/data/tan-table-data";
import TablePagination from "@/shared/table/table-pagination";
import { useTanStackTable } from "@/shared/tan-table/custom-table-components/use-TanStack-Table";

export default function EnhancedTanTable() {
  const { table, setData } = useTanStackTable<Person>({
    tableData: defaultData,
    columnConfig: defaultColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 5,
        },
      },
      filterFns: {
        statusFilter: (row, columnId, value) => {
          if (!value) return false;
          let status =
            row.original[columnId].toLowerCase() === value.toLowerCase()
              ? true
              : false;
          return status;
        },
        priceFilter: (row, columnId, value) => {
          if (!value) return false;
          // console.log('custom filter conditions', row, columnId, value);
          return true;
        },
        createdDate: (row, columnId, value) => {
          if (!value) return false;
          // console.log('custom filter conditions', row, columnId, value);
          return true;
        },
        dueDate: (row, columnId, value) => {
          if (!value) return false;
          // console.log('custom filter conditions', row, columnId, value);
          return true;
        },
      },
      meta: {
        handleDeleteRow: (row) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
        handleMultipleDelete: (rows) => {
          setData((prev) => prev.filter((r) => !rows.includes(r.id)));
          table.resetRowSelection();
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <>
      <WidgetCard title={"Enhanced Table"} className="flex flex-col gap-4">
        <TableToolbar table={table} />
        <MainTable table={table} variant={"modern"} />
        <TablePagination table={table} />
      </WidgetCard>
    </>
  );
}
