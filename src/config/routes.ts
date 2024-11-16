export const routes = {
 admin:{
    dashboard: "/admin/",
    students: "/admin/students",
    staff: "/admin/staff",
    guardians: "/admin/guardians",
    classes: "/admin/classes",
    subjects: "/admin/subjects",
    subjectDetails: "/admin/subjects/details",
    lessonPlan:"/admin/subjects/lesson-plan",
    assessMents:"/admin/subjects/assessments",
    homework:"/admin/subjects/homework",
    administration: "/admin/administration",
    attendance: "/admin/attendance",
 },
 auth:{
   forgotPassword1: "/auth/forgot-password-1",
   signUp1: "/auth/sign-up-1",
   signIn1: "/auth/sign-in-1",
 },
 parent:{
  summary:"/parent/",
  students: "/parent/student",
  messages: "/parent/message",
 }
};
