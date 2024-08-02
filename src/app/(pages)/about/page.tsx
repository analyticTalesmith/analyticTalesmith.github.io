
import Image from 'next/image';
import Link from 'next/link';
import {
    GitHubIcon,
    LinkedInIcon,
    TableauIcon
        } from '@/app/components/Icons/SocialIcons';
import { FC, ReactElement } from 'react';

type SVGComponent = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

interface IconProps {
    className?: string;
}

interface SocialLinkProps {
    className?: string;
    href: string;
    children: React.ReactNode;
    icon: React.ComponentType<IconProps>; // or React.FC<{}> for functional components
}


const SocialLink: FC<SocialLinkProps> = ({ className, href, children, icon: Icon }) => {
    return (
        <li className={className + ' flex'}>
            <Link href={href} className="group flex text-sm font-medium fill-on-surface text-on-surface my-2 group-focus:ring-4 group-focus:ring-primary group-focus:rounded ">
                <Icon className="h-6 w-6 flex-none transition group-hover:fill-primary-container" />
                <span className="ml-4 transition group-hover:underline group-hover:text-primary-container">{children}</span>
            </Link>
        </li>
    );
};

const About = () => {
    return(
        <div className="mt-4 mb-8 sm:mb-16 sm:mt-8">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-full mx-auto lg:max-w-xs px-2.5">
                        <Image
                            src="/headshot.png"
                            alt=""
                            width={0}
                            height={0}
                            className="mx-auto border-brutal aspect-square w-fit max-w-xs rotate-3 rounded-2xl bg-surface-container object-cover"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2 space-y-4 lg:space-y-8">
                    <div className="bg-surface-container border-brutal p-4 lg:p-8">
                        <h4 className="text-on-surface">
                            I&apos;m Jonathan. A data analyst and social scientist with a passion
                            for storytelling.
                        </h4>
                        <div className="mt-6 space-y-2 lg:space-y-4 text-on-surface">
                            <p>Data and storytelling have always been at the core of the work I do and of many of the hobbies I enjoy. &quot;Analytic Talesmith&quot; began as a handle I used to sign up for Tableau, then it became a handle on more sites, until it eventually became the URL for my original online portfolio.</p>

                            <p>But with my passion for all things data came the realization that I could use the site to share blog posts, tutorials, and other resources to demystify data analytics and make the complex world of analytics more accessible.</p>

                            <p>So the site in its current form was born: a project where I taught myself the necessary skills to build my own site from scratch so I could share my love of scientific thinking, data-driven problem solving, and communicating actionable insights.</p>
                        </div>
                    </div>
                    <div className="bg-surface-container border-brutal p-4 lg:p-8">                        
                        <div className="space-y-2 lg:space-y-4 text-on-surface">
                            <h5>My Story</h5>
                            <p>My journey as a storyteller began even before I took my first steps; my family has always cherished the art of storytelling. rom a young age, I found myself drawn to a wide range of interests, from the logical rigor of computer science to the deep exploration of the human experience through social sciences. These seemingly disparate passions created a tension that followed me throughout my education and hobbies.</p>

                            <p>When the time came to declare my undergraduate major, I faced a pivotal crossroad. I felt compelled to choose a single path that would shape my career, build the right network, secure relevant internships, and develop specialized skills. Yet, each option seemed to leave behind an integral part of who I was.</p>

                            <p>Ultimately, I chose to focus on psychology, with a particular interest in industrial&#x2F;organizational psychology. This field allowed me to delve into the complexities of human behavior in organizational settings. It was here that I began to see how my diverse interests could converge.</p>

                            <p>The revelation came gradually but surely. I discovered that data analytics is not just about numbers and algorithms; it&#39;s a field that thrives on the integration of technical acumen, social insight, and the art of storytelling. In this space, I found a way to blend my analytical skills with a deep understanding of human behavior, crafting narratives that are as insightful as they are data-driven.</p>

                            <p>Through my journey, I&#39;ve realized that my diverse interests are not a hindrance but a unique asset. They allow me to approach data analytics with a holistic perspective, combining technical expertise with a nuanced understanding of human behavior and the power of storytelling. I am passionate about transforming data into compelling narratives that drive actionable insights and strategic decisions. Whether uncovering hidden patterns or presenting data-driven solutions, I am dedicated to making a meaningful impact through analytics.</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto px-2.5 lg:pl-20">
                    <div className="bg-surface-container-high border-brutal h-fit w-fit mx-auto p-4 lg:p-8">
                        <ul role="list">
                            <SocialLink href="#" icon={LinkedInIcon}>LinkedIn</SocialLink>
                            <SocialLink href="#" icon={GitHubIcon}>GitHub</SocialLink>
                            <SocialLink href="#" icon={TableauIcon}>Tableau</SocialLink>
                  {/*          */}{/* <SocialLink href="#" icon={TwitterIcon}>*/}{/*
                  */}{/*  Follow on Twitter*/}{/*
                  */}{/*</SocialLink>*/}{/*
                  */}{/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}{/*
                  */}{/*  Follow on Instagram*/}{/*
                  */}{/*</SocialLink> */}
                  {/*          <SocialLink*/}
                  {/*              href="https://github.com/vjordan-cs"*/}
                  {/*              icon={GitHubIcon}*/}
                  {/*              className="mt-4"*/}
                  {/*          >*/}
                  {/*              Follow on GitHub*/}
                  {/*          </SocialLink>*/}
                  {/*          <SocialLink*/}
                  {/*              href="https://linkedin.com/in/victoria-jordan01/"*/}
                  {/*              icon={LinkedInIcon}*/}
                  {/*              className="mt-4"*/}
                  {/*          >*/}
                  {/*              Follow on LinkedIn*/}
                  {/*          </SocialLink>*/}
                  {/*          <SocialLink*/}
                  {/*              href="mailto:vjordan.cs@gmail.com"*/}
                  {/*              icon={MailIcon}*/}
                  {/*              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"*/}
                  {/*          >*/}
                  {/*              vjordan.cs@gmail.com*/}
                  {/*          </SocialLink>*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;