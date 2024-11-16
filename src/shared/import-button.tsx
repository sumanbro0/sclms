"use client";

import dynamic from "next/dynamic";
import { Button } from "rizzui";
import cn from "packages/isomorphic-core/src/utils/class-names";
import { PiArrowLineDownBold, PiPlus } from "react-icons/pi";
import { useModal } from "@/shared/modal-views/use-modal";
import AddClassModal from "./admin/classes/add-classes";

const FileUpload = dynamic(() => import("./file-upload"), {
  ssr: false,
});

const AddStudentForm = dynamic(
  () => import("@/shared/admin/student/add-student-form"),
  {
    ssr: false,
  }
);

const AddStaffForm = dynamic(
  () => import("@/shared/admin/staff/add-staff-form"),
  {
    ssr: false,
  }
);

const formComponents = {
  file: FileUpload,
  student: AddStudentForm,
  staff: AddStaffForm,
  classes: AddClassModal,
  // Add more form types here
} as const;

export type FormType = keyof typeof formComponents;

type DynamicButtonProps = {
  type: FormType;
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
  modalSize?: string;
  accept?: "img" | "pdf" | "csv" | "imgAndPdf" | "all";
};

export default function DynamicButton({
  type,
  title,
  modalBtnLabel = "Add New",
  className,
  buttonLabel = "Add New",
  modalSize = "480px",
  accept = "all",
}: React.PropsWithChildren<DynamicButtonProps>) {
  const { openModal } = useModal();

  const getFormComponent = () => {
    const Component = formComponents[type];

    switch (type) {
      case "file":
        return (
          <Component
            label={title}
            accept={accept}
            multiple={false}
            btnLabel={modalBtnLabel}
          />
        );
      case "student":
        return <Component />;
      case "staff":
        return <Component />;
      case "classes":
        return <Component />;
      default:
        return null;
    }
  };

  return (
    <Button
      onClick={() =>
        openModal({
          view: getFormComponent(),
          customSize: modalSize,
        })
      }
      className={cn("w-full @lg:w-auto", className)}
    >
      <PiPlus className="me-1.5 h-[17px] w-[17px]" />
      {buttonLabel}
    </Button>
  );
}
