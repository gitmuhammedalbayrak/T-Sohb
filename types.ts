
export interface TrelloCard {
  id: string;
  name: string;
  desc: string;
  labels: { id: string; name: string; color: string }[];
  idList: string;
  idMembers: string[];
}

export interface TrelloCardWithCompletion extends TrelloCard {
  completionDate: string;
}

export interface TrelloList {
  id: string;
  name: string;
  closed: boolean;
}

export interface TrelloAction {
  id: string;
  idMemberCreator: string;
  type: 'updateCard';
  date: string;
  data: {
    card: {
      id: string;
      name: string;
      idList: string;
    };
    listBefore?: {
      id: string;
      name: string;
    };
    listAfter?: {
      id: string;
      name: string;
    };
  };
}

export interface TrelloBoard {
  name: string;
  lists: TrelloList[];
  cards: TrelloCard[];
  actions: TrelloAction[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  isLoading?: boolean;
}
