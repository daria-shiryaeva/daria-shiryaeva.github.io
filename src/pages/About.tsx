import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { bioIntro } from '@/data/bio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const skills = [
    { category: 'Design Software', items: ['Rhino 7', 'MicroStation', 'V-Ray', 'Enscape', 'Revit'] },
    { category: 'Graphics & Layout', items: ['Adobe InDesign', 'Illustrator', 'Photoshop'] },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">About</h1>

            {/* Bio */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                {bioIntro}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through placements at WW+P Architects, Weston Williamson and Partners, and LT Studio, I've contributed to large-scale infrastructure projects like East West Rail and HS2, as well as community and cultural schemes. I bring a principles-led approach to design, focusing on people, low-carbon logic, and clarity in communication.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">{skillGroup.category}</h3>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="text-sm text-muted-foreground">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="text-center py-12 bg-secondary/30 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Download My CV</h2>
              <p className="text-muted-foreground mb-6">
                Get a complete overview of my education, experience, and skills.
              </p>
              <Button size="lg" asChild>
                <a href="/assets/projects/daria-shiryaeva-cv.pdf" download>
                  <FileDown className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
