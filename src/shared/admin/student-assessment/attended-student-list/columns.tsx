"use client";

import Link from "next/link";
import { routes } from "@/config/routes";
import { Text, Badge, Tooltip, Checkbox, ActionIcon, Input } from "rizzui";
import { HeaderCell } from "@/shared/table";
import EyeIcon from "packages/isomorphic-core/src/components/icons/eye";
import PencilIcon from "packages/isomorphic-core/src/components/icons/pencil";
import AvatarCard from "packages/isomorphic-core/src/ui/avatar-card";
import DateCell from "packages/isomorphic-core/src/ui/date-cell";
import DeletePopover from "@/shared/delete-popover";
import { Student } from "@/types/student";

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "active":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case "inactive":
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    case "transferred":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case "graduated":
      return (
        <div className="flex items-center">
          <Badge color="info" renderAsDot />
          <Text className="ms-2 font-medium text-blue-dark">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

type Columns = {
  data: Student[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getStudentColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  handleSelectAll,
  onChecked,
}: Columns) => [
  {
    title: (
      <div className="ps-2">
        <Checkbox
          title={"Select All"}
          onChange={handleSelectAll}
          checked={checkedItems.length === data.length}
          className="cursor-pointer"
        />
      </div>
    ),
    dataIndex: "checked",
    key: "checked",
    width: 30,
    render: (_: any, row: any) => (
      <div className="inline-flex ps-2">
        <Checkbox
          className="cursor-pointer"
          checked={checkedItems.includes(row.id.toString())}
          {...(onChecked && { onChange: () => onChecked(row.id.toString()) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Student ID" />,
    dataIndex: "id",
    key: "id",
    width: 100,
    render: (id: number) => (
      <Text className="font-medium text-gray-700">#{id}</Text>
    ),
  },
  {
    title: <HeaderCell title="Student Details" />,
    dataIndex: "name",
    key: "name",
    width: 250,
    render: (_: string, row: Student) => (
      <AvatarCard
        src={row.photo || ""}
        name={row.name || "N/A"}
        description={`Admission: ${row.admission_no || "N/A"}`}
      />
    ),
  },
  {
    title: <HeaderCell title="Email" />,
    dataIndex: "email",
    key: "email",
    width: 200,
    render: (email: string) => email.toLowerCase(),
  },
  {
    title: <HeaderCell title="Gender" />,
    dataIndex: "gender",
    key: "gender",
    width: 100,
    render: (gender: string) => (
      <Text className="capitalize">{gender || "N/A"}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Date of Birth"
        sortable
        ascending={sortConfig?.direction === "asc" && sortConfig?.key === "dob"}
      />
    ),
    onHeaderCell: () => onHeaderCellClick("dob"),
    dataIndex: "dob",
    key: "dob",
    width: 150,
    render: (value: string) => <DateCell date={new Date(value)} />,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <HeaderCell title="Marks" />,
    dataIndex: "marks",
    key: "marks",
    width: 120,
    render: (_: string, row: Student) => (
      <Input
        type="number"
        min={0}
        max={100}
        placeholder="Enter marks"
        className="w-20"
        defaultValue={"0"}
        onChange={(e) => {
          // Handle marks update here
          console.log(`Updated marks for student ${row.id}: ${e.target.value}`);
        }}
      />
    ),
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: Student) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Link href={`/admin/students/edit/${row.id}`}>
          <Tooltip
            size="sm"
            content={"Edit Student"}
            placement="top"
            color="invert"
          >
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
        </Link>
        <Link href={`/admin/students/${row.id}`}>
          <Tooltip
            size="sm"
            content={"View Student"}
            placement="top"
            color="invert"
          >
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Tooltip>
        </Link>
        <DeletePopover
          title={`Delete Student`}
          description={`Are you sure you want to delete this student (ID: ${row.id})?`}
          onDelete={() => onDeleteItem(row.id.toString())}
        />
      </div>
    ),
  },
];
