import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


export interface InputUser {
    firstName: string;
    lastName: string;
    password: string;
}

export class OutputUser {
    firstName: string;
    lastName: string;
    token: string;
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  static findByName(firstName: string): Promise<User> {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .getOne();
    }
}
