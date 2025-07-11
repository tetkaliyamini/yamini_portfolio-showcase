import { Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Developer Intern",
    company: "Emergexians Infotech",
    period: "April 2025 – Present",
    description: "Building a full-stack Udemy-like learning platform using React, Node.js, MongoDB, and Tailwind CSS."
  },
   {
    title: "Machine Learning Intern",
    company: "Prasunet Pvt Ltd",
    period: "Mar 2025 – May 2025",
    description: "Built a real-time Twitter sentiment analyzer using Python, TextBlob, VADER, MongoDB, and visualized insights with Chart.js."
  },
  {
    title: "AI Intern",
    company: "DataPro",
    period: "June 2024 – Aug 2024",
    description: "Streamlined ML model training with feature engineering and achieved 85%+ accuracy using Scikit-learn and Pandas."
  },
 
  {
    title: "Java Developer Intern",
    company: "Vintern",
    period: "Aug 2023 – Sep 2023",
    description: "Developed a ticket management system in Java with MySQL, reducing resolution time by 25%."
  }
];



export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 flex items-center gap-2">
                  <Calendar size={16} />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}