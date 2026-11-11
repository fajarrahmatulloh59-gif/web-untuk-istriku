export interface MemoryItem {
  id: string;
  image: string;
  caption: string;
  subCaption?: string;
  date?: string;
  rotation: number;
}

export interface PromiseItem {
  id: number;
  title: string;
  detail: string;
  stamped: boolean;
}

export interface TransferDetails {
  bankName: string;
  recipientName: string;
  recipientAccount: string;
  amount: string;
  date: string;
  transferId: string;
  notes: string;
  customImage?: string;
}

export interface AppConfig {
  wifeName: string;
  husbandName: string;
  specialCall: string;
  transfer: TransferDetails;
}
