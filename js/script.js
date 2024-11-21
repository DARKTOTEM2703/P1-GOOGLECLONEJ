document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const suggestions = [
  "aguacate",
  "banana",
  "cereza",
  "durazno",
  "escarola",
  "fresa",
  "granada",
  "higo",
  "iguana",
  "jícama",
  "kiwi",
  "limón",
  "mango",
  "naranja",
  "oliva",
  "papaya",
  "queso",
  "rábano",
  "sandía",
  "tomate",
  "uva",
  "vainilla",
  "waffle",
  "xoconostle",
  "yogur",
  "zapote",
];

document.getElementById("search-input").addEventListener("input", (event) => {
  const input = event.target.value.toLowerCase();
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().startsWith(input)
  );

  const suggestionsList = document.getElementById("suggestions");
  suggestionsList.innerHTML = "";

  filteredSuggestions.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = suggestion;
    suggestionsList.appendChild(li);
  });
});
