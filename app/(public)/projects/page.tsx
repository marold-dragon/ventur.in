"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@/components/icons';
import { createClient } from '@supabase/supabase-js';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  industry: string;
  services: string;
  timeline: string;
}

const FILTERS = ['All', 'UI/UX', 'Web Dev', 'Mobile App'];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
          .from('projects')
          .select('id, slug, title, category, description, image, industry, services, timeline')
          .order('id', { ascending: true });

        if (!error && data && data.length > 0) {
          setProjects(data);
          setLoading(false);
          return;
        }
      }
    } catch {}

    // Fallback to JSON
    try {
      const res = await fetch('/case-studies.json');
      const data = await res.json();
      setProjects(data);
    } catch (e) {
      console.error('Failed to load projects', e);
    }
    setLoading(false);
  };

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <main>
      <section className="size-full lg:pt-45 lg:pb-20 md:py-15 py-12.5">
        <div className="container">

          {/* Header */}
          <div className="mb-7.5 relative space-y-4 text-center">
            <div className="inline-flex py-1.5 px-2.5 rounded items-center justify-center gap-2 inset-shadow">
              <ArrowLeft className="size-2.5" />
              <div className="font-semibold text-xs/none uppercase tracking-widest">Portfolio</div>
              <ArrowRight className="size-2.5" />
            </div>
            <h2 className="text-[52px]">Our Portfolio</h2>
            <p className="max-w-130 mx-auto">Explore our recent projects across different categories</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`py-2 px-6 rounded-full border font-medium transition-all ${
                  activeFilter === filter
                    ? 'border-primary bg-primary text-white'
                    : 'border-default-300 bg-white text-default-900 hover:border-primary hover:text-primary'
                }`}
                aria-label={`Filter portfolio: Show ${filter} projects`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          {loading ? (
            <div className="text-center py-20 text-default-500">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7.5 mb-12">
              {filtered.map(project => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group" data-category={project.category}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block py-1 px-3 text-xs font-semibold rounded-full border border-blue-200 bg-blue-50 text-primary mb-3">{project.category}</span>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-default-600 text-sm mb-4">{project.description}</p>
                    <div className="space-y-2.5 mb-4">
                      <div className="text-sm">Industry: <span className="text-default-950">{project.industry}</span></div>
                      <div className="text-sm">Scope: <span className="text-default-950">{project.services}</span></div>
                    </div>
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
                      View Project
                      <span className="iconify ml-2" data-icon="tabler:arrow-right"></span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
