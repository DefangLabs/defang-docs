import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const items = [
  {
    href: "/docs/intro/what-is-defang",
    label: "Learn more about Defang",
    description: "What is Defang and how does it work?",
  },
  {
    href: "/docs/cli",
    label: "CLI Reference",
    description: "Use the Defang CLI to deploy your app",
  },
  {
    href: "/docs/tutorials/deploy-to-playground",
    label: "Try Defang",
    description: "Deploy to our free Playground",
  },
  {
    href: "/docs/tutorials/deploy-to-your-cloud",
    label: "Deploy to your own cloud",
    description: "When you're ready for production",
  },
];

function CardLink({href, label, description}: {href: string; label: string; description: string}) {
  return (
    <article className="col col--6 margin-bottom--lg">
      <Link
        to={href}
        className="card padding--lg"
        style={{
          display: 'block',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '0.25rem',
        }}>
          📄️ <span style={{textDecoration: 'underline'}}>{label}</span>
        </h2>
        <p style={{
          fontSize: '0.8rem',
          marginBottom: 0,
          textDecoration: 'underline',
        }}>
          {description}
        </p>
      </Link>
    </article>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="container margin-vert--lg">
        <div style={{textAlign: "center"}}>
          <img
            src="/img/defang-logo.svg"
            alt="Defang Logo"
            className="w-48 mb-4 mx-auto"
          />
          <h1 style={{fontSize: '3rem'}}>Defang Documentation</h1>
          <p>
            Defang lets you take your app from Docker Compose to a secure and scalable deployment on your favorite cloud in minutes. Build cloud applications in any language and stack, deploy to your account on your favorite cloud with a single command, and iterate quickly with AI-assisted tooling.
          </p>
          <div className="h-8" />
          <h2 style={{fontSize: '1.875rem', marginBottom: '1rem'}}>Getting Started</h2>
        </div>
        <div className="row">
          {items.map((item) => (
            <CardLink key={item.href} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
