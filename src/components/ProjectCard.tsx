import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.slug}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={project.heroImage}
            alt={project.heroAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <CardContent className="pt-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold group-hover:text-accent transition-colors line-clamp-2">
              {project.title}
            </h3>
            <span className="text-sm text-muted-foreground font-mono shrink-0 ml-2">
              {project.year}
            </span>
          </div>
          {project.impact && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {project.impact}
            </p>
          )}
        </CardContent>
        <CardFooter className="pt-0 flex flex-wrap gap-2">
          {/* Removed tags display */}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
