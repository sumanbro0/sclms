"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGetClasses } from "@/query/use-class";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";

interface Class {
  id: number;
  school_id: number;
  name: string;
  grade_level: number;
  stream: string;
  capacity: number;
  promotion_criteria: {
    minimum_attendance: number;
    minimum_grade: number;
  };
  grading_system_id: number;
}

// const dummyClasses: Class[] = [
//   {
//     id: 1,
//     school_id: 1,
//     name: "Class 10A",
//     grade_level: 10,
//     stream: "Science",
//     capacity: 40,
//     promotion_criteria: {
//       minimum_attendance: 75,
//       minimum_grade: 40,
//     },
//     grading_system_id: 1,
//   },
//   {
//     id: 2,
//     school_id: 1,
//     name: "Class 10B",
//     grade_level: 10,
//     stream: "Commerce",
//     capacity: 35,
//     promotion_criteria: {
//       minimum_attendance: 75,
//       minimum_grade: 40,
//     },
//     grading_system_id: 1,
//   },
//   {
//     id: 3,
//     school_id: 1,
//     name: "Class 9A",
//     grade_level: 9,
//     stream: "Science",
//     capacity: 40,
//     promotion_criteria: {
//       minimum_attendance: 75,
//       minimum_grade: 40,
//     },
//     grading_system_id: 1,
//   },
//   {
//     id: 4,
//     school_id: 1,
//     name: "Class 9B",
//     grade_level: 9,
//     stream: "Arts",
//     capacity: 35,
//     promotion_criteria: {
//       minimum_attendance: 75,
//       minimum_grade: 40,
//     },
//     grading_system_id: 1,
//   },
// ];

const AttendancePage = () => {
  const router = useRouter();

  const { data: classDatas, isLoading } = useGetClasses();

  const handleClassClick = (classId: number) => {
    router.push(`/admin/attendance/${classId}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Class Attendance</h1>
        <p className="text-gray-500">
          Select a class to view and manage attendance
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {classDatas?.data &&
          classDatas?.data?.map((classData) => (
            <div
              key={classData.id}
              onClick={() => handleClassClick(classData.id)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    {classData.name || "Maths"}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {classData.stream || "N/A"}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Grade Level</span>
                    <span className="font-medium">{classData.grade_level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-medium">{classData.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Min. Attendance</span>
                    <span className="font-medium">
                      {classData.promotion_criteria.minimum_attendance}%
                    </span>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    View Attendance →
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AttendancePage;
