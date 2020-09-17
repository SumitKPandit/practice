(function () {
  renderPage();
  renderDogs();

  function renderPage() {
    let template = $("#index-template").html(),
      compiled = Handlebars.compile(template),
      rendered = compiled(window.language);
    $("#main").html(rendered);
    $("#languageSwitch").click(function () {
      DogPack.switchLanguage();
    });
  }

  function renderDogs() {
    let template = $("#dogs-template").html(),
      compiled = Handlebars.compile(template),
      filteredDogs = DogPack.getFilteredDogs(DogPack.dogs),
      rendered = compiled({
        dogs: DogPack.getPaginatedDogs(filteredDogs),
        language: window.language,
      });
    $("#theDogs").html(rendered);
    attachDogButtons();
    renderPages(filteredDogs);
    renderScore();
  }

  function renderScore() {
    let template = $("#score-template").html(),
      compiled = Handlebars.compile(template),
      rendered = compiled({
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
    let template = $("#page-template").html(),
      compiled = Handlebars.compile(template),
      rendered = compiled({ dogs: dogs });
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
