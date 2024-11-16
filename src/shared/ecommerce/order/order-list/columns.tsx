"use client";
import { HeaderCell } from "@/shared/table";
import { Badge, Text, Tooltip, ActionIcon } from "rizzui";
import TableAvatar from "packages/isomorphic-core/src/ui/avatar-card";
import DateCell from "packages/isomorphic-core/src/ui/date-cell";

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case "completed":
      return (
        <div className="flex items-center">
          <Badge color="success" renderAsDot />
          <Text className="ms-2 font-medium text-green-dark">{status}</Text>
        </div>
      );
    case "cancelled":
      return (
        <div className="flex items-center">
          <Badge color="danger" renderAsDot />
          <Text className="ms-2 font-medium text-red-dark">{status}</Text>
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
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export const getColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: <HeaderCell title="Order ID" />,
    dataIndex: "id",
    key: "id",
    width: 120,
    render: (value: string) => <Text>#{value}</Text>,
  },
  {
    title: <HeaderCell title="Customer" />,
    dataIndex: "customer",
    key: "customer",
    width: 300,
    render: (_: any, row: any) => (
      <TableAvatar
        src={row.avatar}
        name={row.name}
        description={row.email.toLowerCase()}
      />
    ),
  },
  {
    title: <HeaderCell title="Items" />,
    dataIndex: "items",
    key: "items",
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Price"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "price"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("price"),
    dataIndex: "price",
    key: "price",
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">${value}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Created"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "createdAt"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("createdAt"),
    dataIndex: "createdAt",
    key: "createdAt",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: (
      <HeaderCell
        title="Modified"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "updatedAt"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("updatedAt"),
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 140,
    render: (value: string) => getStatusBadge(value),
  },
];

export const getWidgetColumns = ({
  sortConfig,
  onDeleteItem,
  onHeaderCellClick,
}: Columns) => [
  {
    title: (
      <HeaderCell title="Order ID" className="ps-4 [&>div]:whitespace-nowrap" />
    ),
    dataIndex: "id",
    key: "id",
    width: 90,
  },
  {
    title: <HeaderCell title="Customer" />,
    dataIndex: "customer",
    key: "customer",
    width: 300,
    render: (_: any, row: any) => (
      <TableAvatar
        src={row.avatar}
        name={row.name}
        description={row.email.toLowerCase()}
      />
    ),
  },
  {
    title: <HeaderCell title="Items" />,
    dataIndex: "items",
    key: "items",
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">{value}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Price"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "price"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("price"),
    dataIndex: "price",
    key: "price",
    width: 150,
    render: (value: string) => (
      <Text className="font-medium text-gray-700">${value}</Text>
    ),
  },
  {
    title: (
      <HeaderCell
        title="Created"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "createdAt"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("createdAt"),
    dataIndex: "createdAt",
    key: "createdAt",
    width: 200,
    render: (createdAt: Date) => <DateCell date={createdAt} />,
  },
  {
    title: (
      <HeaderCell
        title="Modified"
        sortable
        ascending={
          sortConfig?.direction === "asc" && sortConfig?.key === "updatedAt"
        }
      />
    ),
    onHeaderCell: () => onHeaderCellClick("updatedAt"),
    dataIndex: "updatedAt",
    key: "updatedAt",
    width: 200,
    render: (value: Date) => <DateCell date={value} />,
  },
  {
    title: <HeaderCell title="Status" />,
    dataIndex: "status",
    key: "status",
    width: 140,
    render: (value: string) => getStatusBadge(value),
  },
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Actions" className="opacity-0" />,
    dataIndex: "action",
    key: "action",
    width: 130,
  },
];
