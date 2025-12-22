import { Routes } from "@angular/router";
import { RegisterPage } from "./pages/register-page/register-page";

export const authRoutes: Routes = [
  {
    path: '',
    component: RegisterPage,
  }
];

export default authRoutes;
