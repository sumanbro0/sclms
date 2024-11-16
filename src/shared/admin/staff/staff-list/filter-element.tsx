// shared/admin/staff/staff-list/filter-element.tsx
import { DatePicker } from "packages/isomorphic-core/src/ui/datepicker";
import cn from "packages/isomorphic-core/src/utils/class-names";
import { Fragment } from "react";
import { PiTrashBold, PiSliders } from "react-icons/pi";
import { useMedia } from "react-use";
import { ActionIcon, Button } from "rizzui";
// import { useMedia } from "@/hooks/use-media";

// import cn from "@/utils/class-names";
// import { DatePicker } from "@/shared/datepicker";
import { Select } from "rizzui";

const roles = [
  { label: "All", value: "" },
  { label: "Teacher", value: "teacher" },
  { label: "Admin Staff", value: "admin_staff" },
  { label: "Principal", value: "principal" },
  { label: "Coordinator", value: "coordinator" },
  { label: "Counselor", value: "counselor" },
];

const departments = [
  { label: "All", value: "" },
  { label: "Science", value: "1" },
  { label: "Mathematics", value: "2" },
  { label: "English", value: "3" },
  // Add more departments as needed
];

export default function FilterElement({
  isFiltered,
  filters,
  updateFilter,
  handleReset,
}: {
  isFiltered: boolean;
  filters: Record<string, any>;
  updateFilter: (name: string, value: any) => void;
  handleReset: () => void;
}) {
  const isMedium = useMedia("(max-width: 1500px)", false);
  return (
    <Fragment>
      <Select
        placeholder="Filter by Role"
        options={roles}
        value={filters["role"]}
        onChange={(value) => updateFilter("role", value)}
        className="w-[150px]"
        clearable
      />
      <Select
        placeholder="Filter by Department"
        options={departments}
        value={filters["department"]}
        onChange={(value) => updateFilter("department", value)}
        className="w-[180px]"
        clearable
      />
      <DatePicker
        // placeholder="Filter by Date"
        // onChange={(date: Date[]) => updateFilter("createdAt", date)}
        // range
        className="w-[250px]"
      />
      {isFiltered && (
        <Button
          size="sm"
          onClick={handleReset}
          className="h-8 bg-gray-200/70"
          variant="flat"
        >
          <PiTrashBold className="me-1.5 h-[17px] w-[17px]" />
          Clear
        </Button>
      )}
    </Fragment>
  );
}
