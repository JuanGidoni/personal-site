import { Skill } from '../../domain/entities/Skill';
import { GetSkills } from '../../domain/usecases/GetSkills';

export class SkillRepository implements GetSkills {
  private skills: Skill[] = [
    { id: '1', name: 'React', category: 'Frontend' },
    { id: '2', name: 'TypeScript', category: 'Language' },
    { id: '3', name: 'Node.js', category: 'Backend' },
    // Add more skills as needed
  ];

  async execute(): Promise<Skill[]> {
    // Simulating an async operation
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.skills), 100);
    });
  }
}