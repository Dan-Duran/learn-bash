// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
 };
 
 export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started", 
    noLink: true,
    items: [
      { 
        title: "Introduction",
        href: "/introduction"
      },
      {
        title: "Installation",
        href: "/installation"
      }
    ]
  },
  { 
    title: "Basic Concepts",
    href: "/basic-concepts",
    noLink: true,
    items: [
      { title: "Why Use Bash", href: "/why-use-bash" },
      { title: "Tips to Master Bash", href: "/tips-to-master-bash" }
    ]
  },
  {
    title: "Essential Commands",
    href: "/essential-commands",
    noLink: true,
    items: [
      { title: "ls - List Directory Contents", href: "/ls" },
      { title: "cd - Change Directory", href: "/cd" },
      { title: "pwd - Print Working Directory", href: "/pwd" },
      { title: "mkdir - Make Directory", href: "/mkdir" },
      { title: "rm - Remove Files/Directories", href: "/rm" },
      { title: "cp - Copy Files/Directories", href: "/cp" },
      { title: "mv - Move/Rename Files", href: "/mv" },
      { title: "grep - Search Text Patterns", href: "/grep" },
      { title: "chmod - Change File Permissions", href: "/chmod" },
      { title: "cat - Concatenate Files", href: "/cat" },
      { title: "ps - Process Status", href: "/ps" },
      { title: "kill - Terminate Processes", href: "/kill" },
      { title: "df - Disk Free Space", href: "/df" },
      { title: "du - Disk Usage", href: "/du" },
      { title: "top - Monitor System Processes", href: "/top" },
      { title: "tar - Archive Files", href: "/tar" },
      { title: "ping - Network Testing", href: "/ping" },
      { title: "wget - Download Files", href: "/wget" },
      { title: "find - Search Files", href: "/find" },
      { title: "history - Command History", href: "/history" }
    ]
  }
 ];
 
 type Page = { title: string; href: string };
 
 function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
 }
 
 export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();