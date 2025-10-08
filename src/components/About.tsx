import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about connecting businesses with their ideal clients through strategic outreach and lead generation excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card hover:shadow-lg transition-shadow">
              <p className="text-lg text-card-foreground leading-relaxed">
                Based in Bahawalpur, Punjab, Pakistan, I specialize in delivering high-quality lead generation and outreach services through Upwork. My expertise lies in leveraging cutting-edge tools like LinkedIn Sales Navigator, Apollo, and Instantly to create targeted, effective lead generation strategies.
              </p>
            </Card>
            <Card className="p-8 bg-card hover:shadow-lg transition-shadow">
              <p className="text-lg text-card-foreground leading-relaxed">
                With a Bachelor of Business Administration from The Islamia University of Bahawalpur, I bring a unique blend of academic knowledge and practical expertise to help businesses in IT services, real estate, e-commerce, and health sectors achieve their growth objectives.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Precision Targeting</h3>
              <p className="text-sm text-muted-foreground">Identifying and reaching your ideal prospects</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Consistent 15% response rate across campaigns</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Client-Focused</h3>
              <p className="text-sm text-muted-foreground">Tailored solutions for B2B, SaaS, and agencies</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Fast Execution</h3>
              <p className="text-sm text-muted-foreground">Efficient processes with rapid turnaround</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
