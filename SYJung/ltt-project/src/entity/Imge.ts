// 오류 투성..
// npm install typeorm --save
// npm install reflect-metadata --save
// npm install mysql --save
// npm audit 
// npm audit fix
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 100, nullable: true})
    mimetype: string;
    
    @Column({type: "longblob"})
    data: string;
    
    @Column({length: 100, nullable: true})
    original_name : string;
    
    @CreateDateColumn()
    created: Date;
}