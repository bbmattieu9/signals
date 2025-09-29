import { computed, Injectable, signal } from '@angular/core';


export interface User {
  userId: string;
  name: string;
  employeeClassCode: string | null;
  staffId: string | null;
  unit: string;
  branch: string;
  userName: string;
  email: string;
  role: string;
  department: string;
  branchId: string | null;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

   private readonly _users = signal<User[]>([
    {
      userId: '001',
      name: 'Adebayo Johnson',
      employeeClassCode: 'A1',
      staffId: 'STF001',
      unit: 'Engineering',
      branch: 'Lagos Main',
      userName: 'adebayo.johnson',
      email: 'adebayo.johnson@company.com',
      role: 'Senior Developer',
      department: 'IT',
      branchId: 'LM001'
    },
    {
      userId: '002',
      name: 'Fatima Abdullahi',
      employeeClassCode: 'B2',
      staffId: 'STF002',
      unit: 'Marketing',
      branch: 'Abuja Branch',
      userName: 'fatima.abdullahi',
      email: 'fatima.abdullahi@company.com',
      role: 'Marketing Manager',
      department: 'Marketing',
      branchId: 'AB001'
    },
    {
      userId: '003',
      name: 'Chinedu Okafor',
      employeeClassCode: 'A1',
      staffId: 'STF003',
      unit: 'Finance',
      branch: 'Lagos Main',
      userName: 'chinedu.okafor',
      email: 'chinedu.okafor@company.com',
      role: 'Financial Analyst',
      department: 'Finance',
      branchId: 'LM001'
    },
    {
      userId: '004',
      name: 'Kemi Adebisi',
      employeeClassCode: 'C3',
      staffId: 'STF004',
      unit: 'HR',
      branch: 'Port Harcourt',
      userName: 'kemi.adebisi',
      email: 'kemi.adebisi@company.com',
      role: 'HR Officer',
      department: 'Human Resources',
      branchId: 'PH001'
    },
    {
      userId: '005',
      name: 'Ibrahim Musa',
      employeeClassCode: 'A2',
      staffId: 'STF005',
      unit: 'Operations',
      branch: 'Kano Branch',
      userName: 'ibrahim.musa',
      email: 'ibrahim.musa@company.com',
      role: 'Operations Lead',
      department: 'Operations',
      branchId: 'KN001'
    },
    {
      userId: '006',
      name: 'Grace Emenike',
      employeeClassCode: 'B1',
      staffId: 'STF006',
      unit: 'Customer Service',
      branch: 'Lagos Main',
      userName: 'grace.emenike',
      email: 'grace.emenike@company.com',
      role: 'Customer Success Manager',
      department: 'Customer Service',
      branchId: 'LM001'
    },
    {
      userId: '007',
      name: 'Yusuf Hassan',
      employeeClassCode: null,
      staffId: null,
      unit: 'Sales',
      branch: 'Kaduna Office',
      userName: 'yusuf.hassan',
      email: 'yusuf.hassan@company.com',
      role: 'Sales Representative',
      department: 'Sales',
      branchId: 'KD001'
    },
    {
      userId: '008',
      name: 'Blessing Okwu',
      employeeClassCode: 'A1',
      staffId: 'STF008',
      unit: 'Engineering',
      branch: 'Lagos Main',
      userName: 'blessing.okwu',
      email: 'blessing.okwu@company.com',
      role: 'DevOps Engineer',
      department: 'IT',
      branchId: 'LM001'
    },
    {
      userId: '009',
      name: 'Mohammed Bello',
      employeeClassCode: 'B2',
      staffId: 'STF009',
      unit: 'Procurement',
      branch: 'Abuja Branch',
      userName: 'mohammed.bello',
      email: 'mohammed.bello@company.com',
      role: 'Procurement Officer',
      department: 'Procurement',
      branchId: 'AB001'
    },
    {
      userId: '010',
      name: 'Chioma Nwankwo',
      employeeClassCode: 'A2',
      staffId: 'STF010',
      unit: 'Legal',
      branch: 'Lagos Main',
      userName: 'chioma.nwankwo',
      email: 'chioma.nwankwo@company.com',
      role: 'Legal Counsel',
      department: 'Legal',
      branchId: 'LM001'
    }
  ]);

  readonly users = this._users.asReadonly();
  readonly totalUsers = computed(() => this.users().length);

   addUser(user: User): void {
    this._users.update(users => [...users, user]);
  }

    removeUser(userId: string): void {
    this._users.update(users => users.filter(u => u.userId !== userId));
  }

   updateUser(userId: string, updates: Partial<User>): void {
    this._users.update(users => 
      users.map(user => 
        user.userId === userId 
          ? { ...user, ...updates }
          : user
      )
    );
  }

  getUserById(userId: string): User | undefined {
    return this.users().find(user => user.userId === userId);
  }

   getUsersByRole(role: string): User[] {
    return this.users().filter(user => user.role === role);
  }

   clearAllUsers(): void {
    this._users.set([]);
  }

  constructor() { }
}
