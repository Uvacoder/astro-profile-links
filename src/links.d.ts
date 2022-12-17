export interface LinksRoot {
  data: LinksData;
}

export interface LinksData {
  getLinks: GetLinks;
}

export interface GetLinks {
  items: Item[];
  totalCount: number;
  __typename: string;
}

export interface Item {
  id: number;
  type: string;
  title: string;
  url: string;
  active: boolean;
  position: number;
  modifiers: Modifiers;
  linkContext?: LinkContext;
  rules: Rules;
  messages: Message[];
  __typename: string;
}

export interface Modifiers {
  animation: any;
  forwardingEnd: any;
  forwardingTimezone: any;
  scheduledStatus: ScheduledStatus;
  scheduleEndTimezone: any;
  scheduleEnd: any;
  scheduleStartTimezone: any;
  scheduleStart: any;
  thumbnailUrl?: string;
  amazonAffiliate: any;
  __typename: string;
}

export interface ScheduledStatus {
  on: boolean;
  started: any;
  ended: any;
  __typename: string;
}

export interface LinkContext {
  isIncompleteTemplateLink: any;
  __typename: string;
  embedOption?: string;
  layoutOption?: string;
  autoplay?: boolean;
  mute?: boolean;
  subscribe: any;
}

export interface Rules {
  gate: Gate;
  __typename: string;
}

export interface Gate {
  activeOrder: any[];
  blocked: any[];
  age: any;
  passcode: any;
  nft: any;
  sensitiveContent: SensitiveContent;
  payment: any;
  __typename: string;
}

export interface SensitiveContent {
  enforced: boolean;
  suggested: boolean;
  optedOut: boolean;
  __typename: string;
}

export interface Message {
  code: string;
  level: string;
  path: any[];
  context: Context;
  __typename: string;
}

export interface Context {
  provider: any;
  __typename: string;
}
