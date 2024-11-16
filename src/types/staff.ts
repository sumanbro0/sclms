// types/employee.ts
export interface Employee {
  id: number;
  name: string;
  employee_id: string;
  role: string;
  departments: number[];
  qualifications: {
    degree: string;
    institution: string;
    year: number;
  }[];
  subjects_taught: number[];
  schedule: {
    working_hours: Record<string, any>;
    leaves_quota: Record<string, any>;
  };
  contact_info: {
    email: string;
    phone: string;
    emergency_contact: Record<string, any>;
  };
}


export type EmployeeFormData = Omit<
  Employee,
  'id' | 'created_at' | 'updated_at'
>;