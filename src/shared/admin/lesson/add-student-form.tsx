"use client";

import React from "react";
import { PiXBold } from "react-icons/pi";
import { ActionIcon, Title, Text, Button, Input, Select } from "rizzui";
import { useModal } from "@/shared/modal-views/use-modal";
import { toast } from "react-hot-toast";
import { useForm, SubmitHandler, Controller } from "react-hook-form"; // Add Controller
import { StudentFormData } from "@/types/student";
import { useStudentMutation } from "@/query/use-student";

export default function AddStudentModal() {
  const { closeModal } = useModal();
  const { mutate: createStudent, isLoading } = useStudentMutation();

  const {
    register,
    control, // Add control
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>();

  const onSubmit: SubmitHandler<StudentFormData> = (data) => {
    createStudent(data, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  return (
    <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-lg">
          Add New Student
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="h-[18px] w-[18px]" />
        </ActionIcon>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => closeModal()}
            className="w-full"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Student"}
          </Button>
        </div>
      </form>
    </div>
  );
}
