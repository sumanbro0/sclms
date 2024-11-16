import LessonTable from "@/shared/admin/lesson/lesson-list/table";
import { metaObject } from "@/config/site.config";
import TableLayout from "@/shared/table/table-layout";

export const metadata = {
  ...metaObject("Lesson Plans"),
};

const lessonPlansData = [
  {
    id: "LP001",
    title: "Introduction to Photosynthesis",
    subject: "Biology",
    grade: "10",
    teacher: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah-j.png",
      email: "sarah.j@school.edu",
    },
    date: "Oct 20, 2024",
    duration: "90 mins",
    status: "Approved",
    createdAt: "Oct 15, 2024",
  },
  {
    id: "LP002",
    title: "Advanced Algebra Concepts",
    subject: "Mathematics",
    grade: "11",
    teacher: {
      name: "Michael Chen",
      avatar: "/avatars/michael-c.png",
      email: "michael.c@school.edu",
    },
    date: "Oct 21, 2024",
    duration: "75 mins",
    status: "Pending",
    createdAt: "Oct 16, 2024",
  },
  {
    id: "LP003",
    title: "World War II Overview",
    subject: "History",
    grade: "9",
    teacher: {
      name: "Emily Brown",
      avatar: "/avatars/emily-b.png",
      email: "emily.b@school.edu",
    },
    date: "Oct 22, 2024",
    duration: "60 mins",
    status: "In Review",
    createdAt: "Oct 16, 2024",
  },
];

const pageHeader = {
  title: "Lesson Plans",
  breadcrumb: [
    {
      href: "/dashboard",
      name: "Dashboard",
    },
    {
      href: "/lesson-plans",
      name: "Lesson Plans",
    },
  ],
};

export default function LessonPlansPage() {
  return (
    <TableLayout
      type="file"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={lessonPlansData}
      fileName="lesson_plans_data"
      header="ID,Title,Subject,Grade,Teacher,Date,Duration,Status,Created At"
    >
      <LessonTable data={lessonPlansData} />
    </TableLayout>
  );
}
