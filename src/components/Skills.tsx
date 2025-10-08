import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Lead Generation Tools",
      skills: ["LinkedIn Sales Navigator", "Apollo.io", "Hunter.io", "Instantly", "ZoomInfo", "Clearbit"]
    },
    {
      category: "Core Competencies",
      skills: ["B2B Lead Generation", "Technical Recruiting", "IT Recruitment", "Appointment Setting", "Customer Service", "Outreach Strategy"]
    },
    {
      category: "Industry Expertise",
      skills: ["SaaS", "IT Services", "Real Estate", "E-commerce", "Healthcare", "Agency Services"]
    },
    {
      category: "Communication",
      skills: ["Email Campaigns", "Cold Outreach", "LinkedIn Messaging", "Client Relations", "Stakeholder Management", "Negotiation"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for delivering exceptional lead generation results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
