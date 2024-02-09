export {default} from "next-auth/middleware";

export const config = {matcher: [
    "/stu_dashboard",
    "/training_entity",
    "/admin/departmentCoordinators",
    "/admin/orderCompany",
    "/admin/trainingCompany",
    "/training_entity/training",
    "/training_entity/training/training_plan",
    "/training_entity/requist_training",
    "/training_entity/attendance",
    "/training_entity",
    "/admin"
  ],
};