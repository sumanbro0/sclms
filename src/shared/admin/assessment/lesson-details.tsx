"use client";

import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Badge, Title, Text } from "rizzui";
import Table from "@/shared/table";
import { siteConfig } from "@/config/site.config";

const lessonPlanDetails = [
  {
    id: "1",
    activity: {
      title: "Introduction to Photosynthesis",
      description:
        "Overview of the photosynthesis process and its importance in plant life.",
      duration: "30 mins",
    },
    resources: "Textbook, Digital Slides",
    learningObjectives: "Understanding basic concept of photosynthesis",
    assessmentMethod: "Class Discussion",
  },
  {
    id: "2",
    activity: {
      title: "Interactive Demonstration",
      description:
        "Hands-on experiment showing the process of photosynthesis using simple materials.",
      duration: "45 mins",
    },
    resources: "Lab Equipment, Worksheets",
    learningObjectives: "Practical demonstration of photosynthesis",
    assessmentMethod: "Lab Report",
  },
  {
    id: "3",
    activity: {
      title: "Group Work & Discussion",
      description:
        "Students work in groups to create concept maps and present their understanding.",
      duration: "35 mins",
    },
    resources: "Chart Paper, Markers",
    learningObjectives: "Collaborative learning and presentation skills",
    assessmentMethod: "Peer Assessment",
  },
];

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    width: 50,
  },
  {
    title: "Activity",
    dataIndex: "activity",
    key: "activity",
    width: 300,
    render: (activity: any) => (
      <>
        <Title as="h6" className="mb-0.5 text-sm font-medium">
          {activity.title}
        </Title>
        <Text as="p" className="max-w-[250px] text-sm text-gray-500">
          {activity.description}
        </Text>
        <Text as="p" className="text-sm text-gray-500">
          Duration: {activity.duration}
        </Text>
      </>
    ),
  },
  {
    title: "Resources",
    dataIndex: "resources",
    key: "resources",
    width: 150,
  },
  {
    title: "Learning Objectives",
    dataIndex: "learningObjectives",
    key: "learningObjectives",
    width: 200,
  },
  {
    title: "Assessment",
    dataIndex: "assessmentMethod",
    key: "assessmentMethod",
    width: 150,
  },
];

function LessonPlanDetailsTable() {
  return (
    <Table
      data={lessonPlanDetails}
      columns={columns}
      variant="minimal"
      rowKey={(record) => record.id}
      scroll={{ x: 660 }}
      className="mb-11"
    />
  );
}

export default function LessonPlanDetails() {
  return (
    <div className="w-full rounded-xl border border-muted p-5 text-sm sm:p-6 lg:p-8 2xl:p-10">
      <div className="mb-12 flex flex-col-reverse items-start justify-between md:mb-16 md:flex-row">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.title}
          className="dark:invert"
          priority
        />
        <div className="mb-4 md:mb-0">
          <Badge
            variant="flat"
            color="success"
            rounded="md"
            className="mb-3 md:mb-2"
          >
            Approved
          </Badge>
          <Title as="h6">LESSON - #246098</Title>
          <Text className="mt-0.5 text-gray-500">Lesson Plan Number</Text>
        </div>
      </div>

      <div className="mb-12 grid gap-4 xs:grid-cols-2 sm:grid-cols-3 sm:grid-rows-1">
        <div className="">
          <Title as="h6" className="mb-3.5 font-semibold">
            Teacher Details
          </Title>
          <Text className="mb-1.5 text-sm font-semibold uppercase">
            Science Department
          </Text>
          <Text className="mb-1.5">Sarah Johnson</Text>
          <Text className="mb-1.5">
            Room 401, Science Block <br /> Main Campus
          </Text>
          <Text className="mb-4 sm:mb-6 md:mb-8">sarah.j@school.edu</Text>
          <div>
            <Text className="mb-2 text-sm font-semibold">Created Date</Text>
            <Text>Oct 15, 2024</Text>
          </div>
        </div>

        <div className="mt-4 xs:mt-0">
          <Title as="h6" className="mb-3.5 font-semibold">
            Class Details
          </Title>
          <Text className="mb-1.5 text-sm font-semibold uppercase">
            Grade 10 Biology
          </Text>
          <Text className="mb-1.5">Section: A</Text>
          <Text className="mb-1.5">
            Total Students: 30 <br />
            Duration: 90 mins
          </Text>
          <Text className="mb-4 sm:mb-6 md:mb-8">Term: Fall 2024</Text>
          <div>
            <Text className="mb-2 text-sm font-semibold">Lesson Date</Text>
            <Text>Oct 20, 2024</Text>
          </div>
        </div>

        <div className="mt-4 flex sm:mt-6 md:mt-0 md:justify-end">
          <QRCodeSVG
            value="https://lessonplan.school.edu/246098"
            className="h-28 w-28 lg:h-32 lg:w-32"
          />
        </div>
      </div>

      <LessonPlanDetailsTable />

      <div className="flex flex-col-reverse items-start justify-between border-t border-muted pb-4 pt-8 xs:flex-row">
        <div className="mt-6 max-w-md pe-4 xs:mt-0">
          <Title
            as="h6"
            className="mb-1 text-xs font-semibold uppercase xs:mb-2 xs:text-sm"
          >
            Additional Notes
          </Title>
          <Text className="leading-[1.7]">
            Please ensure all safety protocols are followed during the practical
            demonstration. Special attention needed for students with learning
            accommodations.
          </Text>
        </div>
        <div className="w-full max-w-sm">
          <Text className="flex items-center justify-between border-b border-muted pb-3.5 lg:pb-5">
            Total Duration:{" "}
            <Text as="span" className="font-semibold">
              110 minutes
            </Text>
          </Text>
          <Text className="flex items-center justify-between border-b border-muted py-3.5 lg:py-5">
            Materials Required:{" "}
            <Text as="span" className="font-semibold">
              8 items
            </Text>
          </Text>
          <Text className="flex items-center justify-between border-b border-muted py-3.5 lg:py-5">
            Learning Outcomes:{" "}
            <Text as="span" className="font-semibold">
              3 main objectives
            </Text>
          </Text>
          <Text className="flex items-center justify-between pt-4 text-base font-semibold text-gray-900 lg:pt-5">
            Assessment Methods: <Text as="span">3 types</Text>
          </Text>
        </div>
      </div>
    </div>
  );
}
