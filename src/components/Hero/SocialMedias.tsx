import Github from "../Icons/Github";
import LinkedIn from "../Icons/LinkedIn";

const SocialMedias = () => {
  return (
    <div className="flex items-center gap-4 h-full">
      <a
        href="https://www.linkedin.com/in/noetatoud/"
        className="hover:scale-[115%] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/ntatoud/"
        className="hover:scale-[115%] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
    </div>
  );
};

export default SocialMedias;
