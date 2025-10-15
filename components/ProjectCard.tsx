import React from "react";
import Image from 'next/image';

interface ProjectCardProps {
  id?: string,
  type?: 'link' | 'video',
  heading: string,
  subHeading: string,
  tags?: string[]
  body: string,
  image?: string,
  link?: string,
  src?: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  type,
  heading,
  subHeading,
  tags = [],
  body,
  image = '/placeholder.png',
  link,
  src
}) => {
  return (
    <section id={id} className="bg-card-bg shadow-sm rounded-xl p-6 space-y-4 transition hover:shadow-md">
      <div>
        <h2 className="text-xl font-semibold text-text">{heading}</h2>
        <h3 className="text-md text-text-muted">{subHeading}</h3>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-tag-bg text-tag-text text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="text-text leading-relaxed text-sm">{body}</p>

      {type === 'link' && link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-fit hover:opacity-70 transition">
          <Image
            src={image}
            alt={heading}
            width={400}
            height={250}
            className="rounded-md border border-border"
          />
        </a>
      )}

      {type === 'video' && src && (
        <div className="">
          <iframe
            width="430" height="250"
            src={src}
            title={heading}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="  rounded-md"
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default ProjectCard;
