// app/students/[id]/edit/page.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ActionIcon, Title, Button, Input, Select } from "rizzui";
import { useForm, Controller } from "react-hook-form";
import { StudentFormData } from "@/types/student";
import { useStudentUpdate, useSingleStudent } from "@/query/use-student";
import { PiArrowLeft } from "react-icons/pi";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";

export default function EditStudentPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { data: student, isLoading: isLoadingStudent } = useSingleStudent(
    params.id
  );
  const { mutate: updateStudent, isLoading: isUpdating } = useStudentUpdate();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentFormData>();

  useEffect(() => {
    if (student) {
      reset(student.data);
    }
  }, [student, reset]);

  const onSubmit = (data: StudentFormData) => {
    updateStudent(
      { id: params.id, ...data },
      {
        onSuccess: () => {
          router.push("/admin/students");
        },
      }
    );
  };

  if (isLoadingStudent) {
    return <LoadingSpinner />;
  }

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="@container">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ActionIcon
              size="sm"
              variant="text"
              onClick={() => router.back()}
              className="p-0 text-gray-500 hover:!text-gray-900"
            >
              <PiArrowLeft className="h-5 w-5" />
            </ActionIcon>
            <Title as="h1" className="text-xl font-bold">
              Edit Student
            </Title>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          <Input
            label="Admission No"
            placeholder="Enter admission number"
            {...register("admission_no", { required: true })}
            error={errors.admission_no && "Admission number is required"}
          />

          <Input
            label="Full Name"
            placeholder="Enter student's full name"
            {...register("name", { required: true })}
            error={errors.name && "Name is required"}
          />

          <Input
            type="email"
            label="Email"
            placeholder="Enter email address"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            error={errors.email && "Valid email is required"}
          />

          <Input
            label="Phone"
            placeholder="Enter phone number"
            {...register("phone")}
          />

          <Input
            type="date"
            label="Date of Birth"
            {...register("dob", { required: true })}
            error={errors.dob && "Date of birth is required"}
          />

          <Controller
            control={control}
            name="gender"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                label="Gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
                value={value}
                onChange={onChange}
                error={errors.gender && "Gender is required"}
                placeholder="Select gender"
              />
            )}
          />

          <Input
            label="Blood Group"
            placeholder="Enter blood group"
            {...register("blood_group")}
          />

          <Input
            label="Present Address"
            placeholder="Enter present address"
            {...register("present_address")}
          />

          <Input
            label="Permanent Address"
            placeholder="Enter permanent address"
            {...register("permanent_address")}
          />

          <Input
            label="Religion"
            placeholder="Enter religion"
            {...register("religion")}
          />

          <Input
            label="National ID"
            placeholder="Enter national ID"
            {...register("national_id")}
          />

          <Controller
            control={control}
            name="status"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                label="Status"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Inactive", value: "inactive" },
                  { label: "Transferred", value: "transferred" },
                  { label: "Graduated", value: "graduated" },
                ]}
                value={value}
                onChange={onChange}
                error={errors.status && "Status is required"}
                placeholder="Select status"
              />
            )}
          />

          <div className="col-span-2 flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => router.back()}
              disabled={isUpdating}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update Student"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
