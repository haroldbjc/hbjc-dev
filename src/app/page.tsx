import { ModeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, GlobeIcon } from "lucide-react";
import experiences from "@/constants/experiences";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto p-8 sm:p-20 max-w-3xl border-2 border-gray-200">
      <main className="flex flex-col gap-8 font-mono">
        <div className="flex flex-col items-center sm:items-stretch sm:flex-row gap-4 ">
          <Image
            src="/assets/pictures/elysia.png"
            alt="Elysia"
            width={150}
            height={150}
            className="rounded-3xl bg-gray-100 dark:bg-gray-900 p-4"
          />
          <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
            <h2>Harold Bong</h2>
            <p>Software Engineer @ Evalink</p>

            <div className="flex flex-row gap-2 mt-8 sm:mt-auto">
              <Link
                href="https://github.com/haroldbjc"
                className="w-fit"
                aria-label="Github"
              >
                <Badge variant="outline">
                  <GithubIcon size={16} />
                  {/* <Image
                    src="/assets/icons/github.svg"
                    alt="github"
                    width={16}
                    height={16}
                    className="bg-white rounded-full"
                  /> */}
                  <span className="ml-1">haroldbjc</span>
                </Badge>
              </Link>

              <Link
                href="https://hbjc.dev"
                className="w-fit"
                aria-label="Website"
              >
                <Badge variant="outline">
                  <GlobeIcon size={16} />
                  <span className="ml-1">hbjc.dev</span>
                </Badge>
              </Link>
            </div>
          </div>
          <div className="sm:ml-auto">
            <ModeToggle />
          </div>
        </div>

        {/* <FlowerIcon /> */}
        <div className="flex flex-col gap-4 ">
          <h3>Experiences</h3>
          {experiences.map((experience, index) => (
            <div key={experience.title}>
              <h5>{experience.title}</h5>
              {experience.currentJob ? (
                <p className="text-muted-foreground">
                  since {experience.startDate}
                </p>
              ) : (
                <p className="text-muted-foreground">
                  {experience.startDate} to {experience.endDate}
                </p>
              )}
              <ul>
                {experience.description.map((description) => (
                  <li key={description}>- {description}</li>
                ))}
              </ul>

              <div className="flex flex-row gap-2 mt-8 flex-wrap">
                Tech Stack:
                {experience.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {experiences.length - 1 !== index && (
                <Separator className="mt-8" />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
