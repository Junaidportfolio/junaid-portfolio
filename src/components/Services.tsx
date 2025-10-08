import { Card } from "@/components/ui/card";
import { Search, MessageSquare, Database, BarChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Lead Generation",
      description: "Strategic identification and qualification of high-value prospects using advanced tools like LinkedIn Sales Navigator and Apollo.",
      features: ["B2B Lead Generation", "Market Research", "Prospect List Building", "Contact Verification"]
    },
    {
      icon: MessageSquare,
      title: "Outreach Campaigns",
      description: "Personalized outreach strategies designed to engage prospects and generate meaningful conversations that convert.",
      features: ["Email Campaigns", "LinkedIn Outreach", "Multi-Channel Engagement", "A/B Testing"]
    },
    {
      icon: Database,
      title: "List Management",
      description: "Comprehensive database building and management with accurate contact information and detailed prospect profiles.",
      features: ["CRM Integration", "Data Enrichment", "List Segmentation", "Quality Assurance"]
    },
    {
      icon: BarChart,
      title: "Appointment Setting",
      description: "Professional appointment scheduling services to connect you with qualified leads ready for conversation.",
      features: ["Calendar Management", "Follow-up Sequences", "Meeting Coordination", "Conversion Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive lead generation and outreach solutions tailored to drive your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-card-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
