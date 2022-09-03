import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Session {
    @PrimaryColumn()
    sessionId: string

    @Column()
    language: string;

    @Column()
    codeValue: string;

    @Column()
    textValue: string;
}
