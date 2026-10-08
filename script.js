const namePool = [
  "Ava", "Mila", "Sofia", "Zoe", "Luna", "Emma", "Olivia", "Nora", "Ivy", "Layla",
  "Maya", "Aria", "Chloe", "Elena", "Naomi", "Ruby", "Harper", "Ariana", "Selena", "Cora",
  "Jade", "Amelia", "Leah", "Hazel", "Vera", "Alice", "Rina", "Tessa", "Isla", "Camila",
  "Ella", "Freya", "Georgia", "Kyra", "Piper", "Bea", "Nadia", "Skye", "Lena", "Diana",
  "Clara", "Mia", "Noor", "Ari", "Sage", "Lola", "Mae", "Sienna", "Anya", "Rhea",
  "Livia", "Juno", "Iris", "Margo", "Kira", "Alina", "Yara", "Eden", "Nova", "Hannah",
  "Iris", "Sasha", "Adeline", "Priya", "Rosie", "Celine", "Talia", "Amara", "Savannah", "Vivian",
  "Marina", "Scarlet", "Arielle", "Penelope", "Valentina", "Lia", "Ines", "Elise", "Miriam", "Annika",
  "Claire", "Kylie", "Sol", "Aster", "Lila", "Gemma", "Mila", "Roxy", "Melina", "Brielle",
  "Eliza", "Sadie", "Astrid", "Malia", "Maren", "Holly", "Ada", "Sabrina", "Riley", "Delilah"
];

const vibePool = [
  "Adventurous", "Chill", "Bookish", "Creative", "Funny", "Dreamy", "Elegant", "Confident",
  "Clever", "Sweet", "Bold", "Playful", "Kind", "Stylish", "Warm", "Grounded", "Energetic",
  "Independent", "Romantic", "Curious", "Vibrant", "Mischievous", "Sunny", "Lively", "Trendy"
];

const hobbyPool = [
  "coffee dates", "hiking", "concerts", "pottery", "travel", "art museums", "baking", "karaoke",
  "beach walks", "reading", "photography", "gaming", "gardening", "dancing", "skiing", "cook-offs",
  "live comedy", "board games", "yoga", "DIY projects", "night markets", "biking", "surfing",
  "cinema nights", "brunch spots", "poetry", "camping", "volunteering", "fashion finds"
];

const cityPool = [
  "Seattle", "New York", "Los Angeles", "Chicago", "San Diego", "Austin", "Boston", "Miami",
  "Nashville", "Portland", "Denver", "Phoenix", "San Francisco", "Paris", "Tokyo", "Barcelona",
  "Berlin", "Lisbon", "Toronto", "Sydney", "Mexico City", "Seoul", "Amsterdam", "Copenhagen"
];

const colorThemes = [
  "linear-gradient(135deg, #ff8ab5, #7c5cff)",
  "linear-gradient(135deg, #ff9f6e, #ff5c96)",
  "linear-gradient(135deg, #7dd3fc, #2563eb)",
  "linear-gradient(135deg, #7ef2c8, #0ea5a0)",
  "linear-gradient(135deg, #f9a8d4, #8b5cf6)",
  "linear-gradient(135deg, #fdba74, #f43f5e)",
  "linear-gradient(135deg, #a78bfa, #4f46e5)",
  "linear-gradient(135deg, #67e8f9, #0ea5e9)",
  "linear-gradient(135deg, #f9a8d4, #ec4899)",
  "linear-gradient(135deg, #86efac, #22c55e)"
];

const beachPhotos = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524503033410-cd2e2c2d7176?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeProfiles() {
  const profiles = [];

  for (let i = 0; i < 100; i += 1) {
    const name = namePool[i % namePool.length];
    const age = 18 + ((i * 3) % 13);
    const city = cityPool[i % cityPool.length];
    const vibe = vibePool[(i * 2) % vibePool.length];
    const hobby = hobbyPool[(i * 5 + 1) % hobbyPool.length];
    const initials = name.slice(0, 2).toUpperCase();
    const color = colorThemes[i % colorThemes.length];
    const image = beachPhotos[i % beachPhotos.length];

    profiles.push({
      id: i + 1,
      name,
      age,
      city,
      vibe,
      hobby,
      bio: `Loves ${hobby}, has a ${vibe.toLowerCase()} vibe, and always knows how to make a room feel more fun. Looking for someone who enjoys good conversation and spontaneous adventures.`,
      initials,
      color,
      image
    });
  }

  return shuffle(profiles);
}

const state = {
  profiles: makeProfiles(),
  currentIndex: 0,
  liked: []
};

const cardStack = document.getElementById("cardStack");
const favoritesList = document.getElementById("favoritesList");
const likedCount = document.getElementById("likedCount");
const passBtn = document.getElementById("passBtn");
const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");

function renderFavorites() {
  likedCount.textContent = String(state.liked.length);

  if (state.liked.length === 0) {
    favoritesList.innerHTML = '<li class="empty-state">No picks yet. Swipe right on someone you like.</li>';
    return;
  }

  favoritesList.innerHTML = state.liked
    .map(
      (profile) => `
        <li class="favorite-item">
          <div class="favorite-avatar" style="background-image: linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.12)), url('${profile.image}'); background-size: cover; background-position: center;">${profile.initials}</div>
          <div>
            <p class="favorite-name">${profile.name}, ${profile.age}</p>
            <p class="favorite-meta">${profile.city} • ${profile.vibe}</p>
          </div>
        </li>
      `
    )
    .join("");
}

function renderCurrentProfile() {
  const visibleProfiles = state.profiles.slice(state.currentIndex, state.currentIndex + 3);

  if (visibleProfiles.length === 0) {
    cardStack.innerHTML = `
      <div class="profile-card" style="--card-gradient: linear-gradient(135deg, #7c5cff, #ff4d8d);">
        <div class="card-photo" style="background-image: url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80');"></div>
        <div class="profile-content">
          <div class="profile-meta">
            <h2 class="profile-name">Game Over</h2>
          </div>
          <p class="profile-city">You reviewed all 100 profiles.</p>
          <p class="profile-bio">You picked ${state.liked.length} favorite${state.liked.length === 1 ? "" : "s"}. Reset and try again.</p>
        </div>
      </div>
    `;
    return;
  }

  cardStack.innerHTML = visibleProfiles
    .map((profile, index) => {
      const offset = index * 14;
      const scale = 1 - index * 0.06;
      const rotation = (index - 1) * 4;

      return `
        <article
          class="profile-card"
          style="
            --card-gradient: ${profile.color};
            transform: translateY(${offset}px) scale(${scale}) rotate(${rotation}deg);
            z-index: ${visibleProfiles.length - index};
            opacity: ${index === 0 ? 1 : 0.9};
          "
          data-id="${profile.id}"
        >
          <div class="card-photo" style="background-image: url('${profile.image}');"></div>
          <div class="profile-content">
            <div class="avatar">${profile.initials}</div>
            <div class="profile-meta">
              <h2 class="profile-name">${profile.name}</h2>
              <span class="profile-age">${profile.age}</span>
            </div>
            <p class="profile-city">${profile.city}</p>
            <div class="traits">
              <span class="trait-pill">${profile.vibe}</span>
              <span class="trait-pill">${profile.hobby}</span>
            </div>
            <p class="profile-bio">${profile.bio}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function nextProfile(decision) {
  if (state.currentIndex >= state.profiles.length) {
    return;
  }

  const current = state.profiles[state.currentIndex];

  if (decision === "like") {
    state.liked.push(current);
  }

  state.currentIndex += 1;
  renderFavorites();
  renderCurrentProfile();
}

passBtn.addEventListener("click", () => nextProfile("pass"));
likeBtn.addEventListener("click", () => nextProfile("like"));

resetBtn.addEventListener("click", () => {
  state.profiles = makeProfiles();
  state.currentIndex = 0;
  state.liked = [];
  renderFavorites();
  renderCurrentProfile();
});

renderFavorites();
renderCurrentProfile();

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    nextProfile("pass");
  }

  if (event.key === "ArrowRight") {
    nextProfile("like");
  }
});

if (state.currentIndex >= state.profiles.length) {
  renderCurrentProfile();
}


