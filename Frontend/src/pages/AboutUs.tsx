import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
import sumanpreet from "@/assets/sumanpreet.jpg";
import lakshman from "@/assets/lakshman.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Lakshman kumar das",
      role: "President - Techverse Club",
      image: lakshman,
      description:
        "A visionary leader guiding the Techverse Club with years of academic excellence and innovation leadership.",
    },
    {
      name: "Sumanpreet kaur",
      role: "Vice President - Techverse Club",
      image: sumanpreet,
      description:
        "Leading the Techverse Club with a mission to empower students through cutting-edge projects and collaboration.",
    },
    {
      name: "Coming Soon",
      role: "Technical Head",
      image: "",
      description:
        "A passionate developer driving innovation and handling all technical operations within the club.",
    },
    {
      name: "Coming Soon",
      role: "Operations Head",
      image: "",
      description:
        "Ensuring every event and operation runs smoothly through excellent organization and coordination.",
    },
    // {
    //   name: "Vikram Singh",
    //   role: "Marketing Head",
    //   image: "VS",
    //   description:
    //     "Promoting the club and its events with creative marketing strategies and outreach campaigns.",
    // },
    // {
    //   name: "Ananya Gupta",
    //   role: "Design Head",
    //   image: "AG",
    //   description:
    //     "Crafting visually stunning designs and creative assets for all Techverse events and projects.",
    // },
    // {
    //   name: "Rohit Mehta",
    //   role: "Sponsorship Head",
    //   image: "RM",
    //   description:
    //     "Building partnerships with sponsors and managing corporate relations for seamless collaboration.",
    // },
    {
      name: "Coming Soon",
      role: "Content Head",
      image: "I",
      description:
        "Handling all communications, writing content, and managing the public image of Techverse Club.",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#252D6F] to-[#4676E6] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 w-10 h-10 bg-[#4676E6]/70 rounded-full animate-bounce-slow blur-md"></div>
          <div className="absolute top-36 right-12 w-6 h-6 bg-[#FFD54F]/80 rounded-full animate-pulse blur-md"></div>
          <div className="absolute top-1/2 right-40 w-16 h-8 bg-[#B16FFF]/70 rounded-3xl animate-bounce-x blur-md"></div>
          <div className="absolute top-8 right-2 w-5 h-5 bg-[#F56060]/80 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-5 h-5 bg-[#36C2A3]/70 rounded-full animate-bounce"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-md border border-white/20 shadow-sm mb-6 tracking-widest animate-fade-in">
            Our Team
          </span>
          <h1 className="text-7xl font-extrabold pb-3 mb-8 bg-gradient-to-r from-[#FFD54F] via-white to-[#4676E6] bg-clip-text text-transparent drop-shadow-xl">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet our{" "}
            <span className="font-semibold text-[#FFD54F]">
              passionate team
            </span>{" "}
            who make{" "}
            <span className="font-semibold text-[#d746ffff]">Techverse</span>{" "}
            thrive with innovation and creativity.
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug mb-4 relative inline-block">
              Core Organizing Team
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-500">
              Dedicated leaders working tirelessly to create an unforgettable
              experience. <br className="hidden md:block" />
              Their passion, skill, and teamwork drive Techverse forward with
              excellence.
            </p>
          </div>

          {/* Flip Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group [perspective:1000px] cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() =>
                  setFlippedIndex(flippedIndex === index ? null : index)
                }
              >
                <div
                  className={`relative w-full h-80 transition-transform duration-700 [transform-style:preserve-3d] ${
                    flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front Side */}
                  <Card className="absolute inset-0 p-6 text-center border border-blue-200 shadow-lg rounded-xl bg-white [backface-visibility:hidden] transition-shadow duration-300 group-hover:shadow-blue-300/50">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={member.image} // imported image like sumanpreet.jpg
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>

                    <div className="flex gap-2 justify-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2 hover:bg-blue-600 hover:text-white"
                      >
                        <Linkedin size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2 hover:bg-blue-600 hover:text-white"
                      >
                        <Mail size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2 hover:bg-blue-600 hover:text-white"
                      >
                        <Github size={16} />
                      </Button>
                    </div>
                  </Card>

                  {/* Back Side */}
                  <Card className="absolute inset-0 p-6 text-center bg-gradient-to-br from-blue-600 to-indigo-500 text-white border-none rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center">
                    <p className="text-sm leading-relaxed px-2 mb-4">
                      {member.description}
                    </p>
                    <span className="text-xs opacity-80">
                      Click again to flip back ↩️
                    </span>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-cyan-400 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to help organize
            future events.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 hover:scale-105 transition-transform"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
