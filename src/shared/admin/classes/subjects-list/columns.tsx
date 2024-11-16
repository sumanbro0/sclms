"use client";

import Link from "next/link";
import { Text, Badge, Tooltip, Checkbox, ActionIcon } from "rizzui";
import { HeaderCell } from "@/shared/table";
import EyeIcon from "packages/isomorphic-core/src/components/icons/eye";
import PencilIcon from "packages/isomorphic-core/src/components/icons/pencil";
import DeletePopover from "@/shared/delete-popover";
import { Subject } from "@/query/use-class";

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

export const getSubjectsColumns = ({
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
      <Text className="font-medium text-gray-700">{name || "Maths"}</Text>
    ),
  },
  {
    title: <HeaderCell title="Code" />,
    dataIndex: "code",
    key: "code",
    width: 120,
    render: (code: string) => (
      <Text className="font-medium text-gray-700">{code || "00017"}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Category"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "category"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("category"),
    dataIndex: "category",
    key: "category",
    width: 150,
    render: (category: "core" | "elective" | "optional") => {
      const categoryColors = {
        core: "bg-blue-100 text-blue-800",
        elective: "bg-green-100 text-green-800",
        optional: "bg-orange-100 text-orange-800",
      };
      return (
        <Badge variant="flat" className={categoryColors[category]}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      );
    },
  },
  {
    title: <HeaderCell title="Assessment Components" />,
    dataIndex: "assessment_config",
    key: "assessment_config",
    width: 250,
    render: (config: Subject["assessment_config"]) => (
      <div className="space-y-1">
        {config.components.map((component, index) => (
          <Text key={index} className="text-sm text-gray-600">
            {component.name}: {component.weightage}%
          </Text>
        ))}
      </div>
    ),
  },
  {
    title: <HeaderCell title="Resources" />,
    dataIndex: "resources",
    key: "resources",
    width: 150,
    render: (resources: Subject["resources"]) => (
      <Text className="text-gray-700">
        {resources.length} resource{resources.length !== 1 ? "s" : ""}
      </Text>
    ),
  },
  {
    title: <HeaderCell title="Actions" />,
    dataIndex: "action",
    key: "action",
    width: 140,
    render: (_: string, row: Subject) => (
      <div className="flex items-center justify-end gap-3 pe-4">
        <Tooltip
          size="sm"
          content={"Edit Subject"}
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
          content={"View Subject"}
          placement="top"
          color="invert"
        >
          <Link href={`subjects/${row.id}`}>
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
          title={`Delete the subject`}
          description={`Are you sure you want to delete this subject?`}
          onDelete={() => onDeleteItem(row.id.toString())}
        />
      </div>
    ),
  },
];
