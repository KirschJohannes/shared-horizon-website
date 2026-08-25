export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; rows: [string, string][] }
  | { type: "subheading"; nummer: string; titel: string };

export type ContractSection = {
  nummer: string;
  titel: string;
  body: ContentBlock[];
};
