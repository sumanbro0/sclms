// app/homework/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homework | My School",
  description: "Student homework assignments and submissions",
};

type Attachment = {
  id: number;
  name: string;
  type: "pdf" | "doc" | "image" | "link";
  size?: string;
  url?: string;
};

type Submission = {
  status: "not-started" | "in-progress" | "submitted" | "late";
  submittedAt?: string;
  grade?: number;
  feedback?: string;
};

interface HomeworkAssignment {
  id: number;
  title: string;
  subject: string;
  grade: string;
  assignedDate: string;
  dueDate: string;
  description: string;
  instructions: string[];
  points: number;
  attachments: Attachment[];
  submission: Submission;
}

const dummyHomework: HomeworkAssignment = {
  id: 1,
  title: "Linear Equations Word Problems",
  subject: "Mathematics",
  grade: "Grade 8",
  assignedDate: "2024-11-10",
  dueDate: "2024-11-17",
  description: "Practice solving real-world problems using linear equations",
  points: 25,
  instructions: [
    "Complete all 10 word problems in your workbook",
    "Show all your work and steps clearly",
    "Circle your final answers",
    "Write a brief explanation for each solution",
  ],
  attachments: [
    {
      id: 1,
      name: "Word Problems Worksheet",
      type: "pdf",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Solution Guide Template",
      type: "doc",
      size: "1.1 MB",
    },
  ],
  submission: {
    status: "not-started",
  },
};

export default function HomeworkPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusColor = (status: Submission["status"]) => {
    switch (status) {
      case "not-started":
        return "bg-gray-100 text-gray-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "submitted":
        return "bg-green-100 text-green-800";
      case "late":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getFileIcon = (type: Attachment["type"]) => {
    switch (type) {
      case "pdf":
        return "📄";
      case "doc":
        return "📝";
      case "image":
        return "🖼️";
      case "link":
        return "🔗";
      default:
        return "📎";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {dummyHomework.title}
                </h1>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <span>{dummyHomework.subject}</span>
                  <span className="mx-2">•</span>
                  <span>{dummyHomework.grade}</span>
                  <span className="mx-2">•</span>
                  <span>{dummyHomework.points} points</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(dummyHomework.submission.status)}`}
              >
                {dummyHomework.submission.status
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            {/* Dates and Description */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Assigned Date
                  </h3>
                  <p className="mt-1 text-gray-900">
                    {formatDate(dummyHomework.assignedDate)}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Due Date
                  </h3>
                  <p className="mt-1 text-gray-900">
                    {formatDate(dummyHomework.dueDate)}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Description
                </h3>
                <p className="mt-1 text-gray-900">
                  {dummyHomework.description}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <section className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Instructions
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {dummyHomework.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-600">
                    {instruction}
                  </li>
                ))}
              </ul>
            </section>

            {/* Attachments */}
            <section className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Attachments
              </h3>
              <div className="space-y-2">
                {dummyHomework.attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="mr-2">{getFileIcon(attachment.type)}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {attachment.name}
                      </p>
                      <p className="text-sm text-gray-500">{attachment.size}</p>
                    </div>
                    <span className="text-blue-600">Download</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Submission Section */}
            <section>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Submission
              </h3>
              {dummyHomework.submission.status === "not-started" ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Start Assignment
                  </button>
                  <p className="mt-2 text-sm text-gray-500">
                    Click to begin working on your assignment
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">
                    Submission details will appear here
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
