import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project not found</h1>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Button */}
        <div className="container-custom py-6">
          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Header */}
        <section className="container-custom pb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            
            {/* Metadata in horizontal layout */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <span className="font-semibold">Location</span>
                  <span className="text-muted-foreground ml-2">{project.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <span className="font-semibold">Year</span>
                  <span className="text-muted-foreground ml-2">{project.year}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <span className="font-semibold">Role</span>
                  <span className="text-muted-foreground ml-2">{project.role}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground shrink-0" />
                <div>
                  <span className="font-semibold">Status</span>
                  <span className="text-muted-foreground ml-2">{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mb-16">
          <div className="w-full">
            <img
              src={project.heroImage}
              alt={project.heroAlt}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </div>
        </section>

        {/* Content */}
        <section className="container-custom pb-20">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-foreground leading-relaxed">{project.overview}</p>
            </div>

            {/* My Role & Contributions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">My Role & Contributions</h2>
              <p className="text-lg text-foreground leading-relaxed">{project.contributions}</p>
            </div>

            {/* Gallery */}
            {project.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
