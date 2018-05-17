window.addEventListener("load", function(event) {

  // set .tab active
  document.querySelectorAll('.tab').forEach( (item, index) => {
    item.addEventListener('click', function(event) {
        document.querySelectorAll('.tab').forEach( (item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');
    });
  });

  // set .welfare__item active
  document.querySelectorAll('.welfare__item').forEach( (item, index) => {
    item.addEventListener('click', function(event) {
        document.querySelectorAll('.welfare__item').forEach( (item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');
    });
  });

  // set .welfare__content__item active
  document.querySelectorAll('.welfare__content__item').forEach( (item, index) => {
    item.addEventListener('click', function(event) {
        document.querySelectorAll('.welfare__content__item').forEach( (item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');
    });
  });

});
