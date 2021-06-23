import  { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity("tags")
export class Tag {

  @PrimaryColumn()
  readonly uid: string

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.uid){
      this.uid = uuid();
    }
  }
}