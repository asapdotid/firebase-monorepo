import { Injectable } from "@nestjs/common";
import { foo } from "picasso-clogs-monorepo-core";

@Injectable()
export class AppService {
  getHello(): any {
    return { code: 200, message: `Api's works ${foo}.` };
  }
}
