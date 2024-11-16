"use client";

import Link from "next/link";
import { routes } from "@/config/routes";
import { Text, Badge, Tooltip, Checkbox, ActionIcon } from "rizzui";
import { HeaderCell } from "@/shared/table";
import EyeIcon from "packages/isomorphic-core/src/components/icons/eye";
import PencilIcon from "packages/isomorphic-core/src/components/icons/pencil";
import DeletePopover from "@/shared/delete-popover";
import { Class } from "@/query/use-class";

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getClassesColumns = ({
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
    title: <HeaderCell title="Name" />,
    dataIndex: "name",
    key: "name",
    width: 200,
    render: (name: string) => (
      <Text className="font-medium text-gray-700">{name || "Grade A"}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Grade Level"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "grade_level"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("grade_level"),
    dataIndex: "grade_level",
    key: "grade_level",
    width: 150,
    render: (grade: number) => (
      <Badge variant="flat" className="bg-blue-100 text-blue-800">
        Grade {grade}
      </Badge>
    ),
  },
  {
    title: <HeaderCell title="Stream" />,
    dataIndex: "stream",
    key: "stream",
    width: 150,
    render: (stream: string) => (
      <Text className="text-gray-700">{stream || "maths"}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Capacity"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "capacity"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("capacity"),
    dataIndex: "capacity",
    key: "capacity",
    width: 120,
    render: (capacity: number) => (
      <Text className="font-medium text-gray-700">{capacity} students</Text>
    ),
  },
  {
    title: <HeaderCell title="Promotion Criteria" />,
    dataIndex: "promotion_criteria",
    key: "promotion_criteria",
    width: 250,
    render: (criteria: Class["promotion_criteria"]) => (
      <div className="space-y-1">
        <Text className="text-sm text-gray-600">
          Min. Attendance: {criteria?.minimum_attendance}
        </Text>
        <Text className="text-sm text-gray-600">
          Min. Grade: {criteria?.minimum_grade}
        </Text>
      </div>
    ),
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: Class) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={"Edit Class"}
          placement="top"
          color="invert"
        >
          <Link href={"#"}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <Tooltip
          size="sm"
          content={"View Class"}
          placement="top"
          color="invert"
        >
          <Link href={`classes/${row.id}`}>
            <ActionIcon
              as="span"
              size="sm"
              variant="outline"
              className="hover:!border-gray-900 hover:text-gray-700"
            >
              <EyeIcon className="h-4 w-4" />
            </ActionIcon>
          </Link>
        </Tooltip>
        <DeletePopover
          title={`Delete the class`}
          description={`Are you sure you want to delete this class?`}
          onDelete={() => onDeleteItem(row.id.toString())}
        />
      </div>
    ),
  },
];
