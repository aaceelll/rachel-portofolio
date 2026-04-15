import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={project.route}
      className="group block rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange/20 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/10] overflow-hidden relative bg-gray-50">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-900 font-heading truncate group-hover:text-orange transition-colors">
            {project.title}
          </h3>
        </div>
        <HiArrowRight className="w-5 h-5 text-orange flex-shrink-0 ml-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
