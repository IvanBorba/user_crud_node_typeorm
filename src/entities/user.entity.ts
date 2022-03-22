import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column()
  readonly createdOn: Date;

  @Column()
  updatedOn: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.isAdm) {
      this.isAdm = false;
    }

    if (!this.createdOn) {
      this.createdOn = new Date();
    }

    if (!this.updatedOn) {
      this.updatedOn = new Date();
    }
  }
}
