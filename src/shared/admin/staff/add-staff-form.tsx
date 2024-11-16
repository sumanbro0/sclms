"use client";

import React from "react";
import { PiXBold } from "react-icons/pi";
import { ActionIcon, Title, Text, Button, Input, Select } from "rizzui";
import { useModal } from "@/shared/modal-views/use-modal";
import {
  useForm,
  SubmitHandler,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { Employee } from "@/types/staff";
import { useEmployeeMutation } from "@/query/use-staff";

type EmployeeFormData = Omit<Employee, "id">;

export default function AddEmployeeModal() {
  const { closeModal } = useModal();
  const { mutate: createEmployee, isLoading } = useEmployeeMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    defaultValues: {
      name: "",
      employee_id: "",
      role: "",
      departments: [],
      qualifications: [
        {
          degree: "",
          institution: "",
          year: new Date().getFullYear(),
        },
      ],
      subjects_taught: [],
      schedule: {
        working_hours: {},
        leaves_quota: {},
      },
      contact_info: {
        email: "",
        phone: "",
        emergency_contact: {},
      },
    },
  });

  const {
    fields: qualificationFields,
    append: appendQualification,
    remove: removeQualification,
  } = useFieldArray({
    control,
    name: "qualifications",
  });

  const {
    fields: departmentFields,
    append: appendDepartment,
    remove: removeDepartment,
  } = useFieldArray({
    control,
    // @ts-ignore
    name: "departments",
  });

  const {
    fields: subjectsFields,
    append: appendSubject,
    remove: removeSubject,
  } = useFieldArray({
    control,
    // @ts-ignore
    name: "subjects_taught",
  });

  const onSubmit: SubmitHandler<EmployeeFormData> = (data) => {
    createEmployee(data, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  return (
    <div className="m-auto px-5 pb-8 pt-5 @lg:pt-6 @2xl:px-7">
      <div className="mb-6 flex items-center justify-between">
        <Title as="h3" className="text-lg">
          Add New Employee
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
        {/* Basic Information */}
        <Input
          label="Name"
          placeholder="Enter employee name"
          {...register("name", { required: true })}
          error={errors.name && "Name is required"}
        />

        <Input
          label="Employee ID"
          placeholder="Enter employee ID"
          {...register("employee_id", { required: true })}
          error={errors.employee_id && "Employee ID is required"}
        />

        <Controller
          control={control}
          name="role"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Role"
              options={[{ label: "Coordinator", value: "coordinator" }]}
              value={value}
              onChange={onChange}
              error={errors.role && "Role is required"}
              placeholder="Select role"
            />
          )}
        />

        {/* Departments Section */}
        <div className="space-y-3">
          <Text className="font-medium">Departments</Text>
          {departmentFields.map((field, index) => (
            <div key={field.id} className="flex gap-3 items-center">
              <Input
                label="Department ID"
                placeholder="Enter department ID"
                type="number"
                {...register(`departments.${index}` as const, {
                  valueAsNumber: true,
                  required: true,
                })}
                error={
                  errors.departments?.[index] && "Department ID is required"
                }
              />
              <Button
                type="button"
                variant="outline"
                className="-mb-6"
                onClick={() => removeDepartment(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => appendDepartment(0)}
          >
            Add Department
          </Button>
        </div>

        {/* Qualifications Section */}
        <div className="space-y-3">
          <Text className="font-medium">Qualifications</Text>
          {qualificationFields.map((field, index) => (
            <div key={field.id} className="space-y-3 rounded-lg border p-3">
              <Input
                label="Degree"
                placeholder="Enter degree"
                {...register(`qualifications.${index}.degree` as const)}
              />
              <Input
                label="Institution"
                placeholder="Enter institution"
                {...register(`qualifications.${index}.institution` as const)}
              />
              <Input
                label="Year"
                type="number"
                placeholder="Enter year"
                {...register(`qualifications.${index}.year` as const, {
                  valueAsNumber: true,
                })}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => removeQualification(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              appendQualification({
                degree: "",
                institution: "",
                year: new Date().getFullYear(),
              })
            }
          >
            Add Qualification
          </Button>
        </div>

        {/* Subjects Taught Section */}
        <div className="space-y-3">
          <Text className="font-medium">Subjects Taught</Text>
          {subjectsFields.map((field, index) => (
            <div key={field.id} className="flex gap-3">
              <Input
                label="Subject ID"
                placeholder="Enter subject ID"
                type="number"
                {...register(`subjects_taught.${index}` as const, {
                  valueAsNumber: true,
                  required: true,
                })}
                error={
                  errors.subjects_taught?.[index] && "Subject ID is required"
                }
              />
              <Button
                type="button"
                variant="outline"
                className="-mb-6"
                onClick={() => removeSubject(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => appendSubject(0)}
          >
            Add Subject
          </Button>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <Text className="font-medium">Contact Information</Text>
          <Input
            type="email"
            label="Email"
            placeholder="Enter email address"
            {...register("contact_info.email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            error={errors.contact_info?.email && "Valid email is required"}
          />
          <Input
            label="Phone"
            placeholder="Enter phone number"
            {...register("contact_info.phone")}
          />
        </div>

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
            {isLoading ? "Adding..." : "Add Employee"}
          </Button>
        </div>
      </form>
    </div>
  );
}
