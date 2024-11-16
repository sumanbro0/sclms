
export type Student = {
  id: number;
  school_id: number;
  user_id: number;
  admission_no: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  gender: "male" | "female" | "other";
  blood_group: string;
  present_address: string;
  permanent_address: string;
  religion: string;
  national_id: string;
  photo: string;
  status: "active" | "inactive" | "transferred" | "graduated";
  created_at: string;
  updated_at: string;
};



export interface StudentFormData {
  admission_no: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  gender: "male" | "female" | "other";
  blood_group: string;
  present_address: string;
  permanent_address: string;
  religion: string;
  national_id: string;
  status: "active" | "inactive" | "transferred" | "graduated";
}


// types/student.ts
export interface EditStudent extends StudentFormData {
  id: string;
  created_at: string;
  updated_at: string;
}