'use strict';

const navigation = document.querySelector('.nav--ul');
const education = document.querySelector('.education');
const experience = document.querySelector('.experience');
const projects = document.querySelector('.projects');
const code = document.querySelector('.code--example');
const languages = document.querySelector('.languages');

navigation.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.textContent === 'Education') {
    education.scrollIntoView({ behavior: 'smooth' });
  } else if (e.target.textContent === 'Experience') {
    experience.scrollIntoView({ behavior: 'smooth' });
  } else if (e.target.textContent === 'Projects') {
    projects.scrollIntoView({ behavior: 'smooth' });
  } else if (e.target.textContent === 'Code Example') {
    code.scrollIntoView({ behavior: 'smooth' });
  } else if (e.target.textContent === 'Languages') {
    languages.scrollIntoView({ behavior: 'smooth' });
  }
});
