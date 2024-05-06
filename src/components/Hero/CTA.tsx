import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button className="rounded" variant="secondary" asChild>
        <a href="mailto:noe.tatoud@gmail.com">
          Email Me <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </Button>
    </div>
  );
};

export default CTA;
