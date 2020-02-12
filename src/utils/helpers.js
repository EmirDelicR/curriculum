const lazyLoadPage = view => {
  return () => import(`@/views/${view}.vue`);
};

const lazyLoadImage = name => {
  return require(`@/assets/images/${name}`);
};

const capitalize = value => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const toggleView = name => {
  const wrapper = document.getElementsByClassName(name)[0];
  wrapper.classList.toggle('transform-active');
};

export { lazyLoadPage, capitalize, lazyLoadImage, toggleView };
