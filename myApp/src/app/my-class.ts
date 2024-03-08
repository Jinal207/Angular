export class MyClass {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getname(): string {
    return this.name
  }

  getid(): number {
    return this.id
  }


}
