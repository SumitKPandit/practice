(function () {
  renderPage();
  renderDogs();

  function renderPage() {
    let rendered = App.templates.index(window.language);
    $("#main").html(rendered);
    $("#languageSwitch").click(function () {
      DogPack.switchLanguage();
    });
  }

  function renderDogs() {
    let filteredDogs = DogPack.getFilteredDogs(DogPack.dogs),
      rendered = App.templates.dogs({
        dogs: DogPack.getPaginatedDogs(filteredDogs),
        language: window.language,
      });
    $("#theDogs").html(rendered);
    attachDogButtons();
    renderPages(filteredDogs);
    renderScore();
  }

  function renderScore() {
    let rendered = App.templates.score({
      dogs: DogPack.dogs,
      language: window.language,
    });
    $("#score").html(rendered);
    $("#score")
      .find("small")
      .click(function () {
        DogPack.clearDogs();
        window.location.href =
          "?" + Handlebars.helpers.getLanguageFilter(window.language.landId);
      });
  }

  function renderPages(dogs) {
    let rendered = App.templates.page({ dogs: dogs });
    $("#pagination").html(rendered);
  }

  function attachDogButtons() {
    $(".dog-button").click(function () {
      let id = $(this).closest(".dog-card").data("dog-id");
      DogPack.chooseDog(id);
      renderDogs();
    });

    $(".not-dog-button").click(function () {
      let id = $(this).closest(".dog-card").data("dog-id");
      DogPack.chooseNotDog(id);
      renderDogs();
    });
  }
})();
