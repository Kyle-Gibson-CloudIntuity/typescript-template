import { NS } from "@ns";
import { getServers } from "../helpers/findAllServers";

export async function main(ns: NS): Promise<void> {
    let servers = getServers;
  ns.tprint("Hello Remote API!");
}
