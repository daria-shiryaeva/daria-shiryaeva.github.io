import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Index = () => {
  const featuredProjects = projects.filter(p => p.featured);

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
              <Button size="lg" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-secondary/30 py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="container-custom py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">People & Place</h3>
              <p className="text-muted-foreground">
                Inclusive programmes, intergenerational use, and spaces that strengthen community bonds.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Sprout className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Low-Carbon Logic</h3>
              <p className="text-muted-foreground">
                Passive first, material clarity, and lifecycle thinking for resilient, sustainable buildings.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clarity in Communication</h3>
              <p className="text-muted-foreground">
                Diagrams, principles, and coordination that make complex projects clear to all stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Practices */}
        <section className="bg-secondary/30 py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold mb-6">Education & Experience</h2>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-muted-foreground">
                  <span className="font-semibold text-foreground">University of Bath</span> — Master's, 2026
                </div>
                <div className="text-muted-foreground">WW+P Architects</div>
                <div className="text-muted-foreground">Weston Williamson and Partners</div>
                <div className="text-muted-foreground">LT Studio</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Open to collaborations and graduate roles in 2026.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
