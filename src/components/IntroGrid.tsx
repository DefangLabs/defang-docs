
import DocCardList from "@docusaurus/theme-classic/lib/theme/DocCardList";
import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';

const items: PropSidebarItem[] = [
    {
      type: "link",
      href: "/docs/intro/what-is-defang",
      label: "Learn more about Defang",
      description: "What is Defang and how does it work?",
    },
    {
      type: "link",
      href: "/docs/category/cli",
      label: "CLI Reference",
      description: "Use the defang CLI to deploy your app",
    },
    {
      type: "link",
      href: "/docs/tutorials/deploy-to-playground",
      label: "Try Defang",
      description: "Deploy to our free playground",
    },
    {
      type: "link",
      href: "/docs/tutorials/deploy-to-your-cloud",
      label: "Deploy to your own cloud",
      description: "When you're ready for production",
    },
]

export default function() {

  return (
    <DocCardList items={items} />
  );
}
