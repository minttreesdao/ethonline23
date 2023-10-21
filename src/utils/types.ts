// types.ts

export type SignaturePayload = {
    action: "create" | "delete";
    created_at: number;
    platform: "twitter" | "keybase"; // Add other platforms as needed
    identity: string;
    prev: string | null;
    uuid: string;
  };
  