import * as moment from "moment";

declare module "moment" {
    interface Moment {
        lunar(): Moment;
        solar(): Moment;
    }
}
