import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, ExternalLink, Github } from "lucide-react";

const Winners = () => {
  const winners = [
    {
      position: 1,
      team: "Neural Innovators",
      project: "AI-Powered Healthcare Assistant",
      description: "An intelligent chatbot that helps patients manage chronic diseases through personalized recommendations and medication reminders using advanced NLP.",
      members: ["Rahul Sharma", "Priya Desai", "Amit Patel"],
      prize: "₹25,000 + Internship Opportunities",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      icon: Trophy,
      color: "text-accent"
    },
    {
      position: 2,
      team: "Code Warriors",
      project: "Smart Campus Management System",
      description: "A comprehensive IoT-based solution for managing campus resources, including attendance tracking, library management, and energy optimization.",
      members: ["Sneha Kumar", "Vikram Singh", "Anjali Reddy"],
      prize: "₹15,000 + Tech Goodies",
      tech: ["IoT", "Flutter", "Firebase", "Arduino"],
      icon: Award,
      color: "text-primary"
    },
    {
      position: 3,
      team: "Tech Titans",
      project: "Blockchain-Based Supply Chain Tracker",
      description: "A decentralized application for tracking products throughout the supply chain, ensuring transparency and reducing counterfeit goods.",
      members: ["Karthik Rao", "Divya Nair", "Rohan Mehta"],
      prize: "₹10,000 + Certificates",
      tech: ["Solidity", "Ethereum", "Web3.js", "React"],
      icon: Medal,
      color: "text-muted-foreground"
    }
  ];

  const specialAwards = [
    { title: "Best UI/UX Design", team: "Design Wizards", prize: "₹5,000" },
    { title: "Most Innovative Idea", team: "Future Builders", prize: "₹5,000" },
    { title: "Best Use of AI/ML", team: "Neural Innovators", prize: "₹5,000" },
    { title: "Social Impact Award", team: "Change Makers", prize: "₹5,000" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Trophy className="w-20 h-20 mx-auto mb-6 animate-float" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Winners & Projects</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Celebrating the brilliant minds and innovative solutions from Code Crafter Hackathon
          </p>
        </div>
      </section>

      {/* Top 3 Winners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Top 3 Winners</h2>
            <p className="text-lg text-muted-foreground">Outstanding projects that pushed the boundaries of innovation</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {winners.map((winner, index) => {
              const Icon = winner.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Position Badge */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-3">
                        <Icon className={`w-12 h-12 ${winner.color === 'text-accent' ? 'text-secondary' : 'text-white'}`} />
                      </div>
                      <Badge className={`text-lg px-4 py-1 ${winner.color}`}>
                        {winner.position === 1 ? "1st Place" : winner.position === 2 ? "2nd Place" : "3rd Place"}
                      </Badge>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{winner.project}</h3>
                        <p className="text-primary font-semibold mb-2">Team: {winner.team}</p>
                        <p className="text-muted-foreground leading-relaxed">{winner.description}</p>
                      </div>

                      {/* Team Members */}
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Team Members:</p>
                        <div className="flex flex-wrap gap-2">
                          {winner.members.map((member, idx) => (
                            <Badge key={idx} variant="outline">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {winner.tech.map((tech, idx) => (
                            <Badge key={idx} className="bg-primary/10 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Prize & Links */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground">Prize</p>
                          <p className="text-lg font-bold text-accent">{winner.prize}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            <ExternalLink size={16} className="mr-2" />
                            View Demo
                          </Button>
                          <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                            <Github size={16} className="mr-2" />
                            GitHub
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Awards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Special Awards</h2>
            <p className="text-lg text-muted-foreground">Recognizing excellence in specific categories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specialAwards.map((award, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-scale-in border-primary/20"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
                <p className="text-primary font-semibold mb-2">{award.team}</p>
                <Badge variant="outline" className="text-accent border-accent">
                  {award.prize}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Participants */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">All Participants Are Winners!</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Every team that participated in Code Crafter demonstrated incredible dedication, creativity, and technical skills. 
            We celebrate all 100+ projects that were built during this amazing hackathon. Your innovation inspires us all!
          </p>
          <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Want to Be Our Next Winner?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Register for our next hackathon and showcase your innovative ideas to the world
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-accent">
            Register for Next Edition
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Winners;
