const all_able_actives = document.querySelectorAll('.able-active');
const packagePage = document.querySelector('.packagePage');

//removing all previous active passed in classes
function removeActive(className) {
  for (const el of all_able_actives) {
    if ( el.classList.contains(className)){
      continue
    } else {
      el.classList.remove('active');
    }
  }
}


function bringPackage() {
  packagePage.classList.toggle('active');
  removeActive('packagePage');

};

const brands = document.querySelector('.brands__main');
function bringBrands() {
  brands.classList.toggle('active');
  removeActive('brands__main');

};

const search = document.querySelector('.search__main');
function bringSearch() {
  search.classList.toggle('active');
  removeActive('search__main');

};

const company = document.querySelector('.company__main');
function bringCompany() {
  company.classList.toggle('active');
  removeActive('company__main');
  current_tab = 'company__main'
};

const carriers = document.querySelector('.carriers__main');
function bringCarriers() {
  carriers.classList.toggle('active');
  removeActive('carriers__main');
  current_tab = 'carriers__main'
};

const contact = document.querySelector('.contact__main')
function bringContact() {
  contact.classList.toggle('active');
  removeActive('contact__main');
  current_tab = 'contact__main';
}
