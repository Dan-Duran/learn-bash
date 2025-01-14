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
            noLink: true,
            items: [
                { title: "man - View Manual", href: "/man" },
                { title: "help - Command Help", href: "/help" },
                { title: "tldr - Displays simplified commands", href: "/tldr" },
                { title: "apropos - Search manual names", href: "/apropos" }
            ]
        },
        {
            title: "Navigation & Basic Operations",
            href: "/navigation",
            noLink: true,
            items: [
                { title: "pwd - Print Working Directory", href: "/pwd" },
                { title: "ls - List Directory Contents", href: "/ls" },
                { title: "tree - List in tree-like Format", href: "/tree" },
                { title: "cd - Change Directory", href: "/cd" },
                { title: "clear - Clear Terminal", href: "/clear" }
            ]
        },
        {
            title: "File Management",
            href: "/file-management",
            noLink: true,
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
            noLink: true,
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
            noLink: true,
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
            noLink: true,
            items: [
                { title: "df - Disk Free Space", href: "/df" },
                { title: "du - Disk Usage", href: "/du" },
                { title: "history - Command History", href: "/history" }
            ]
        },
        {
            title: "Permissions & Users",
            href: "/permissions",
            noLink: true,
            items: [
                { title: "chmod - Change Permissions", href: "/chmod" },
                { title: "chown - Change Ownership", href: "/chown" },
                { title: "passwd - Change User Password", href: "/passwd" }
            ]
        },
        {
            title: "Network & Downloads",
            href: "/network",
            noLink: true,
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
        {
            title: "I/O Redirection",
            href: "/io-redirection",
            noLink: true,
            items: [
                { title: "| - Pipe Output Between Commands", href: "/pipe" },
                { title: "> - Redirect Output to File", href: "/redirect" },
                { title: ">> - Append Output to File", href: "/append" },
                { title: "< - Redirection", href: "/input" },
                { title: "&& - AND Operator", href: "/and" },
                { title: "; - Semicolon", href: "/semicolon" },
                { title: "|| - OR Operator", href: "/or" },
                { title: "2> - Redirect Error Output", href: "/error" },
                { title: "&> - Redirect All Output", href: "/all-output" }
            ]
        },
        {
            title: "Text Processing",
            href: "/text-processing",
            noLink: true,
            items: [
                { title: "sed - Stream Editor", href: "/sed" },
                { title: "awk - Text Processing Language", href: "/awk" },
                { title: "xargs - Build Command Lines", href: "/xargs" },
                { title: "sort - Sort Text Lines", href: "/sort" },
                { title: "uniq - Report Repeated Lines", href: "/uniq" },
                { title: "tr - Translate Characters", href: "/tr" },
                { title: "cut - Remove Sections", href: "/cut" },
                { title: "tee - Read and Write Output", href: "/tee" }
            ]
        },
        {
            title: "Remote Operations",
            href: "/remote-operations",
            noLink: true,
            items: [
                { title: "rsync - Remote Sync", href: "/rsync" },
                { title: "ssh - Secure Shell", href: "/ssh" },
                { title: "ftp - File Transfer Protocol", href: "/ftp" },
                { title: "scp - Secure Copy", href: "/scp" }
            ]
        },
        {
            title: "Process Control",
            href: "/process-control",
            noLink: true,
            items: [
                { title: "screen - Terminal Multiplexer", href: "/screen" },
                { title: "tmux - Terminal Multiplexer", href: "/tmux" },
                { title: "bg - Background Process", href: "/bg" },
                { title: "fg - Foreground Process", href: "/fg" },
                { title: "jobs - List Background Jobs", href: "/jobs" }
            ]
        },
        {
            title: "File Operations",
            href: "/file-operations",
            noLink: true,
            items: [
                { title: "dd - Convert and Copy", href: "/dd" },
                { title: "diff - Compare Files", href: "/diff" },
                { title: "patch - Apply Diff File", href: "/patch" },
                { title: "ln - Create Links", href: "/ln" },
                { title: "chattr - Change Attributes", href: "/chattr" },
                { title: "lsattr - List Attributes", href: "/lsattr" }
            ]
        },
        {
            title: "System Monitoring",
            href: "/system-monitoring",
            noLink: true,
            items: [
                { title: "strace - Trace System Calls", href: "/strace" },
                { title: "ltrace - Trace Library Calls", href: "/ltrace" },
                { title: "vmstat - Virtual Memory Stats", href: "/vmstat" },
                { title: "iostat - IO Statistics", href: "/iostat" }
            ]
        },
        {
            title: "Network Tools",
            href: "/network-tools",
            noLink: true,
            items: [
                { title: "nc - NetCat", href: "/nc" },
                { title: "dig - DNS Lookup", href: "/dig" },
                { title: "ifconfig - Network Interface Config", href: "/ifconfig" },
                { title: "ip - Replaces ifconfig", href: "/ip" },
                { title: "iptables - Firewall Management", href: "/iptables" },
                { title: "mtr - Network Diagnostic", href: "/mtr" },
                { title: "netstat - Network Statistics", href: "/netstat" },
                { title: "nmap - Network Scanner", href: "/nmap" },
                { title: "nslookup - DNS Query", href: "/nslookup" },
                { title: "route - Network Route Table", href: "/route" },
                { title: "tcpdump - Packet Analyzer", href: "/tcpdump" },
                { title: "traceroute - Trace Network Route", href: "/traceroute" }
            ]
        }
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
 },
 {
    title: "Resources",
    href: "/resources", 
    noLink: true,
    items: [
        { title: "Guides", href: "/guides" },
        { title: "Stacks & Credits", href: "/stacks" },
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