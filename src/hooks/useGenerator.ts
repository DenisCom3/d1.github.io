import { useMemo } from "react";
import { generateCardId, ToDo } from "../types/types";




export const useGeneratorId = (cards: ToDo[]) => {
	const generateId = cards.length===0 ? 0 :  generateCardId((cards[cards.length-1].id))

	return useMemo(() => {
	  return generateId !== 0 ?generateId.next().value : 1
	},[ generateId])
}

export default useGeneratorId