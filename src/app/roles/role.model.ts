// export interface RoleDTO {
//   role: string;
//   desc?: string;
//   phone: number;
//   email: string;
//   password: string;
//   selecttype: string;
//   status: string;
// }
export class Role {
  public role: string;
  public desc?: string;
  public phone: number;
  public email: string;
  public password: string;
  public selecttype: string;
  public status: string;

  constructor(
    role: string,
    desc: string,
    phone: number,
    email: string,
    password: string,
    selecttype: string,
    status: string
  ) {
    this.role = role;
    this.desc = desc;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.selecttype = selecttype;
    this.status = status;
  }
}
