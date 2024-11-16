import HomeworkTable from "@/shared/admin/homework/homework-list/table";
import { metaObject } from "@/config/site.config";
import TableLayout from "@/shared/table/table-layout";
import { routes } from "@/config/routes";

export const metadata = {
  ...metaObject("Homework Assignments"),
};

const homeworkData = [
  {
    id: "HW001",
    title: "Photosynthesis Lab Report",
    subject: "Biology",
    grade: "10",
    teacher: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah-j.png",
      email: "sarah.j@school.edu",
    },
    assignedDate: "Oct 15, 2024",
    dueDate: "Oct 22, 2024",
    totalPoints: 100,
    status: "Assigned",
    createdAt: "Oct 15, 2024",
  },
  {
    id: "HW002",
    title: "Quadratic Equations Practice",
    subject: "Mathematics",
    grade: "11",
    teacher: {
      name: "Michael Chen",
      avatar: "/avatars/michael-c.png",
      email: "michael.c@school.edu",
    },
    assignedDate: "Oct 16, 2024",
    dueDate: "Oct 23, 2024",
    totalPoints: 50,
    status: "Pending",
    createdAt: "Oct 16, 2024",
  },
  {
    id: "HW003",
    title: "World War II Essay",
    subject: "History",
    grade: "9",
    teacher: {
      name: "Emily Brown",
      avatar: "/avatars/emily-b.png",
      email: "emily.b@school.edu",
    },
    assignedDate: "Oct 16, 2024",
    dueDate: "Oct 25, 2024",
    totalPoints: 75,
    status: "Submitted",
    createdAt: "Oct 16, 2024",
  },
];

const pageHeader = {
  title: "Homework Assignments",
  breadcrumb: [
    {
      href: routes.admin.subjects,
      name: "Subjects",
    },
    {
      href: routes.admin.homework,
      name: "Homework",
    },
  ],
};

export default function HomeworkPage() {
  return (
    <TableLayout
      type="file"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={homeworkData}
      fileName="homework_data"
      header="ID,Title,Subject,Grade,Teacher,Assigned Date,Due Date,Points,Status,Created At"
    >
      <HomeworkTable data={homeworkData} />
    </TableLayout>
  );
}
