'use client';

import { Project } from '@/app/types';
import { ProjectCard } from '../../project-card';
import { useProjects } from './useProject';

export const ProjectList = () => {
  const { projects } = useProjects();

  return projects?.map(({ documents, title, id, description, sdg }: Project) => (
    <ProjectCard key={id} documents={documents} title={title} id={id} description={description} sdg={sdg} />
  ));
};
