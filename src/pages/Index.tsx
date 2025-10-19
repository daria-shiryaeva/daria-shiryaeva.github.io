import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Index = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const types = Array.from(new Set(projects.map(p => p.type)));
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  const filteredProjects = projects.filter(project => {
    if (selectedType && project.type !== selectedType) return false;
    if (selectedTag && !project.tags.includes(selectedTag)) return false;
    return true;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-custom py-24 md:py-32">
          <div className="max-w-4xl fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Architecture, infrastructure, and public realm—designed with people and planet in mind.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              I'm Daria, a Master's student at the University of Bath, focused on community-centred, low-carbon design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">About Me</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-secondary/30 py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12">Projects</h2>
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
              {displayedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects match your filters.</p>
              </div>
            )}

            {/* Show More/Less Button */}
            {filteredProjects.length > 6 && (
              <div className="text-center mt-12">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
