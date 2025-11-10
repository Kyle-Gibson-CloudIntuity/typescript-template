import { NS } from "@ns";

export async function getServers(ns: NS): Promise<String[]> {
    let servers = listAllAvailableServers(ns);
    return servers;
}

/**
 * This function returns an array of servers dynamically
 * @param ns - The Netscript environment (must have scan method)
 * @param current - The current server to scan connections from (defaults to "home")
 * @param set - A Set used for recursion, tracking visited servers
 * @returns An array of all available server names
 */
function listAllAvailableServers(
    ns: { scan: (hostname: string) => string[] },
    current: string = "home",
    set: Set<string> = new Set()
): string[] {
    const connections = ns.scan(current);
    const next = connections.filter(c => !set.has(c));
    next.forEach(n => {
        set.add(n);
        listAllAvailableServers(ns, n, set);
    });
    return Array.from(set);
}
export default listAllAvailableServers;