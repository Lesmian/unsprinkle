import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcset={`
            ${src.replace(".jpg", ".avif")} 1x,
            ${src.replace(".jpg", "@2x.avif")} 2x,
            ${src.replace(".jpg", "@3x.avif")} 3x,
          `}
          />
          <source
            type="image/jpeg"
            srcset={`
            ${src} 1x,
            ${src.replace(".jpg", "@2x.jpg")} 2x,
            ${src.replace(".jpg", "@3x.jpg")} 3x,
          `}
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  margin-right: 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
