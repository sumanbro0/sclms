"use client";

import React from "react";
import { Avatar, Tab, Button } from "rizzui";
import { useSingleStudent } from "@/query/use-student";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";
import ProfileTab from "@/components/students/profile-tab";
import FamilyTab from "@/components/students/family-tab";
import AcademicsTab from "@/components/students/academic-tab";
import { useRouter } from "next/navigation";
import { PiArrowLeft } from "react-icons/pi";

export default function StudentProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data: student, isLoading } = useSingleStudent(params.id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!student) {
    return <div>Student not found</div>;
  }

  const studentData = {
    ...student.data,
    name: student.data?.name || "John Doe",
    phone: student.data?.phone || "+1234567890",
    status: student.data?.status || "Active",
    admission_no: student.data?.admission_no || "STU-2024-001",
  };

  return (
    <div className="@container">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex items-center gap-4">
          <Button variant="text" onClick={() => router.back()} className="mb-2">
            <PiArrowLeft />
          </Button>
          <h1 className="mb-2 text-2xl font-bold">Student Profile</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar
                src={studentData.phone || "/avatars/default.png"}
                name={studentData.name}
                size="xl"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">{studentData.name}</h2>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs text-white">
                  {studentData.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {studentData.admission_no}
              </p>
            </div>
          </div>

          <Tab>
            <Tab.List>
              <Tab.ListItem>Profile</Tab.ListItem>
              <Tab.ListItem>Academics</Tab.ListItem>
              <Tab.ListItem>Family and Relations</Tab.ListItem>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ProfileTab student={studentData} />
              </Tab.Panel>
              <Tab.Panel>
                <AcademicsTab student={studentData} />
              </Tab.Panel>
              <Tab.Panel>
                <FamilyTab student={studentData} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab>
        </div>
      </div>
    </div>
  );
}
