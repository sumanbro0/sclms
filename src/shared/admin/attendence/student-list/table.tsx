"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { useTable } from "packages/isomorphic-core/src/hooks/use-table";
import { useColumn } from "packages/isomorphic-core/src/hooks/use-column";
import { Button } from "rizzui";
import ControlledTable from "@/shared/controlled-table/index";
import { getStudentColumns } from "@/shared/admin/attendence/student-list/columns";
import { Student } from "@/types/student";
import { useDeleteStudent } from "@/query/use-student";
import toast from "react-hot-toast";

const FilterElement = dynamic(
  () => import("@/shared/admin/student/student-list/filter-element"),
  { ssr: false }
);
const TableFooter = dynamic(() => import("@/shared/table-footer"), {
  ssr: false,
});

const filterState = {
  amount: ["", ""],
  createdAt: [null, null],
  dueDate: [null, null],
  status: "",
};

export default function StudentTable({ data = [] }: { data: Student[] }) {
  const deleteMutation = useDeleteStudent();
  const [pageSize, setPageSize] = useState(10);
  const [presentStudents, setPresentStudents] = useState<string[]>([]);

  const onHeaderCellClick = (value: string) => ({
    onClick: () => {
      handleSort(value);
    },
  });

  const onDeleteItem = useCallback((id: string) => {
    handleDelete(id);
    deleteMutation.mutate(id, {
      onSuccess: () => {
        toast.success("Student deleted successfully");
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPresentToggle = useCallback((studentId: string) => {
    setPresentStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  }, []);

  const {
    isLoading,
    isFiltered,
    tableData,
    currentPage,
    totalItems,
    handlePaginate,
    filters,
    updateFilter,
    searchTerm,
    handleSearch,
    sortConfig,
    handleSort,
    selectedRowKeys,
    setSelectedRowKeys,
    handleRowSelect,
    handleSelectAll,
    handleDelete,
    handleReset,
  } = useTable(data, pageSize, filterState);

  const columns = React.useMemo(
    () =>
      getStudentColumns({
        data,
        // sortConfig,
        presentStudents,
        onPresentToggle,
        checkedItems: selectedRowKeys,
        // onHeaderCellClick,
        // onDeleteItem,
        onChecked: handleRowSelect,
        // handleSelectAll,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      selectedRowKeys,
      presentStudents,
      onHeaderCellClick,
      sortConfig.key,
      sortConfig.direction,
      onDeleteItem,
      handleRowSelect,
      handleSelectAll,
      onPresentToggle,
    ]
  );

  const { visibleColumns, checkedColumns, setCheckedColumns } =
    useColumn(columns);

  const handleSubmitAttendance = () => {
    console.log("Present Students:", presentStudents);
    toast.success(`Attendance marked for ${presentStudents.length} students`);
    // Add your API call here to submit attendance
  };

  return (
    <>
      <ControlledTable
        variant="modern"
        data={tableData}
        isLoading={isLoading}
        showLoadingText={true}
        // @ts-ignore
        columns={visibleColumns}
        paginatorOptions={{
          pageSize,
          setPageSize,
          total: totalItems,
          current: currentPage,
          onChange: (page: number) => handlePaginate(page),
        }}
        filterOptions={{
          searchTerm,
          onSearchClear: () => {
            handleSearch("");
          },
          onSearchChange: (event) => {
            handleSearch(event.target.value);
          },
          hasSearched: isFiltered,
          columns,
          checkedColumns,
          setCheckedColumns,
        }}
        filterElement={
          <FilterElement
            isFiltered={isFiltered}
            filters={filters}
            updateFilter={updateFilter}
            handleReset={handleReset}
          />
        }
        tableFooter={
          <TableFooter
            checkedItems={selectedRowKeys}
            handleDelete={(ids: string[]) => {
              setSelectedRowKeys([]);
              handleDelete(ids);
            }}
          >
            <Button
              size="sm"
              className="dark:bg-green-600 dark:text-white"
              onClick={handleSubmitAttendance}
            >
              Submit Attendance ({presentStudents.length} Present)
            </Button>
          </TableFooter>
        }
        className="rounded-md border border-muted text-sm shadow-sm [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:h-60 [&_.rc-table-placeholder_.rc-table-expanded-row-fixed>div]:justify-center [&_.rc-table-row:last-child_td.rc-table-cell]:border-b-0 [&_thead.rc-table-thead]:border-t-0"
      />
    </>
  );
}
