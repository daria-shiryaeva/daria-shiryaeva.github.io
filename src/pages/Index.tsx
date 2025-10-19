import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Index = () => {
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects; // No filtering needed.
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container-custom py-24 md:py-32">
          <div className="max-w-4xl fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Architecture, infrastructure, and regeneration.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              I'm Daria, an architecture Master's student at the University of Bath. I am consistently engaged in various projects and try to make an effort to keep them update to date here.
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
            {/* Removed filter badge UI for Type and Focus */}

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
