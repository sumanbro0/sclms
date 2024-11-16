"use client";

import Image from "next/image";
import Link from "next/link";
import { Text, Checkbox } from "rizzui";

interface Student {
  id: number;
  name: string;
  admission_no: string;
  status: string;
  photo?: string;
}

function getStatusBadge(status: string) {
  const statusClasses = {
    active: "text-green-500",
    inactive: "text-red-500",
    transferred: "text-orange-500",
    graduated: "text-blue-500",
  };

  return <span className={`font-medium text-gray-500}`}>{status}</span>;
}

type Columns = {
  data: Student[];
  checkedItems: string[];
  presentStudents: string[];
  onChecked?: (id: string) => void;
  onPresentToggle?: (id: string) => void;
};

export const getStudentColumns = ({
  data,
  checkedItems,
  presentStudents,
  onChecked,
  onPresentToggle,
}: Columns) => [
  {
    title: "Select",
    dataIndex: "checked",
    key: "checked",
    width: 50,
    render: (_: any, row: Student) => (
      <div className="ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id.toString())}
          onChange={() => onChecked?.(row.id.toString())}
        />
      </div>
    ),
  },

  {
    title: "Student Name",
    dataIndex: "name",
    key: "name",
    width: 50,
    render: (_: string, row: Student) => (
      <div className="flex items-center gap-2">
        {row.photo && (
          <Image
            height={32}
            width={32}
            src={row.photo || "/images/avatar.png"}
            alt={row.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        )}
        <span className="font-medium">{row.name || "john"}</span>
      </div>
    ),
  },
  {
    title: "Admission No",
    dataIndex: "admission_no",
    key: "admission_no",
    width: 50,
    render: (id: string, row: Student) => (
      <Text className="font-medium text-gray-700">
        {row.admission_no || "5161654646"}
      </Text>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 50,
    render: (status: string) => getStatusBadge(status),
  },
  {
    title: "Present",
    dataIndex: "present",
    key: "present",
    width: 50,
    render: (_: any, row: Student) => (
      <div className="ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={presentStudents.includes(row.id.toString())}
          onChange={() => onPresentToggle?.(row.id.toString())}
        />
      </div>
    ),
  },
];
