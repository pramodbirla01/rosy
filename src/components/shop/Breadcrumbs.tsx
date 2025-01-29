import React from 'react';

interface BreadcrumbsProps {
  page: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ page }) => {
  return (
    <nav className="text-lg text-black px-10 py-2 md:px-10 mt-20 md:mt-28">
      <span>Home / {page}</span>
    </nav>
  );
};

export default Breadcrumbs;