import { skillCategories } from '../../data/skills';
import { FaDatabase, FaChartBar, FaCode, FaFlask } from 'react-icons/fa';

const iconImageMap = {
  sql: '/images/icons/sql.png',
  mysql: '/images/icons/mysql.png',
  looker: '/images/icons/looker.png',
  vscode: '/images/icons/vscode.png',
  github: '/images/icons/github.png',
  jmeter: '/images/icons/jmeter.png',
  katalon: '/images/icons/katalon.png',
  postman: '/images/icons/postman.png',
  sonarqube: '/images/icons/sonar.png',
};

const categoryIcons = {
  "Data & Query": <FaDatabase className="w-5 h-5 text-orange" />,
  "Visualization": <FaChartBar className="w-5 h-5 text-orange" />,
  "Development Tools": <FaCode className="w-5 h-5 text-orange" />,
  "Testing & Quality": <FaFlask className="w-5 h-5 text-orange" />,
};

export default function TechStackSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="techstack">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 font-heading">
            Tech <span className="text-orange">Stack</span>
          </h2>
          <p className="text-sm text-gray-700 max-w-lg mx-auto leading-relaxed">
            These are the core tools and platforms I use for data processing, visualization, analysis and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-black/10 rounded-2xl p-6 border-2 border-grey/100 hover:bg-grey/100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                {categoryIcons[category.title]}
                <h3 className="text-sm font-bold text-orange uppercase tracking-wider font-heading">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white border border-white/10 hover:border-orange/40 hover:bg-orange/5 transition-all min-w-[80px]"
                  >
                    <img
                      src={iconImageMap[item.icon]}
                      alt={item.name}
                      className="w-14 h-14 object-contain"
                    />
                    <span className="text-xs text-gray-600 font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
