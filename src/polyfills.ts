import * as process from "process";
import { Buffer } from "buffer";
// @ts-ignore
Object.assign(self, {
    process,
    global: self,
    Buffer,
});
