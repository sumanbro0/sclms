"use client";

import TableLayout from "@/shared/table/table-layout";
import ClassesTable from "@/shared/admin/classes/classes-list/table";
import { useGetClasses } from "@/query/use-class";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";

const pageHeader = {
  title: "Classes",
  breadcrumb: [
    {
      href: "/dashboard",
      name: "Dashboard",
    },
    {
      href: "/classes",
      name: "Classes",
    },
  ],
};

export default function ClassesPage() {
  const { data: classesData, isLoading } = useGetClasses();
  console.log(classesData?.data);
  return (
    <TableLayout
      type="classes"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={classesData?.data || []}
      fileName="classes_data"
      header="ID,Name,Grade Level,Stream,Capacity,Min Attendance,Min Grade,Grading System"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ClassesTable data={classesData?.data || []} />
      )}
    </TableLayout>
  );
}
