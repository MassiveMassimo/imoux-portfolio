import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

export default memo(function ReadMore({
  currentProject,
}: {
  currentProject: string;
}) {
  const projects: Record<string, string> = {
    silicon: "Crafting a Scalable and Cohesive Design System for COMPFEST",
    vishwakarma: "Designing Vishwakarma's New Branding",
    fungible: "FUNgible: An Intuitive Design Platform for Artists",
  };
  const [recommendedProject, setRecommendedProject] = useState(currentProject);

  useEffect(() => {
    let keys = Object.keys(projects);
    keys = keys.filter((key) => key !== currentProject);
    const randomIndex = Math.floor(Math.random() * keys.length);
    setRecommendedProject(keys[randomIndex]);
  }, [currentProject]);

  const recommendedProjectTitle = projects[recommendedProject];

  return (
    <div>
      <h4 className="mb-5 text-xl font-semibold text-slate-700 dark:text-slate-200">
        More by me
      </h4>
      <Link href={`/projects/${recommendedProject}`} className="group">
        <Image
          className="pointer-events-none relative mb-2 aspect-[18/9] w-full origin-bottom overflow-hidden rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
          src={`/${recommendedProject}/${recommendedProject}-thumbnail.png`}
          alt={recommendedProjectTitle}
          width={960}
          height={480}
        />
        <h5 className="font-heading text-lg font-medium text-slate-600 dark:text-slate-400">
          {recommendedProjectTitle}
        </h5>
      </Link>
    </div>
  );
});
