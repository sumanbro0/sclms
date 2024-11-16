"use client";

import Link from "next/link";
import { Text, Badge, Tooltip, Checkbox, ActionIcon } from "rizzui";
import { HeaderCell } from "@/shared/table";
import EyeIcon from "packages/isomorphic-core/src/components/icons/eye";
import PencilIcon from "packages/isomorphic-core/src/components/icons/pencil";
import DeletePopover from "@/shared/delete-popover";
import { Section } from "@/query/use-class";

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getSectionColumns = ({
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
      <Text className="font-medium text-gray-700">{name}</Text>
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
    title: (
      <HeaderCell
        title="Teacher ID"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "teacher_id"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("teacher_id"),
    dataIndex: "teacher_id",
    key: "teacher_id",
    width: 150,
    render: (teacherId: number) => (
      <Badge variant="flat" className="bg-blue-100 text-blue-800">
        {teacherId}
      </Badge>
    ),
  },
  {
    title: <HeaderCell title="Room ID" />,
    dataIndex: "room_id",
    key: "room_id",
    width: 150,
    render: (roomId: number) => <Text className="text-gray-700">{roomId}</Text>,
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: Section) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={"Edit Section"}
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
          content={"View Section"}
          placement="top"
          color="invert"
        >
          <Link href={`sections/${row.id}`}>
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
          title={`Delete the section`}
          description={`Are you sure you want to delete this section?`}
          onDelete={() => onDeleteItem(row.id.toString())}
        />
      </div>
    ),
  },
];
