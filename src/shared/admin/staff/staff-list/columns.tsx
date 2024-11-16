// shared/admin/staff/staff-list/columns.tsx
import { PiTrashBold, PiPencilBold } from "react-icons/pi";
import { ActionIcon, Tooltip } from "rizzui";
import { Employee } from "@/types/staff";

type Columns = {
  data: Employee[];
  sortConfig?: any;
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => any;
  onChecked?: (id: string) => void;
  checkedItems?: string[];
  handleSelectAll?: any;
};
export const getStaffColumns = ({
  data,
  sortConfig,
  checkedItems,
  onDeleteItem,
  onHeaderCellClick,
  onChecked,
  handleSelectAll,
}: Columns) => [
  {
    title: <span className="ml-6">Name</span>,
    dataIndex: "name",
    key: "name",
    width: 250,
    render: (name: string, row: Employee) => (
      <div className="ml-6 flex items-center gap-2">
        <span className="font-medium">{name || "John Doe"}</span>
      </div>
    ),
  },
  {
    title: "Employee ID",
    dataIndex: "employee_id",
    key: "employee_id",
    width: 150,
    render: (employee_id: string) => <span>{employee_id || "EMP001"}</span>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    width: 150,
    render: (role: string) => (
      <span className="capitalize">{role || "Staff"}</span>
    ),
  },
  {
    title: "Department ID",
    dataIndex: "departments",
    key: "departments",
    width: 200,
    render: (departments: number[]) => (
      <span>
        {departments?.length ? departments.join(", ") : "No Department"}
      </span>
    ),
  },
  {
    title: "Email",
    dataIndex: "contact_info",
    key: "email",
    width: 250,
    render: (contact_info: Employee["contact_info"]) => (
      <span>{contact_info?.email || "john.doe@example.com"}</span>
    ),
  },
  {
    title: "Phone",
    dataIndex: "contact_info",
    key: "phone",
    width: 150,
    render: (contact_info: Employee["contact_info"]) => (
      <span>{contact_info?.phone || "+1 234 567 8900"}</span>
    ),
  },
  {
    title: "Institution",
    dataIndex: "qualifications",
    key: "institution",
    width: 200,
    render: (qualifications: Employee["qualifications"]) => (
      <span>{qualifications?.[0]?.institution || "University of Example"}</span>
    ),
  },
  {
    title: "Degree",
    dataIndex: "qualifications",
    key: "degree",
    width: 200,
    render: (qualifications: Employee["qualifications"]) => (
      <span>{qualifications?.[0]?.degree || "Bachelor of Science"}</span>
    ),
  },
  {
    title: "Year",
    dataIndex: "qualifications",
    key: "year",
    width: 100,
    render: (qualifications: Employee["qualifications"]) => (
      <span>{qualifications?.[0]?.year || "2024"}</span>
    ),
  },
  {
    title: "Subject ID",
    dataIndex: "subjects_taught",
    key: "subjects",
    width: 150,
    render: (subjects: number[]) => (
      <span>{subjects?.length ? subjects.join(", ") : "No Subjects"}</span>
    ),
  },
  {
    title: "Actions",
    dataIndex: "id",
    key: "actions",
    width: 100,
    render: (id: string, row: Employee) => (
      <div className="flex items-center gap-3">
        <Tooltip content="Edit" placement="top" color="invert">
          <ActionIcon
            size="sm"
            variant="outline"
            onClick={() => console.log("Edit:", id)}
          >
            <PiPencilBold className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
        <Tooltip content="Delete" placement="top" color="invert">
          <ActionIcon
            size="sm"
            variant="outline"
            onClick={() => onDeleteItem(id)}
          >
            <PiTrashBold className="h-4 w-4" />
          </ActionIcon>
        </Tooltip>
      </div>
    ),
  },
];
