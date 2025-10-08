import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          </div>

          <Card className="p-8 bg-card hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                  Bachelor of Business Administration
                </h3>
                <div className="text-lg text-primary font-medium mb-3">
                  The Islamia University of Bahawalpur
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>November 2019 - March 2023</span>
                </div>
                <p className="text-muted-foreground">
                  Specialized in Business Administration and Management, building a strong foundation in strategic thinking, client relations, and business development that directly contributes to success in lead generation and outreach strategies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
