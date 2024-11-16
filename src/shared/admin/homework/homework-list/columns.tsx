"use client";

import Link from "next/link";
import { Text, Badge, Tooltip, Checkbox, ActionIcon } from "rizzui";
import { HeaderCell } from "@/shared/table";
import EyeIcon from "packages/isomorphic-core/src/components/icons/eye";
import PencilIcon from "packages/isomorphic-core/src/components/icons/pencil";
import DateCell from "packages/isomorphic-core/src/ui/date-cell";
import DeletePopover from "@/shared/delete-popover";

// Define the Homework type
interface Homework {
  id: string;
  title: string;
  subject: string;
  grade: string;
  dueDate: string;
  assignedDate: string;
  status: string;
  teacherName: string;
  totalPoints: number;
  description: string;
}

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "assigned":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case "pending":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case "overdue":
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
        </div>
      );
    case "submitted":
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
  data: Homework[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getHomeworkColumns = ({
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
          checked={checkedItems.includes(row.id)}
          {...(onChecked && { onChange: () => onChecked(row.id) })}
        />
      </div>
    ),
  },
  {
    title: <HeaderCell title="Homework ID" />,
    dataIndex: "id",
    key: "id",
    width: 100,
    render: (id: string) => (
      <Text className="font-medium text-gray-700">#{id}</Text>
    ),
  },
  {
    title: <HeaderCell title="Title" />,
    dataIndex: "title",
    key: "title",
    width: 200,
    render: (title: string) => (
      <Text className="font-medium text-gray-700">{title}</Text>
    ),
  },
  {
    title: <HeaderCell title="Subject" />,
    dataIndex: "subject",
    key: "subject",
    width: 150,
    render: (subject: string) => <Text className="capitalize">{subject}</Text>,
  },
  {
    title: <HeaderCell title="Grade" />,
    dataIndex: "grade",
    key: "grade",
    width: 100,
    render: (grade: string) => <Text className="capitalize">{grade}</Text>,
  },
  {
    title: (
      <HeaderCell
        title="Due Date"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "dueDate"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("dueDate"),
    dataIndex: "dueDate",
    key: "dueDate",
    width: 150,
    render: (value: string) => <DateCell date={new Date(value)} />,
  },
  {
    title: <HeaderCell title="Assigned Date" />,
    dataIndex: "assignedDate",
    key: "assignedDate",
    width: 150,
    render: (value: string) => <DateCell date={new Date(value)} />,
  },
  {
    title: <HeaderCell title="Teacher" />,
    dataIndex: "teacherName",
    key: "teacherName",
    width: 150,
    render: (teacherName: string) => (
      <Text className="capitalize">{teacherName}</Text>
    ),
  },
  {
    title: <HeaderCell title="Points" />,
    dataIndex: "totalPoints",
    key: "totalPoints",
    width: 100,
    render: (points: number) => <Text>{points}</Text>,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 120,
    render: (value: string) => getStatusBadge(value),
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: Homework) => (
      <div className="flex items-center justify-end gap-3 pe-3">
        <Link href={`/admin/homework/edit/${row.id}`}>
          <Tooltip
            size="sm"
            content={"Edit Homework"}
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
        <Link href={`/admin/subjects/homework/${row.id}`}>
          <Tooltip
            size="sm"
            content={"View Homework"}
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
          title={`Delete Homework`}
          description={`Are you sure you want to delete this homework (ID: ${row.id})?`}
          onDelete={() => onDeleteItem(row.id)}
        />
      </div>
    ),
  },
];
