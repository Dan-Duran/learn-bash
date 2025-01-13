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
      { title: "Introduction", href: "/introduction" },
      { title: "Why Use Bash", href: "/why-use-bash" },
      { title: "Installation", href: "/installation" }
    ]
  },
  { 
    title: "Basic Concepts",
    href: "/basic-concepts",
    noLink: true,
    items: [
      { title: "Command Line Basics", href: "/command-line-basics" },  // New
      { title: "Command Structure", href: "/command-structure" },      // New
      { title: "Tips to Master Bash", href: "/tips-to-master-bash" }
    ]
  },
  {
    title: "Essential Commands",
    href: "/essential-commands", 
    noLink: true,
    items: [
        { title: "Overview", href: "/overview" },
        {
            title: "Getting Help",
            href: "/help",
            items: [
                { title: "man - View Manual", href: "/man" },
                { title: "help - Command Help", href: "/help" }
            ]
        },
        {
            title: "Navigation & Basic Operations",
            href: "/navigation",
            items: [
                { title: "pwd - Print Working Directory", href: "/pwd" },
                { title: "ls - List Directory Contents", href: "/ls" },
                { title: "cd - Change Directory", href: "/cd" },
                { title: "clear - Clear Terminal", href: "/clear" }
            ]
        },
        {
            title: "File Management",
            href: "/file-management",
            items: [
                { title: "mkdir - Make Directory", href: "/mkdir" },
                { title: "touch - Create Empty Files", href: "/touch" },
                { title: "cp - Copy Files/Directories", href: "/cp" },
                { title: "mv - Move/Rename Files", href: "/mv" },
                { title: "rm - Remove Files/Directories", href: "/rm" },
                { title: "tar - Archive Files", href: "/tar" }
            ]
        },
        {
            title: "File Content & Search",
            href: "/file-content",
            items: [
                { title: "cat - Concatenate Files", href: "/cat" },
                { title: "echo - Display a Line", href: "/echo" },
                { title: "head - Output the First Part", href: "/head" },
                { title: "tail - Output the Last Part", href: "/tail" },
                { title: "grep - Search Text Patterns", href: "/grep" },
                { title: "find - Search Files", href: "/find" }
            ]
        },
        {
            title: "System & Processes",
            href: "/system",
            items: [
                { title: "sudo - Execute with Superuser", href: "/sudo" },
                { title: "ps - Process Status", href: "/ps" },
                { title: "top - Monitor System Processes", href: "/top" },
                { title: "kill - Terminate Processes", href: "/kill" },
                { title: "watch - Show Output in Full Screen", href: "/watch" }
            ]
        },
        {
            title: "System Information",
            href: "/system-info",
            items: [
                { title: "df - Disk Free Space", href: "/df" },
                { title: "du - Disk Usage", href: "/du" },
                { title: "history - Command History", href: "/history" }
            ]
        },
        {
            title: "Permissions & Users",
            href: "/permissions",
            items: [
                { title: "chmod - Change Permissions", href: "/chmod" },
                { title: "chown - Change Ownership", href: "/chown" },
                { title: "passwd - Change User Password", href: "/passwd" }
            ]
        },
        {
            title: "Network & Downloads",
            href: "/network",
            items: [
                { title: "ping - Network Testing", href: "/ping" },
                { title: "curl - Transfer Data", href: "/curl" },
                { title: "wget - Download Files", href: "/wget" }
            ]
        }
    ]
  },
  {
    title: "Advanced Commands",
    href: "/advanced-commands",
    noLink: true,
    items: [
      { title: "Overview", href: "/overview" },
      { title: "| - Pipe Output Between Commands", href: "/pipe" },
      { title: "> - Redirect Output to File", href: "/redirect" },
      { title: ">> - Append Output to File", href: "/append" },
      { title: "< - Input from File", href: "/input" },
      { title: "&& - AND Operator", href: "/and" },
      { title: "|| - OR Operator", href: "/or" },
      { title: "2> - Redirect Error Output", href: "/error" },
      { title: "&> - Redirect All Output", href: "/all-output" },
      { title: "sed - Stream Editor", href: "/sed" },
      { title: "awk - Text Processing Language", href: "/awk" },
      { title: "xargs - Build Command Lines", href: "/xargs" },
      { title: "sort - Sort Text Lines", href: "/sort" },
      { title: "uniq - Report Repeated Lines", href: "/uniq" },
      { title: "tr - Translate Characters", href: "/tr" },
      { title: "cut - Remove Sections", href: "/cut" },
      { title: "tee - Read and Write Output", href: "/tee" },
      { title: "rsync - Remote Sync", href: "/rsync" },
      { title: "ssh - Secure Shell", href: "/ssh" },
      { title: "scp - Secure Copy", href: "/scp" },
      { title: "screen - Terminal Multiplexer", href: "/screen" },
      { title: "tmux - Terminal Multiplexer", href: "/tmux" },
      { title: "bg - Background Process", href: "/bg" },
      { title: "fg - Foreground Process", href: "/fg" },
      { title: "jobs - List Background Jobs", href: "/jobs" },
      { title: "dd - Convert and Copy", href: "/dd" },
      { title: "diff - Compare Files", href: "/diff" },
      { title: "patch - Apply Diff File", href: "/patch" },
      { title: "ln - Create Links", href: "/ln" },
      { title: "chattr - Change Attributes", href: "/chattr" },
      { title: "lsattr - List Attributes", href: "/lsattr" },
      { title: "strace - Trace System Calls", href: "/strace" },
      { title: "ltrace - Trace Library Calls", href: "/ltrace" },
      { title: "vmstat - Virtual Memory Stats", href: "/vmstat" },
      { title: "iostat - IO Statistics", href: "/iostat" },
      { title: "nc - NetCat", href: "/nc" },
    ]
  },
  {
    title: "Bash Scripting",
    href: "/scripting", 
    noLink: true,
    items: [
        { title: "Shebang", href: "/shebang" },
        { title: "Basics", href: "/basics" },
        { title: "Variables", href: "/variables" },
        { title: "Control Flow", href: "/control-flow" },
        { title: "Functions", href: "/functions" },
        { title: "Arrays", href: "/arrays" },
        { title: "Loops", href: "/loops" },
        { title: "Input/Output", href: "/input-output" },
        { title: "Error Handling", href: "/error-handling" },
        { title: "Debugging", href: "/debugging" },
        { title: "Best Practices", href: "/best-practices" },
        { title: "Example Scripts", href: "/example-scripts" }
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