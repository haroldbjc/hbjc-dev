import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/theme-toggle";
import ElysiaAvatar from "@/components/elysia-avatar";
import experiences from "@/constants/experiences";
import blogs from "@/constants/blogs";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto p-8 sm:p-20 max-w-3xl">
      <main className="flex flex-col gap-8 font-mono">
        <div className="flex flex-col items-center sm:items-stretch sm:flex-row gap-4 ">
          <ElysiaAvatar />
          <div className="flex flex-col text-center sm:text-left items-center sm:items-start">
            <h2>Harold Bong</h2>
            <p>frontend guy</p>
          </div>
          <div className="sm:ml-auto">
            <ModeToggle />
          </div>
        </div>

        <Tabs
          defaultValue="experiences"
          className="w-full items-center flex flex-col"
        >
          <TabsList>
            <TabsTrigger value="experiences" aria-label="Experiences">
              Experiences
            </TabsTrigger>
            <TabsTrigger value="blogs" aria-label="Blogs">
              Blogs
            </TabsTrigger>
            <TabsTrigger value="contacts" aria-label="Contacts">
              Contacts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="experiences" className="mt-8">
            <div className="flex flex-col gap-4">
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
          </TabsContent>

          <TabsContent value="blogs" className="mt-8 w-full items-start flex">
            <div className="flex flex-col gap-4 w-full">
              {blogs.map((blog, index) => (
                <div key={blog.title}>
                  <Link
                    href={blog.url}
                    className="flex gap-2 justify-between flex-row"
                    aria-label={blog.title}
                  >
                    <span>{blog.title}</span>
                    <span className="text-muted-foreground text-sm">
                      {blog.date}
                    </span>
                  </Link>
                  {blogs.length - 1 !== index && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts" className="mt-2">
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h5>Email</h5>
                <p>harold.bong@gmail.com</p>
              </div>
              <div>
                <h5>Github</h5>
                <p>@haroldbjc</p>
              </div>
              <div>
                <h5>LinkedIn</h5>
                <p>haroldbjc</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
