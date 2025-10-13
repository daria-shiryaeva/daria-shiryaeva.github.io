import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const skills = [
    { category: 'Design Software', items: ['Rhino 7', 'MicroStation', 'V-Ray', 'Enscape'] },
    { category: 'Graphics & Layout', items: ['Adobe InDesign', 'Illustrator', 'Photoshop'] },
    { category: 'Communication', items: ['Report coordination', 'Stakeholder engagement', 'Environmental strategy diagrams'] },
    { category: 'Fabrication', items: ['Physical model-making', 'Laser cutting', '3D printing'] },
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
                I'm Daria, an architecture Master's student at the University of Bath. My work bridges infrastructure, community health, and environmental performance—pairing rigorous analysis with clear diagrams and inclusive design.
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
                          <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1 shrink-0">•</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Approach (repeated from home) */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">People & Place</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I design inclusive programmes that serve diverse communities, prioritizing intergenerational use and spaces that strengthen community bonds.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Low-Carbon Logic</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I prioritize passive-first strategies, material clarity, and lifecycle thinking to create resilient, sustainable buildings that minimize environmental impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Clarity in Communication</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I use diagrams, principles, and clear coordination to make complex projects accessible to all stakeholders—from clients to communities.
                  </p>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <div className="text-center py-12 bg-secondary/30 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Download My CV</h2>
              <p className="text-muted-foreground mb-6">
                Get a complete overview of my education, experience, and skills.
              </p>
              <Button size="lg" asChild>
                <a href="/daria-shiryaeva-cv.pdf" download>
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
