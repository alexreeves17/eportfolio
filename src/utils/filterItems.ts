import { selectedSkill } from '../store/skillsStore';

export const initializeFilter = (containerSelector: string) => {
  const updateVisibility = (skill: string | null) => {
    const items = document.querySelectorAll(`${containerSelector} [data-skills]`);
    
    items.forEach(item => {
      const skills = (item as HTMLElement).dataset.skills?.split(',') || [];
      if (!skill || skills.includes(skill)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  };

  // Initial update and subscribe to changes
  updateVisibility(selectedSkill.get());
  return selectedSkill.subscribe(updateVisibility);
};