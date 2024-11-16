"use client";

import { useGetStudents } from "@/query/use-student";
import StudentTable from "@/shared/admin/attendence/student-list/table";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";
import React from "react";

type Props = {
  params: { id: string };
};

const AttendancePage = ({ params }: Props) => {
  const { data: students, isLoading } = useGetStudents();
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <StudentTable data={students?.data || []} />
    </div>
  );
};

export default AttendancePage;
