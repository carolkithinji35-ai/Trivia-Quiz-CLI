#!/usr/bin/env node

import { program } from "commander";
import { startCLI } from "../src/lib/menu.js";

startCLI();

program.parse(process.argv);
