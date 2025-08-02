import { GraduationCap, Code, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer seeking to apply coding skills and problem-solving abilities 
            while contributing to innovative projects and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Developer working with code on multiple monitors"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-custom text-white rounded-full p-2 mt-1">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    Currently pursuing MCA at Kongu Engineering College (CGPA: 8.26). 
                    Completed BSc Computer Science with 7.61 CGPA.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary-custom text-white rounded-full p-2 mt-1">
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Development Focus</h4>
                  <p className="text-muted-foreground">
                    Specializing in Full Stack Web Development using MERN Stack and 
                    Backend Development with Python. Passionate about creating efficient solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary-custom text-white rounded-full p-2 mt-1">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Achievements</h4>
                  <p className="text-muted-foreground">
                    Solved 140+ LeetCode problems, active tech club member, 
                    and cricket tournament runner-up. Always learning and growing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
