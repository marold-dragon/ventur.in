"use client";
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Project {
  title: string;
  client_name: string;
  challenge: string;
  solution: string;
  impact_metrics: string;
}

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      fetchProject(slug as string);
    }
  }, [slug]);

  const fetchProject = async (slug: string) => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) console.error('Error fetching project:', error);
    else setProject(data as Project);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>Client: {project.client_name}</p>
      <p>Challenge: {project.challenge}</p>
      <p>Solution: {project.solution}</p>
      <p>Impact: {project.impact_metrics}</p>
    </div>
  );
}
