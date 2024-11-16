"use client";

import React from "react";
import { PiXBold } from "react-icons/pi";
import { ActionIcon, Title, Input, Button } from "rizzui";
import { useModal } from "@/shared/modal-views/use-modal";
import { useForm, SubmitHandler } from "react-hook-form";

export interface ClassFormData {
  school_id: number;
  name: string;
  grade_level: number;
  stream: string;
  capacity: number;
  promotion_criteria: {
    minimum_attendance: number;
    minimum_grade: number;
  };
  grading_system_id: number;
}

export default function AddClassForm() {
  const { closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClassFormData>({
    defaultValues: {
      school_id: 0,
      name: "",
      grade_level: 0,
      stream: "",
      capacity: 0,
      promotion_criteria: {
        minimum_attendance: 0,
        minimum_grade: 0,
      },
      grading_system_id: 0,
    },
  });

  const onSubmit: SubmitHandler<ClassFormData> = (data) => {
    console.log(data);
    // Add your submission logic here
    closeModal();
  };

  return (
    <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
      <div className="mb-7 flex items-center justify-between">
        <Title as="h3" className="text-xl font-semibold text-gray-900">
          Add New Class
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            type="number"
            label="School ID"
            placeholder="Enter school ID"
            {...register("school_id", {
              required: "School ID is required",
              valueAsNumber: true,
            })}
            error={errors.school_id?.message}
          />
          <Input
            label="Class Name"
            placeholder="Enter class name"
            {...register("name", {
              required: "Class name is required",
            })}
            error={errors.name?.message}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            type="number"
            label="Grade Level"
            placeholder="Enter grade level"
            {...register("grade_level", {
              required: "Grade level is required",
              valueAsNumber: true,
            })}
            error={errors.grade_level?.message}
          />
          <Input
            label="Stream"
            placeholder="Enter stream"
            {...register("stream", {
              required: "Stream is required",
            })}
            error={errors.stream?.message}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Input
            type="number"
            label="Capacity"
            placeholder="Enter class capacity"
            {...register("capacity", {
              required: "Capacity is required",
              valueAsNumber: true,
            })}
            error={errors.capacity?.message}
          />
          <Input
            type="number"
            label="Grading System ID"
            placeholder="Enter grading system ID"
            {...register("grading_system_id", {
              required: "Grading system ID is required",
              valueAsNumber: true,
            })}
            error={errors.grading_system_id?.message}
          />
        </div>

        <div className="rounded-lg border border-gray-200 p-5">
          <Title as="h4" className="mb-4 text-sm font-medium">
            Promotion Criteria
          </Title>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              type="number"
              label="Minimum Attendance (%)"
              placeholder="Enter minimum attendance"
              {...register("promotion_criteria.minimum_attendance", {
                required: "Minimum attendance is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Minimum attendance cannot be negative",
                },
                max: {
                  value: 100,
                  message: "Minimum attendance cannot exceed 100%",
                },
              })}
              error={errors.promotion_criteria?.minimum_attendance?.message}
            />
            <Input
              type="number"
              label="Minimum Grade (%)"
              placeholder="Enter minimum grade"
              {...register("promotion_criteria.minimum_grade", {
                required: "Minimum grade is required",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Minimum grade cannot be negative",
                },
                max: {
                  value: 100,
                  message: "Minimum grade cannot exceed 100%",
                },
              })}
              error={errors.promotion_criteria?.minimum_grade?.message}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => closeModal()}
            className="w-full @md:w-auto"
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full @md:w-auto">
            Add Class
          </Button>
        </div>
      </form>
    </div>
  );
}
