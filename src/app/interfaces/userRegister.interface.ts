import { DepartmentDto } from "./departmentDto.interface";

export interface UserRegister{
  username:string;
  email:string;
  fullName:string;
  active:boolean;
  password:string;
  role:string;
  department:DepartmentDto;
}
