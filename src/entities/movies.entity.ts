import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("movies")
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 50, unique: true, nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: "integer", nullable: false })
  duration: number;

  @Column({ type: "integer", nullable: false })
  price: number;
}

export { Movie };
