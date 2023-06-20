import { allChampions } from "contentlayer/generated";

// export const getAllChampions = () => {
//   return allChampions;
// };

export const getAllChampions = () => {
  return allChampions.sort(
    (a, b) => b.championships.length - a.championships.length
  );
};
