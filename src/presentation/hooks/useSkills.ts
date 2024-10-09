import { useState, useEffect } from 'react';
import { Skill } from '../../domain/entities/Skill';
import { SkillRepository } from '../../infrastructure/repositories/SkillRepository';

export const useSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillRepository = new SkillRepository();
        const fetchedSkills = await skillRepository.execute();
        setSkills(fetchedSkills);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch skills');
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};