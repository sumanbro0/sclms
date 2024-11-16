"use client";

import React from "react";
import cn from "packages/isomorphic-core/src/utils/class-names";
import { defaultColumns } from "./column";
import ProjectSummaryToolbar from "./toolbar";
// import MainTable from '@/app/shared/table/main-table';

import WidgetCard from "packages/isomorphic-core/src/components/cards/widget-card";
import {
  ProjectSummaryDataType,
  projectSummaryData,
} from "../../data/project-dashboard";
import TablePagination from "@/shared/table/table-pagination";
import { useTanStackTable } from "@/shared/tan-table/custom-table-components/use-TanStack-Table";
import MainTable from "../../table/main-table";

export default function ProjectSummary({ className }: { className?: string }) {
  const { table, setData } = useTanStackTable<ProjectSummaryDataType>({
    tableData: projectSummaryData,
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
      },
      meta: {
        handleDeleteRow: (row: { id: string }) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
      },
      enableSorting: false,
      enableColumnResizing: false,
    },
  });

  return (
    <WidgetCard
      title="Project Summary"
      actionClassName="ps-0 w-full @xl:ps-2 @xl:w-auto"
      headerClassName="flex-wrap gap-4 @xl:flex-nowrap"
      className={cn("flex flex-col gap-4 dark:bg-gray-100/50", className)}
      action={
        <ProjectSummaryToolbar
          table={table}
          className="w-full justify-between"
        />
      }
    >
      <MainTable table={table} variant={"modern"} />
      <TablePagination table={table} />
    </WidgetCard>
  );
}
