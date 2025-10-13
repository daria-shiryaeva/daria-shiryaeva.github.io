import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="container-custom py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            My professional journey across architecture practices and editorial work, building skills in design, coordination, visualisation, and communication.
          </p>

          <div className="max-w-4xl space-y-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="overflow-hidden">
                <CardHeader className="bg-secondary/30 pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{exp.organization}</h2>
                      <p className="text-lg text-muted-foreground">{exp.role}</p>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground md:text-right shrink-0">
                      {exp.dates}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span className="text-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
