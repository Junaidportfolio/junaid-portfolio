import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your lead generation strategy? Let's connect and discuss how I can help grow your business.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground mb-1">Location</div>
                    <div className="text-muted-foreground">Bahawalpur, Punjab, Pakistan</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground mb-1">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/junaid-javaid-lead" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      linkedin.com/in/junaid-javaid-lead
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                  Platforms
                </h3>
                
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">U</span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">Upwork</div>
                      <div className="text-sm text-muted-foreground">Available for hire</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me on Upwork for professional lead generation and outreach services.
                  </p>
                  <Button variant="default" className="w-full" asChild>
                    <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </Card>

                <div className="text-center pt-4">
                  <Button variant="hero" size="lg" className="w-full md:w-auto" asChild>
                    <a href="https://www.linkedin.com/in/junaid-javaid-lead" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
