"use client";
import TableLayout from "@/shared/table/table-layout";
import StaffTable from "@/shared/admin/staff/staff-list/table";
import { useGetEmployees } from "@/query/use-staff";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";

// export const metadata = {
//   ...metaObject("Staff Management"),
// };

const pageHeader = {
  title: "Staff Management",
  breadcrumb: [
    {
      href: "/admin",
      name: "Admin",
    },
    {
      href: "/admin/staff",
      name: "Staff",
    },
  ],
};

export default function StaffsPage() {
  const { data: staffData, isLoading } = useGetEmployees();
  console.log("dddd", staffData);

  const csvHeader =
    "ID,Name,Employee ID,Role,Email,Phone,Departments,Status,Created At";

  return (
    <TableLayout
      type="staff"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={staffData?.data || []}
      fileName="staffs"
      header={csvHeader}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <StaffTable data={staffData?.data || []} />
      )}
    </TableLayout>
  );
}
