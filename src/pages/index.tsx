import { ArrowRight, Boxes, GitBranch, Sparkles, Terminal } from 'lucide-react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const featureCards = [
  {
    title: 'Opinionated building blocks',
    description:
      'Compose production-ready stacks with recipes for apps, workers, and data pipelines using a few lines of YAML.',
    icon: Boxes,
    href: '/docs/category/providers',
    cta: 'Explore providers',
  },
  {
    title: 'Developer-first workflows',
    description:
      'Preview, ship, and roll back from the CLI while Defang manages infrastructure, secrets, and observability.',
    icon: Terminal,
    href: '/docs/category/cli',
    cta: 'See CLI guides',
  },
  {
    title: 'AI-compatible by default',
    description:
      'Spin up AI agents, flows, and scheduled jobs with batteries-included examples and best practices.',
    icon: Sparkles,
    href: '/docs/category/use-cases',
    cta: 'Build an agent',
  },
];

const timeline = [
  {
    title: 'Get started in minutes',
    description:
      'Follow the quickstart to install the CLI, authenticate, and deploy your first service without touching the console.',
    href: '/docs/getting-started',
  },
  {
    title: 'Scale to production',
    description:
      'Define infrastructure once and promote through environments with declarative blueprints and guardrails built in.',
    href: '/docs/category/concepts',
  },
  {
    title: 'Automate everything',
    description:
      'Leverage managed pipelines, build triggers, and cloud events so your team ships reliable software every day.',
    href: '/docs/category/tutorials',
  },
];

export default function Home() {
  return (
    <Layout>
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-70 dark:opacity-45 dark:mix-blend-screen" />
        <section data-testid="landing-hero" className="container flex flex-col gap-12 py-16 md:py-24 lg:py-28">
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
              <Badge data-testid="hero-badge" className="bg-primary/10 text-primary shadow-none">
                Built for calm, cloud-native shipping
              </Badge>
              <span className="text-sm text-muted-foreground">
                Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Shipping calm cloud software is finally the default
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:mx-0 md:text-xl">
              Defang abstracts the noisy parts of infrastructure so you can focus on features.
              These docs walk through the workflows, architecture patterns, and reference deployments that power modern teams.
            </p>
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link to="/docs/getting-started">
                  Launch quickstart
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full md:w-auto">
                <Link to="/docs/samples">
                  Browse production samples
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 md:justify-start">
              {['AWS', 'GCP', 'Docker', 'Pulumi', 'OpenAI'].map((logo) => (
                <div
                  key={logo}
                  className="text-sm font-medium text-muted-foreground/80 transition-colors hover:text-foreground"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-testid="feature-grid" className="container grid gap-6 pb-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {featureCards.map(({ title, description, icon: Icon, href, cta }) => (
            <Card key={title} data-testid="feature-card" className="group">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <Button asChild variant="ghost" className="gap-2 px-0 text-sm font-semibold">
                  <Link to={href}>
                    {cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section data-testid="timeline" className="border-y border-border/60 bg-card/30 dark:bg-background/70 py-16 md:py-20">
          <div className="container grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="flex flex-col gap-6">
              <Badge data-testid="timeline-badge" variant="outline" className="w-fit border-primary/40 bg-primary/5 text-primary">
                Guided track
              </Badge>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                A documentation experience that mirrors the way you ship
              </h2>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                Move from hello world to production in a straight line. Each stage links to runnable samples, infrastructure definitions, and launch checklists.
              </p>
              <div className="grid gap-4">
                {timeline.map(({ title, description, href }) => (
                  <Link
                    key={title}
                    data-testid="timeline-step"
                    to={href}
                    className="group flex w-full items-start gap-4 rounded-2xl border border-border/60 bg-background/70 p-5 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15"
                  >
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <GitBranch className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative isolate flex flex-col gap-4 rounded-3xl border border-border/70 bg-background/90 dark:bg-card/60 p-6 shadow-xl shadow-primary/10">
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
              <h3 className="text-xl font-semibold">What’s inside</h3>
              <ul className="grid gap-4 text-sm text-muted-foreground">
                <li className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                  ✅ Environment-aware deploy workflows with automatic rollbacks
                </li>
                <li className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                  ✅ Infrastructure blueprints for web apps, workers, and agents
                </li>
                <li className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                  ✅ Samples that pair CLI commands with production-grade configs
                </li>
              </ul>
              <Button asChild className="self-start">
                <Link to="/docs/Intro">
                  Dive into the docs
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section data-testid="updates" className="container flex flex-col gap-8 py-16 md:py-20">
          <div className="flex flex-col gap-3 text-center">
            <Badge data-testid="updates-badge" variant="outline" className="mx-auto border-primary/30 bg-primary/10 text-primary">
              Recently refreshed
            </Badge>
            <h2 className="text-3xl font-semibold md:text-4xl">
              New launches, walkthroughs, and templates every month
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              Stay in the flow with product updates, migration notes, and real-world sample apps built by the Defang community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Deploy your first agent with Crew AI',
                href: '/blog/2025/06/16/crew-ai-sample',
                description: 'Use Defang workflows to bootstrap retrieval-augmented agents that scale beyond experiments.',
              },
              {
                title: 'May 2025 product highlights',
                href: '/blog/2025/06/06/may-product-updates',
                description: 'Ship features faster with environment-aware deploys, project templates, and richer metrics.',
              },
              {
                title: 'Opinionated Docker Compose to Defang migration',
                href: '/blog/2025/06/16/docker-compose-defang',
                description: 'A guided path for teams standardizing on Defang after years running compose in production.',
              },
            ].map(({ title, href, description }) => (
              <Card key={title} data-testid="update-card" className="group border-border/70 bg-background/90">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <Button asChild variant="ghost" className="gap-2 px-0 text-sm font-semibold">
                    <Link to={href}>
                      Read the update
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
