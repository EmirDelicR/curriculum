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

const toggleSkillView = () => {
  const skillOptionWrapper = document.getElementsByClassName('skill-option')[0];

  if (skillOptionWrapper.classList.contains('transform-active')) {
    skillOptionWrapper.classList.remove('transform-active');
    return;
  } else {
    skillOptionWrapper.classList.add('transform-active');
  }
};

export { lazyLoadPage, capitalize, lazyLoadImage, toggleSkillView };
