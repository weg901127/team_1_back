import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity()
class bookinfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100 })
  title: string;

  @Column({ type: "varchar", length: 100 })
  author: string;

  @Column({ type: "varchar", length: 100 })
  publisher: string;

  @Column({ type: "datetime"})
  publishedAt: string;

  @Column({ type: "varchar", length: 20 })
  isbn: string;

  @Column({ type: "varchar", length: 300 })
  image: string;
  
  @Column({ type: "varchar", length: 20 })
  category: string;
  
  @Column({ type: "varchar", nullable: true })
  longDesc?: string;

  @Column({ type: "boolean", default: false })
  isDone: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default bookinfo;
