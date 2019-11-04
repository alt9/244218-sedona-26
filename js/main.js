var form_wrapper = document.querySelector(".form-wrapper");
var form_show = document.querySelector(".form-show");
var arrival_date = form_wrapper.querySelector("[id=arrival-date]");
var departure_date = form_wrapper.querySelector("[id=departure-date]");
var old = form_wrapper.querySelector("[id=old]");

form_show.addEventListener("click", function (evt) {
    evt.preventDefault();
    form_wrapper.classList.toggle("form-wrapper-hide");
    form_wrapper.classList.toggle("form-wrapper-show");
    form_wrapper.classList.remove("form-wrapper-error");
});

form_wrapper.addEventListener("submit", function (evt) {
    if (!arrival_date.value || !departure_date.value || !old.value) {
    evt.preventDefault();
    document.classList.remove("form-wrapper-error");
    form_wrapper.offsetWidth = form_wrapper.offsetWidth;
    document.classList.add = ("form-wrapper-error");
  }
});
