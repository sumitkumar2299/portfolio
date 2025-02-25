// components/SkillsComponent.jsx
import { motion } from 'framer-motion';

const SkillsComponent = ({ skills }) => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white rounded-lg shadow-md text-center"
            >
              <skill.icon className="w-8 h-8 mx-auto text-blue-600" />
              <h3 className="mt-2 font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example skills data format:
const skillsData = [
  {
    name: "React",
    category: "Frontend",
    
  },
  // ... more skills
];

export default SkillsComponent;