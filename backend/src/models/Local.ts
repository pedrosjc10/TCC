import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Partida } from "./Partida";

@Entity("local")
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  tipo!: string;

  @Column()
  modalidade!: string;

  @Column()
  cep!: string;

  @Column()
  logradouro!: string;

  @Column()
  numero!: string;

  @Column()
  cidade!: string;
  
  @OneToMany(() => Partida, (partida) => partida.local)
  partidas!: Partida[];
}
