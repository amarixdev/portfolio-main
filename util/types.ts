import { ReactElement } from "react";

export interface RedditAwardsState {
  Summary: any[];
  "Beyond Tech": any[];
  [key: string]: any;
}
export interface Theme {
  [key: string]: {
    icon: ReactElement | null;
    iconBanner: ReactElement | null;
    style: string | null;
  };
}
