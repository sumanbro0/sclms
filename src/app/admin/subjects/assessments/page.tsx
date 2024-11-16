import AssessmentTable from "@/shared/admin/assessment/assessment-list/table";
import { metaObject } from "@/config/site.config";
import TableLayout from "@/shared/table/table-layout";

export const metadata = {
  ...metaObject("Assessments"),
};

const assessmentData = [
  {
    id: "ASM001",
    title: "Biology Mid-Term Exam",
    type: "Exam",
    subject: "Biology",
    grade: "10",
    teacher: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah-j.png",
      email: "sarah.j@school.edu",
    },
    dueDate: "Oct 25, 2024",
    duration: "120 mins",
    totalPoints: 100,
    status: "Published",
    createdAt: "Oct 15, 2024",
  },
  {
    id: "ASM002",
    title: "Algebra Quiz 3",
    type: "Quiz",
    subject: "Mathematics",
    grade: "11",
    teacher: {
      name: "Michael Chen",
      avatar: "/avatars/michael-c.png",
      email: "michael.c@school.edu",
    },
    dueDate: "Oct 23, 2024",
    duration: "45 mins",
    totalPoints: 50,
    status: "Draft",
    createdAt: "Oct 16, 2024",
  },
  {
    id: "ASM003",
    title: "History Chapter Test",
    type: "Test",
    subject: "History",
    grade: "9",
    teacher: {
      name: "Emily Brown",
      avatar: "/avatars/emily-b.png",
      email: "emily.b@school.edu",
    },
    dueDate: "Oct 27, 2024",
    duration: "90 mins",
    totalPoints: 75,
    status: "Scheduled",
    createdAt: "Oct 17, 2024",
  },
];

const pageHeader = {
  title: "Assessments",
  breadcrumb: [
    {
      href: "/dashboard",
      name: "Dashboard",
    },
    {
      href: "/assessments",
      name: "Assessments",
    },
  ],
};

export default function AssessmentsPage() {
  return (
    <TableLayout
      type="file"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={assessmentData}
      fileName="assessment_data"
      header="ID,Title,Type,Subject,Grade,Teacher,Due Date,Duration,Total Points,Status,Created At"
    >
      <AssessmentTable data={assessmentData} />
    </TableLayout>
  );
}
