import { GithubIcon, LinkedInIcon } from "../Icons";

const SocialMedias = () => {
  return (
    <div className="flex items-center gap-4 h-full">
      <a
        href="https://www.linkedin.com/in/noetatoud/"
        className="hover:scale-[115%] transition"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/ntatoud/"
        className="hover:scale-[115%] transition"
        target="_blank"
        aria-label="Github"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
    </div>
  );
};

export default SocialMedias;
