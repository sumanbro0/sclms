// app/lessons/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lesson Plans | My School",
  description: "Weekly lesson plans and curriculum details",
};

interface LessonPlan {
  id: number;
  subject: string;
  grade: string;
  unit: string;
  topic: string;
  objectives: string[];
  materials: string[];
  duration: string;
  activities: {
    type: string;
    description: string;
    duration: string;
  }[];
}

const dummyLessonPlan: LessonPlan = {
  id: 1,
  subject: "Mathematics",
  grade: "Grade 8",
  unit: "Algebra Fundamentals",
  topic: "Linear Equations",
  objectives: [
    "Solve single-variable linear equations",
    "Understand equation properties",
    "Apply problem-solving strategies",
  ],
  materials: [
    "Whiteboard and markers",
    "Student workbooks",
    "Graphing calculators",
  ],
  duration: "60 minutes",
  activities: [
    {
      type: "Warm-up",
      description: "Review previous concepts and homework discussion",
      duration: "10 mins",
    },
    {
      type: "Direct Instruction",
      description: "Introduction to solving linear equations with examples",
      duration: "20 mins",
    },
    {
      type: "Guided Practice",
      description: "Students work on practice problems with teacher support",
      duration: "20 mins",
    },
    {
      type: "Closure",
      description: "Summary and assignment of homework",
      duration: "10 mins",
    },
  ],
};

export default function LessonPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Lesson Plan
            </h1>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <span>{dummyLessonPlan.subject}</span>
              <span className="mx-2">•</span>
              <span>{dummyLessonPlan.grade}</span>
              <span className="mx-2">•</span>
              <span>{dummyLessonPlan.duration}</span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            {/* Unit and Topic */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900">
                Unit: {dummyLessonPlan.unit}
              </h2>
              <p className="text-gray-600">Topic: {dummyLessonPlan.topic}</p>
            </div>

            {/* Objectives */}
            <section className="mb-6">
              <h3 className="text-md font-medium text-gray-900 mb-2">
                Learning Objectives
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {dummyLessonPlan.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </section>

            {/* Materials */}
            <section className="mb-6">
              <h3 className="text-md font-medium text-gray-900 mb-2">
                Materials Needed
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {dummyLessonPlan.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </section>

            {/* Activities */}
            <section>
              <h3 className="text-md font-medium text-gray-900 mb-2">
                Lesson Flow
              </h3>
              <div className="space-y-4">
                {dummyLessonPlan.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {activity.type}
                        </h4>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {activity.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
