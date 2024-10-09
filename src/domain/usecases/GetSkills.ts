import { Skill } from '../entities/Skill';

export interface GetSkills {
  execute(): Promise<Skill[]>;
}