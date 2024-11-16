"use client";

import { metaObject } from "@/config/site.config";
import TableLayout from "../../../shared/table/table-layout";
import StudentTable from "@/shared/admin/student/student-list/table";
import { useGetStudents } from "@/query/use-student";
import { invoiceData } from "@/data/invoice-data";

// export const metadata = {
//   ...metaObject("Student Records"),
// };

const pageHeader = {
  title: "Students",
  breadcrumb: [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/students",
      name: "Students",
    },
  ],
};

export default function StudentRecordsPage() {
  const { data: studentData, isLoading, isError } = useGetStudents();
  console.log(studentData);
  if (isLoading) {
    return <div>Loading...</div>; // Replace with your loading component
  }

  if (isError) {
    return <div>Error loading students</div>; // Replace with your error component
  }

  return (
    <TableLayout
      type="student"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={studentData.data}
      fileName="student_records"
      header="ID,Name,Email,Gender,Date of Birth,Status,Created At,Updated At"
    >
      <StudentTable data={studentData?.data} />
    </TableLayout>
  );
}
