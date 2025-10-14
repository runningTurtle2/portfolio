import React from "react";
import Image from 'next/image'

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


const ProjectCard = ({ id, type, heading = 'HeadingNull', subHeading = 'SubHeadingNull', tags = [], body = 'BodyNull', image = '/placeholder.png', link, src }: ProjectCardProps) => {


  if (type === 'link') {
    return (

      <section id={id} className={styles.classWrapper}>
        <h1 className={styles.classHeading}>{heading}</h1>
        <h3 className={styles.classSubHeading}>{subHeading}</h3>
        <div className={styles.classTagsWrapper}>
          {tags.map((tag, index) => (
            <span className={styles.classTag} key={index}>{tag}</span>
          ))}
        </div>
        <p className={styles.classBody}>{body}</p>

        <a href={link}>
          <Image src={image} alt="" width={430} height={250} />
        </a>

      </section>
    )
  } else if (type === 'video') {
    return (

      <section id={id} className={styles.classWrapper}>
        <h1 className={styles.classHeading}>{heading}</h1>
        <h3 className={styles.classSubHeading}>{subHeading}</h3>
        <div className={styles.classTagsWrapper}>
          {tags.map((tag, index) => (
            <span className={styles.classTag} key={index}>{tag}</span>
          ))}
        </div>
        <p className={styles.classBody}>{body}</p>

        <VideoEmbed src={src} />

      </section>
    )
  } else {
    return (
      <section id={id} className={styles.classWrapper}>
        <h1 className={styles.classHeading}>{heading}</h1>
        <h3 className={styles.classSubHeading}>{subHeading}</h3>
        <div className={styles.classTagsWrapper}>
          {tags.map((tag, index) => (
            <span className={styles.classTag} key={index}>{tag}</span>
          ))}
        </div>
        <p className={styles.classBody}>{body}</p>

      </section>
    )
  }
}

const styles = {
  classWrapper: 'bg-white p-6 rounded-xl shadow-sm border border-gray-200',
  classHeading: 'text-xl font-semibold text-gray-800',
  classSubHeading: 'text-xl  text-gray-800',
  classBody: 'text-gray-700 leading-relaxed text-sm',
  classTagsWrapper: 'flex flex-wrap justify-around p-1 gap-8"',
  classTag: 'bg-[#2a3134] text-xs  p-1.5  text-[#b4d1de] rounded-lg'

}

export default ProjectCard;


const VideoEmbed = ({ src }) => {

  return (
    <iframe width="430" height="250" src={src} title="" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  );
};



