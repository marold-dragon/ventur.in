"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Project {
  id: number;
  title: string;
  slug: string;
}

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select('id, title, slug');

    if (error || !data) {
      console.error('Error fetching projects:', error);
      setProjects([ // Fallback dummy data
        { id: 1, title: 'Dummy Project 1', slug: 'dummy-project-1' },
        { id: 2, title: 'Dummy Project 2', slug: 'dummy-project-2' },
      ]);
    } else {
      setProjects(data as Project[]);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Portfolio</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </motion.section>
  );
}
