import { IconCalendar } from '../assets/Lesson2/svg/IconCalendar';
import { IconPlanning } from '../assets/Lesson2/svg/IconPlanning';
import { IconReminder } from '../assets/Lesson2/svg/IconReminder';

export const MenuLesson2 = [
  {
    name: 'Features',
    items: [
      {
        name: 'Todo List',
        icon: <IconPlanning />,
      },
      { name: 'Calendar', icon: <IconCalendar /> },
      { name: 'Reminders', icon: <IconReminder /> },
      { name: 'Planning', icon: <IconPlanning /> },
    ],
  },
  {
    name: 'Company',
    items: ['History', 'Our Team', 'Blog'],
  },
  {
    name: 'Careers',
    items: [],
  },
  {
    name: 'About',
    items: [],
  },
];

export const MenuAuthLesson2 = [
  {
    name: 'Login',
    items: [],
  },
  {
    name: 'Register',
    items: [],
  },
];
