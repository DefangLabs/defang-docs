import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const items = [
  {
    href: "/docs/intro",
    label: "Defang Deploy",
    description: "Take your app to your own cloud on AWS, GCP or Azure.",
  },
  {
    href: "/docs/station",
    label: "Defang Station",
    description: "An always-on machine for your coding agent.",
  },
];

function CardLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <article className="col col--6 margin-bottom--lg">
      <Link
        to={href}
        className="card padding--lg"
        style={{
          display: "block",
          height: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "0.25rem",
          }}
        >
          📄️ <span style={{ textDecoration: "underline" }}>{label}</span>
        </h2>
        <p
          style={{
            fontSize: "0.8rem",
            marginBottom: 0,
            textDecoration: "underline",
          }}
        >
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
        <div style={{ textAlign: "center" }}>
          <img
            src="/img/defang-logo.svg"
            alt="Defang Logo"
            className="w-48 mb-4 mx-auto"
          />
          <h1 style={{ fontSize: "3rem" }}>Defang Documentation</h1>
          <p>
            Defang helps you become AI-native without becoming vendor-native.
            Your cloud, your models, your accounts. Start with the product you
            are using.
          </p>
          <div className="h-8" />
          <h2 style={{ fontSize: "1.875rem", marginBottom: "1rem" }}>
            Products
          </h2>
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
