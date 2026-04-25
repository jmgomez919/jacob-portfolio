import { motion } from 'framer-motion';
import { cardItem } from '../../utils/animations';
import './ProjectCard.css';

const categoryIcons = {
  Film: '🎬',
  Marketing: '📣',
  Photography: '📷',
  'Graphic Design': '🎨',
  'App Concepts': '📱',
  'Web Design': '🌐',
};

function ImagePlaceholder({ category }) {
  return (
    <div className="project-card__placeholder" aria-hidden="true">
      <span className="project-card__placeholder-icon">{categoryIcons[category] || '🖼️'}</span>
      <span className="project-card__placeholder-label">Image Coming Soon</span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { category, title, year, role, description, tools, link } = project;

  return (
    <motion.article
      className="project-card"
      variants={cardItem}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
    >
      <ImagePlaceholder category={category} />

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
          <span className="project-card__year">{year}</span>
        </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__role">{role}</p>
        <p className="project-card__description">{description}</p>

        {tools.length > 0 && (
          <ul className="project-card__tools">
            {tools.map(tool => (
              <li key={tool} className="project-card__tool">{tool}</li>
            ))}
          </ul>
        )}

        {link && (
          <a
            href={link}
            className="project-card__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
    </motion.article>
  );
}
