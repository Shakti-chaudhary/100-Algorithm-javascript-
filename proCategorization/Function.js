// proCategorization

function proCategorization(pros, preferences) {
  const categories = new Set();
  const preferencesMap = new Map();

  // Populate categories and preferencesMap
  for (let i = 0; i < pros.length; i++) {
    const pro = pros[i];
    const proPreferences = preferences[i];

    // Populate categories
    for (let j = 0; j < proPreferences.length; j++) {
      const category = proPreferences[j];
      categories.add(category);

      // Populate preferencesMap
      if (!preferencesMap.has(category)) {
        preferencesMap.set(category, new Set());
      }

      preferencesMap.get(category).add(pro);
    }
  }

  const result = [];

  // Convert preferencesMap to the desired format
  for (const category of categories) {
    result.push([[category], Array.from(preferencesMap.get(category))]);
  }

  return result;
}

console.log(
  proCategorization(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer repair", "Handyman", "House cleaning"],
      ["Computer lessons", "Computer repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"],
    ]
  )
);
