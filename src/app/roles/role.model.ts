export class Role {
  public role: string;
  public desc?: string;
  public phone: number;
  public email: string;
  public password: string;
  public selecttype?: string;
  public check?: boolean;


  constructor(role: string, desc: string, phone: number, email: string, password: string, selecttype: string, check: boolean) {
    this.role = role;
    this.desc = desc;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.selecttype = selecttype;
    this.check = check;
  }
}
