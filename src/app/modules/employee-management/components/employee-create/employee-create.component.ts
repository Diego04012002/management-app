import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInfoService } from '../../../../shared/services/userInfo.service';
import { CommonModule, JsonPipe, KeyValuePipe } from '@angular/common';
import { environment } from '../../../../../environments/environment.development';
import { FormUtils } from '../../../../utils/form-utils';
import { AuthService } from '../../../auth/services/auth.service';
import { UserRegister } from '../../../../interfaces/userRegister.interface';
import Notiflix from 'notiflix';
import { Role } from '../../../../types/role.type';



@Component({
  selector: 'app-employee-create',
  imports: [ReactiveFormsModule,KeyValuePipe],
  templateUrl: './employee-create.component.html',
})
export class EmployeeCreateComponent {
  basePassword = environment.basePassword;
  fb = inject(FormBuilder);
  userInfoService = inject(UserInfoService);
  authService=inject(AuthService)
  formUtils=FormUtils
  roles=Role

  employeeForm = this.fb.group({
    username: [''],
    email: ['', [Validators.required, Validators.email]],
    fullName: [
      '',
      [
        Validators.required,
        this.formUtils.notPropertyFullName,
      ],
    ],
    active: [true],
    password: ['', []],
    role: [null, [Validators.required]],
    department: [null, [Validators.required]],
  });

  departmentResource = rxResource({
    stream: () => this.userInfoService.getDepartments(),
  });

  getShortName(fullName: string) {
    if (!fullName) {
      return '';
    }

    const parts = fullName.trim().split(' ');
    const firstName = parts[0] ?? '';
    const firstSurnameInitial = parts[1]?.charAt(0).toUpperCase() ?? '';
    const secondSurnameInitial = parts[2]?.charAt(0).toUpperCase() ?? '';

    return `${firstName} ${firstSurnameInitial} ${secondSurnameInitial}`.trim();
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeLike:Partial<UserRegister> = {
        ...(this.employeeForm.value as any)
      };
      employeeLike.password = this.basePassword;
      employeeLike.username = this.getShortName(employeeLike.fullName!);
      this.authService.register(employeeLike).subscribe((data)=>{
        if(data){
          this.employeeForm.reset()
          Notiflix.Notify.success('Empleado creado con exito');
        }
      })
    }
  }
}
