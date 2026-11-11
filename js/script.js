// ====== DATA: Array of Meal Objects ======
const meals = [
  {
    name: "Caprese Sandwich",
    subtitle: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    difficulty: "Easy",
    cuisine: "Italian",
    rating: 4.5,
    reviews: 189,
    prepTime: 10,
    prepTimeLabel: "10 min",
    cookTime: 5,
    cookTimeLabel: "5 min",
    servings: "2 people",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
    ],
    nutrition: {
      calories: { value: "480 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "22g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "48g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "22g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "3g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "680mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
  {
    name: "Lasagna Bolognese",
    subtitle: "Layered Italian pasta with rich meat sauce and béchamel",
    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: 4.9,
    reviews: 478,
    prepTime: 30,
    prepTimeLabel: "30 min",
    cookTime: 90,
    cookTimeLabel: "90 min",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Prepare meat sauce: brown beef with onion and carrots.",
      "Add canned tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package.",
      "Layer: meat sauce, pasta, béchamel, repeat.",
      "Top with mozzarella and parmesan.",
      "Bake at 180°C for 40 minutes until golden.",
    ],
    nutrition: {
      calories: { value: "620 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "32g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "55g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "28g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "4g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "920mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Let the meat sauce simmer for best flavor",
      "Don't skip the béchamel - it's essential!",
      "Let lasagna rest 10 minutes before cutting",
      "Use fresh pasta sheets if possible",
    ],
  },
  {
    name: "Shrimp Scampi",
    subtitle: "Garlicky shrimp in white wine butter sauce",
    difficulty: "Easy",
    cuisine: "Seafood",
    rating: 4.8,
    reviews: 356,
    prepTime: 10,
    prepTimeLabel: "10 min",
    cookTime: 15,
    cookTimeLabel: "15 min",
    servings: "2 people",
    image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=800",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine in salted boiling water until al dente.",
      "Heat olive oil and butter in a large skillet.",
      "Add garlic and red pepper flakes, cook 30 seconds.",
      "Add shrimp, cook 2 minutes per side until pink.",
      "Pour in white wine, let reduce by half.",
      "Toss pasta with shrimp, add lemon juice and parsley.",
    ],
    nutrition: {
      calories: { value: "420 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "28g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "42g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "14g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "2g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "540mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Don't overcook the shrimp - they get rubbery",
      "Use dry white wine like Pinot Grigio",
      "Save some pasta water for the sauce",
      "Add butter at the end for richness",
    ],
  },
  {
    name: "Margherita Pizza",
    subtitle: "Classic Italian pizza with fresh mozzarella and basil",
    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: 4.9,
    reviews: 512,
    prepTime: 90,
    prepTimeLabel: "90 min",
    cookTime: 12,
    cookTimeLabel: "12 min",
    servings: "2 people",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Preheat oven to 250°C (480°F) with pizza stone.",
      "Stretch dough into a 12-inch circle.",
      "Spread crushed tomatoes evenly, leaving border.",
      "Tear mozzarella and distribute over pizza.",
      "Bake for 10-12 minutes until crust is golden.",
      "Top with fresh basil and drizzle olive oil.",
    ],
    nutrition: {
      calories: { value: "266 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "11g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "33g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "10g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "2g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "590mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Use a pizza stone for the crispiest crust",
      "Don't overload with toppings",
      "Fresh mozzarella should be drained well",
      "San Marzano tomatoes make a huge difference",
    ],
  },
  {
    name: "Chicken Stir Fry",
    subtitle: "Quick and healthy Asian-inspired chicken with vegetables",
    difficulty: "Easy",
    cuisine: "Asian",
    rating: 4.6,
    reviews: 215,
    prepTime: 15,
    prepTimeLabel: "15 min",
    cookTime: 10,
    cookTimeLabel: "10 min",
    servings: "3 people",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    ingredients: [
      "500g chicken breast, sliced",
      "2 cups mixed vegetables",
      "3 tbsp soy sauce",
      "2 tbsp oyster sauce",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "2 tbsp cornstarch",
      "Cooked rice for serving",
    ],
    instructions: [
      "Marinate chicken in soy sauce and cornstarch for 10 minutes.",
      "Heat oil in a wok over high heat.",
      "Stir-fry chicken until golden, about 5 minutes. Remove.",
      "Cook vegetables for 3-4 minutes until crisp-tender.",
      "Add garlic and ginger, cook for 30 seconds.",
      "Return chicken, add sauces, toss to combine.",
      "Serve over steamed rice.",
    ],
    nutrition: {
      calories: { value: "320 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "35g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "28g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "8g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "4g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "820mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Cut all ingredients before you start cooking",
      "High heat is key for good stir fry",
      "Don't overcrowd the pan",
      "Add vegetables in order of cooking time",
    ],
  },
  {
    name: "Beef Tacos",
    subtitle: "Authentic Mexican tacos with seasoned ground beef",
    difficulty: "Easy",
    cuisine: "Mexican",
    rating: 4.7,
    reviews: 278,
    prepTime: 10,
    prepTimeLabel: "10 min",
    cookTime: 15,
    cookTimeLabel: "15 min",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
    ingredients: [
      "500g ground beef",
      "8 small corn tortillas",
      "1 onion, diced",
      "2 tomatoes, diced",
      "1 cup shredded lettuce",
      "1 cup shredded cheese",
      "Sour cream",
      "Taco seasoning",
      "Lime wedges",
      "Fresh cilantro",
    ],
    instructions: [
      "Brown ground beef in a skillet over medium-high heat.",
      "Add taco seasoning and 1/2 cup water, simmer 5 minutes.",
      "Warm tortillas in a dry pan or microwave.",
      "Prepare toppings: dice tomatoes, shred lettuce and cheese.",
      "Assemble tacos: beef, lettuce, tomato, cheese.",
      "Top with sour cream, cilantro, and a squeeze of lime.",
    ],
    nutrition: {
      calories: { value: "380 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "24g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "32g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "18g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "5g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "720mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Warm tortillas for better flavor and flexibility",
      "Double the meat for heartier tacos",
      "Add hot sauce for extra kick",
      "Use fresh lime juice, not bottled",
    ],
  },
  {
    name: "Creamy Pasta Carbonara",
    subtitle: "Classic Roman pasta with eggs, cheese, and pancetta",
    difficulty: "Intermediate",
    cuisine: "Italian",
    rating: 4.9,
    reviews: 412,
    prepTime: 10,
    prepTimeLabel: "10 min",
    cookTime: 15,
    cookTimeLabel: "15 min",
    servings: "4 people",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale",
      "4 egg yolks",
      "1 cup Pecorino Romano cheese",
      "Black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Cook spaghetti in salted boiling water until al dente.",
      "Fry pancetta until crispy, about 5 minutes.",
      "Whisk egg yolks with grated cheese and pepper.",
      "Drain pasta, reserving 1 cup pasta water.",
      "Mix hot pasta with pancetta off the heat.",
      "Quickly stir in egg mixture, adding pasta water as needed.",
      "Serve immediately with extra cheese and pepper.",
    ],
    nutrition: {
      calories: { value: "520 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "22g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "58g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "22g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "3g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "890mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Never add cream - it's not authentic!",
      "Remove pan from heat before adding eggs",
      "Use Pecorino Romano, not Parmesan",
      "Work quickly to avoid scrambled eggs",
    ],
  },
  {
    name: "Grilled Salmon",
    subtitle: "Healthy grilled salmon with lemon and herbs",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: 4.7,
    reviews: 198,
    prepTime: 10,
    prepTimeLabel: "10 min",
    cookTime: 12,
    cookTimeLabel: "12 min",
    servings: "2 people",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    ingredients: [
      "2 salmon fillets (200g each)",
      "2 tbsp olive oil",
      "1 lemon",
      "2 cloves garlic",
      "Fresh dill",
      "Salt and pepper",
      "Asparagus for serving",
    ],
    instructions: [
      "Pat salmon dry and season with salt and pepper.",
      "Mix olive oil, minced garlic, and lemon juice.",
      "Brush salmon with the mixture.",
      "Preheat grill to medium-high heat.",
      "Grill salmon skin-side down for 6-8 minutes.",
      "Flip carefully and cook 2-3 more minutes.",
      "Serve with grilled asparagus and lemon wedges.",
    ],
    nutrition: {
      calories: { value: "367 kcal", icon: "🔥", bg: "#ffedd5" },
      protein: { value: "34g", icon: "💪", bg: "#dbeafe" },
      carbs: { value: "4g", icon: "🌾", bg: "#fef3c7" },
      fat: { value: "22g", icon: "🩸", bg: "#fce7f3" },
      fiber: { value: "2g", icon: "🌱", bg: "#dcfce7" },
      sodium: { value: "98mg", icon: "🧂", bg: "#f3e8ff" },
    },
    tips: [
      "Don't flip the salmon too early",
      "Skin should be crispy before flipping",
      "Use a fish spatula for easier flipping",
      "Let salmon rest 2 minutes before serving",
    ],
  },
];

// ====== FUNCTION: Choose Random Meal ======
function getRandomMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

// ====== FUNCTION: Render Meal to DOM ======
function renderMeal(meal) {
  // Image & basic info
  document.getElementById("recipeImage").style.backgroundImage =
    `url(${meal.image})`;
  document.getElementById("recipeName").textContent = meal.name;
  document.getElementById("subtitle").textContent = meal.subtitle;

  // Difficulty tag with color
  const diffTag = document.getElementById("difficulty");
  diffTag.textContent = meal.difficulty;
  diffTag.className = "tag";
  if (meal.difficulty === "Easy") diffTag.classList.add("easy");
  else if (meal.difficulty === "Intermediate")
    diffTag.classList.add("intermediate");

  document.getElementById("cuisine").textContent = meal.cuisine;
  document.getElementById("rating").textContent = meal.rating;
  document.getElementById("reviews").textContent = meal.reviews;
  document.getElementById("prepTime").textContent = meal.prepTimeLabel;
  document.getElementById("cookTime").textContent = meal.cookTimeLabel;
  document.getElementById("servings").textContent = meal.servings;

  // Warning Box - show if total time > 45 min
  const totalTime = meal.prepTime + meal.cookTime;
  const warningBox = document.getElementById("warningBox");
  if (totalTime > 45) {
    warningBox.style.display = "flex";
  } else {
    warningBox.style.display = "none";
  }

  // Ingredients
  const ingredientsHTML = meal.ingredients
    .map(
      (ing, i) => `
    <div class="ingredient-item">
      <div class="ingredient-num">${i + 1}</div>
      <div>${ing}</div>
    </div>
  `,
    )
    .join("");
  document.getElementById("ingredients").innerHTML =
    `<div class="ingredients-list">${ingredientsHTML}</div>`;

  // Instructions
  const instructionsHTML = meal.instructions
    .map(
      (step, i) => `
    <div class="instruction-item">
      <div class="instruction-num">${i + 1}</div>
      <div class="instruction-text">${step}</div>
    </div>
  `,
    )
    .join("");
  document.getElementById("instructions").innerHTML =
    `<div class="instructions-list">${instructionsHTML}</div>`;

  // Nutrition
  const n = meal.nutrition;
  document.getElementById("nutrition").innerHTML = `
    <div class="nutrition-grid">
      <div class="nutrition-item">
        <div class="left"><div class="nutrition-icon" style="background:${n.calories.bg}">${n.calories.icon}</div> Calories</div>
        <div class="value">${n.calories.value}</div>
      </div>
      <div class="nutrition-item">
        <div class="left"><div class="nutrition-icon" style="background:${n.protein.bg}">${n.protein.icon}</div> Protein</div>
        <div class="value">${n.protein.value}</div>
      </div>
      <div class="nutrition-item">
        <div class="left"><div class="nutrition-icon" style="background:${n.carbs.bg}">${n.carbs.icon}</div> Carbohydrates</div>
        <div class="value">${n.carbs.value}</div>
      </div>
      <div class="nutrition-item">
        <div class="left"><div class="nutrition-icon" style="background:${n.fat.bg}">${n.fat.icon}</div> Fat</div>
        <div class="value">${n.fat.value}</div>
      </div>
      <div class="nutrition-item">
        <div class="left"><div class="nutrition-icon" style="background:${n.fiber.bg}">${n.fiber.icon}</div> Fiber</div>
        <div class="value">${n.fiber.value}</div>
      </div>
      <div class="nutrition-item">
        <div class="left"><div class="nutrition-icon" style="background:${n.sodium.bg}">${n.sodium.icon}</div> Sodium</div>
        <div class="value">${n.sodium.value}</div>
      </div>
    </div>
  `;

  // Tips
  const tipsHTML = meal.tips
    .map(
      (tip) => `
    <div class="tip-item">
      <div class="tip-check">✓</div>
      <div>${tip}</div>
    </div>
  `,
    )
    .join("");
  document.getElementById("tips").innerHTML =
    `<div class="tips-list">${tipsHTML}</div>`;
}

// ====== FUNCTION: Load Random Recipe ======
function loadRandomRecipe() {
  const meal = getRandomMeal();
  renderMeal(meal);
  // Reset to first tab
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));
  document
    .querySelector('.tab[data-tab="ingredients"]')
    .classList.add("active");
  document.getElementById("ingredients").classList.add("active");
  // Scroll to top of content
  document.querySelector(".content-section").scrollTop = 0;
}

// ====== Tabs Logic ======
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// ====== Try Another Button ======
document
  .getElementById("tryAnotherBtn")
  .addEventListener("click", loadRandomRecipe);

// ====== Load Random on Page Open ======
loadRandomRecipe();
