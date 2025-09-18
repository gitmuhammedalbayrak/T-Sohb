
import type { TrelloBoard, TrelloCard, TrelloCardWithCompletion } from '../types';

const DONE_LIST_KEYWORDS = ['tamamlandı', 'done', 'completed'];

export const filterCompletedCards = (boardData: TrelloBoard, period: 'day' | 'month'): TrelloCardWithCompletion[] => {
  if (!boardData || !boardData.lists || !boardData.actions || !boardData.cards) {
    throw new Error('Invalid or incomplete Trello JSON data.');
  }

  const doneListIds = boardData.lists
    .filter(list => DONE_LIST_KEYWORDS.some(keyword => list.name.toLowerCase().includes(keyword)))
    .map(list => list.id);

  if (doneListIds.length === 0) {
    throw new Error(`Could not find a "Done" or "Tamamlandı" list on the board.`);
  }

  const now = new Date();
  const timeLimit = new Date();
  if (period === 'day') {
    timeLimit.setDate(now.getDate() - 1);
  } else { // month
    timeLimit.setMonth(now.getMonth() - 1);
  }

  const completedCardActions: { [cardId: string]: string } = {};

  boardData.actions
    .filter(action =>
      action.type === 'updateCard' &&
      action.data.listAfter &&
      doneListIds.includes(action.data.listAfter.id) &&
      (!action.data.listBefore || !doneListIds.includes(action.data.listBefore.id))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Process most recent first
    .forEach(action => {
      const actionDate = new Date(action.date);
      if (actionDate >= timeLimit) {
        // Only store the most recent completion date for each card
        if (!completedCardActions[action.data.card.id]) {
            completedCardActions[action.data.card.id] = action.date;
        }
      }
    });

  const completedCardIds = Object.keys(completedCardActions);

  if (completedCardIds.length === 0) {
    return [];
  }
    
  const cardMap = new Map<string, TrelloCard>(boardData.cards.map(card => [card.id, card]));

  const filteredCards: TrelloCardWithCompletion[] = completedCardIds
    .map(cardId => {
      const card = cardMap.get(cardId);
      if (card) {
        return {
          ...card,
          completionDate: completedCardActions[cardId],
        };
      }
      return null;
    })
    .filter((card): card is TrelloCardWithCompletion => card !== null)
    .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime());

  return filteredCards;
};
