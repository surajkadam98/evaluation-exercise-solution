const testlet = [
  { id: 1, type: "pretest", question: "Pretest Question 1" },
  { id: 2, type: "pretest", question: "Pretest Question 2" },
  { id: 3, type: "operational", question: "Operational Question 1" },
  { id: 4, type: "operational", question: "Operational Question 2" },
  { id: 5, type: "operational", question: "Operational Question 3" },
  { id: 6, type: "operational", question: "Operational Question 4" },
  { id: 7, type: "pretest", question: "Pretest Question 3" },
  { id: 8, type: "pretest", question: "Pretest Question 4" },
  { id: 9, type: "operational", question: "Operational Question 5" },
  { id: 10, type: "operational", question: "Operational Question 6" },
];

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function randomizeOrder (testlet){
  const pretestItems = [];
  const operationalItems = [];

  // separate pretest and operational items
  testlet.forEach((item) => {
    if (item.type === "pretest") {
      pretestItems.push(item);
    } else {
      operationalItems.push(item);
    }
  });

  // select 2 random pretest items
  const selectedPretestItems = [];
  while (selectedPretestItems.length < 2) {
    const randomIndex = Math.floor(Math.random() * pretestItems.length);
    const pretestItem = pretestItems[randomIndex];
    if (!selectedPretestItems.includes(pretestItem)) {
      selectedPretestItems.push(pretestItem);
    }
  }
  // remove selected pretest items from the original array
  pretestItems.splice(
    pretestItems.findIndex((item) => item.id === selectedPretestItems[0].id),
    1
  );
  pretestItems.splice(
    pretestItems.findIndex((item) => item.id === selectedPretestItems[1].id),
    1
  );

  // shuffle the remaining pretest and operational items
  const shuffledItems = shuffleArray([...pretestItems, ...operationalItems]);

  // insert selected pretest items at the beginning of the array
  shuffledItems.unshift(selectedPretestItems[0]);
  shuffledItems.unshift(selectedPretestItems[1]);
  return shuffledItems;
};

