import { Student } from "@/types/student";

// components/students/profile-tab.tsx
export default function ProfileTab({ student }: { student: Student }) {
  return (
    <div className="grid gap-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {student.name}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {student.phone}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">
          Address
        </label>
        <div className="mt-1 rounded-lg border border-gray-200 p-3">
          {student.present_address}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {student.email}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Date of Birth
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {new Date(student.dob).toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Blood Group
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {student.blood_group}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Religion
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {student.religion}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            National ID
          </label>
          <div className="mt-1 rounded-lg border border-gray-200 p-3">
            {student.national_id}
          </div>
        </div>
      </div>
    </div>
  );
}
