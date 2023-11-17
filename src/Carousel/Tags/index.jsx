import React from "react";

const Tags = (props: { tags: string[] }) => {
    return (
      <StyledTag>
        {tags.map((tag: string, index: number) => (
          <span key={`tag-${tag}-index`}>{tag}</span>
        ))}
      </StyledTag>
    );
  };