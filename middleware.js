export {default} from "next-auth/middleware";

export const config = {matcher: [
    "/stu_dashboard",
    "/training_entity",
    "/admin/departmentCoordinators",
    "/admin/orderCompany",
    "/admin/trainingCompany",
    "/admin/suggestions",
    "/training_entity/training",
    "/training_entity/training/attandance",
    "/training_entity/training/training_plan",
    "/training_entity/requist_training",
    "/training_entity/concat",
    "/training_entity/suggestions",
    "/training_entity",
    "/admin",
  ],
};