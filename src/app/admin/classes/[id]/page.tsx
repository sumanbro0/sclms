"use client";

import React from "react";
import { Title, Text, Button, Badge, Table } from "rizzui";
import { PiPencil } from "react-icons/pi";
import {
  Class,
  Section,
  Subject,
  useGetClassSections,
  useGetClassSubjects,
} from "@/query/use-class"; // Adjust the import path according to your types location
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";
import SectionTable from "@/shared/admin/classes/section-list/table";
import pageHeader from "@/shared/page-header";
import TableLayout from "@/shared/table/table-layout";
import SubjectTable from "@/shared/admin/classes/subjects-list/table";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ClassDetailsPage({ params }: PageProps) {
  const { data: sectionData, isLoading } = useGetClassSections(params.id);
  const { data: subjectData, isLoading: subjectLoading } = useGetClassSubjects(
    params.id
  );
  return (
    <div className="mx-auto p-6 max-w-7xl">
      {/* Header/Profile Section */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <Title as="h1" className="text-2xl font-bold mb-2">
                {"First Class"}
              </Title>
              <Text className="text-gray-500">
                Grade {10} - {"Maths - A"}
              </Text>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <PiPencil className="h-4 w-4" />
              Edit Class
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div className="space-y-1">
            <Text className="text-sm text-gray-500">School ID</Text>
            <Text className="font-medium">{"0044"}</Text>
          </div>
          <div className="space-y-1">
            <Text className="text-sm text-gray-500">Capacity</Text>
            <Text className="font-medium">450</Text>
          </div>
          <div className="space-y-1">
            <Text className="text-sm text-gray-500">Grading System ID</Text>
            <Text className="font-medium">111</Text>
          </div>
        </div>

        <div className="px-6 pb-6">
          <Title as="h3" className="text-sm font-medium text-gray-500 mb-3">
            Promotion Criteria
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <Text className="text-sm text-gray-500 mb-1">
                Min. Attendance
              </Text>
              <Text className="font-semibold">75%</Text>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <Text className="text-sm text-gray-500 mb-1">Min. Grade</Text>
              <Text className="font-semibold">40%</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Sections Table */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <Title as="h2" className="text-xl font-semibold">
              Sections
            </Title>
            <Button size="sm">Add Section</Button>
          </div>
        </div>
        <div className="p-6">
          {/* <TableLayout
            type="file"
            showBtn={false}
            title={"Sections"}
            breadcrumb={[]}
            data={[]}
            fileName="sections_data"
            header="ID,Name,Capacity,Teacher ID,Room ID"
          > */}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <SectionTable data={sectionData?.data || []} />
          )}
          {/* </TableLayout> */}
        </div>
      </div>

      {/* Subjects Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <Title as="h2" className="text-xl font-semibold">
              Subjects
            </Title>
            <Button size="sm">Add Subject</Button>
          </div>
        </div>
        <div className="p-6">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <SubjectTable data={subjectData?.data || []} />
          )}
        </div>
      </div>
    </div>
  );
}
