import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Outreach Specialist",
      company: "Upwork",
      period: "June 2025 - Present",
      location: "Bahawalpur, Punjab, Pakistan",
      description: "Excel in appointment setting and client engagement, connecting businesses with precise clients through effective communication and relationship building strategies.",
      current: true
    },
    {
      role: "Lead Generation Specialist",
      company: "Upwork",
      period: "June 2025 - Present",
      location: "Bahawalpur, Punjab, Pakistan",
      description: "Provide expert outreach services and build comprehensive client lists through meticulous web research and accurate contact information verification.",
      current: true
    },
    {
      role: "Appointment Setter Specialist",
      company: "The Skilliance",
      period: "June 2021 - Present",
      location: "Remote",
      description: "Collaborated with 25+ clients in B2B, SaaS, and agency sectors to generate 10,000+ qualified leads with a 15% average response rate.",
      achievements: [
        "Generated 10,000+ qualified leads",
        "Achieved 15% average response rate",
        "Served 25+ clients across multiple industries",
        "Mastered LinkedIn Sales Navigator, Apollo, and Hunter.io"
      ],
      current: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">
              Professional journey in lead generation and outreach excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-ml-2 z-10">
                    {exp.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}>
                    <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-card-foreground mb-1">{exp.role}</h3>
                          <div className="text-primary font-medium mb-2">{exp.company}</div>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div>{exp.location}</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{exp.description}</p>
                      
                      {exp.achievements && (
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-card-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
