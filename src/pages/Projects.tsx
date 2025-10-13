import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';

const Projects = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const types = Array.from(new Set(projects.map(p => p.type)));
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  const filteredProjects = projects.filter(project => {
    if (selectedType && project.type !== selectedType) return false;
    if (selectedTag && !project.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            A selection of work across infrastructure, community facilities, education, and cultural projects—each focused on sustainability, clarity, and people.
          </p>

          {/* Filters */}
          <div className="mb-12">
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3">Type</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedType === null ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedType(null)}
                >
                  All
                </Badge>
                {types.map(type => (
                  <Badge
                    key={type}
                    variant={selectedType === type ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Focus</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedTag === null ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  All
                </Badge>
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects match your filters.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
