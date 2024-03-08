import { AiOutlineGift } from 'react-icons/ai';
import { BiBadgeCheck } from 'react-icons/bi';
import { BsGraphUpArrow, BsLaptop } from 'react-icons/bs';
import { CgMathPercent } from 'react-icons/cg';
import { CiBadgeDollar } from 'react-icons/ci';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import {
  HiAcademicCap,
  HiAdjustments,
  HiBriefcase,
  HiChartBar,
  HiCurrencyDollar,
  HiFilm,
  HiGlobe,
  HiHome,
  HiLibrary,
  HiPlus,
  HiShoppingBag,
  HiTruck,
  HiUserCircle,
} from 'react-icons/hi';
import {
  MdMiscellaneousServices,
  MdOutlineElderlyWoman,
  MdPrecisionManufacturing,
} from 'react-icons/md';

export const categories = [
  {
    id: 1,
    category: 'Food',
    key: 'food',
    description:
      'Expenses related to groceries, dining out, or food delivery services',
    Icon: HiShoppingBag,
    className: 'bg-teal-500 text-teal-500',
  },
  {
    id: 2,
    category: 'Entertainment',
    key: 'entertainment',
    description:
      'Expenses related to activities or events for enjoyment or leisure, such as concerts, movies, or amusement parks',
    Icon: HiFilm,
    className: 'bg-yellow-500 text-yellow-500',
  },
  {
    id: 3,
    category: 'Housing',
    key: 'housing',
    description:
      'Expenses related to housing, such as rent or mortgage payments, property taxes, or home insurance',
    Icon: HiHome,
    className: 'bg-orange-500 text-orange-500',
  },
  {
    id: 4,
    category: 'Transportation',
    key: 'transportation',
    description:
      'Expenses related to transportation, such as gas, maintenance, or public transportation fees',
    Icon: HiTruck,
    className: 'bg-indigo-500 text-indigo-500',
  },
  {
    id: 5,
    category: 'Healthcare',
    key: 'healthcare',
    description:
      'Expenses related to healthcare, such as doctor visits, prescriptions, or health insurance premiums',
    Icon: HiPlus,
    className: 'bg-green-500 text-green-500',
  },
  {
    id: 6,
    category: 'Travel',
    key: 'travel',
    description:
      'Expenses related to travel, such as airfare, lodging, or rental cars',
    Icon: HiGlobe,
    className: 'bg-purple-500 text-purple-500',
  },
  {
    id: 7,
    category: 'Education',
    key: 'education',
    description:
      'Expenses related to education, such as tuition, books, or school supplies',
    Icon: HiAcademicCap,
    className: 'bg-emerald-500 text-emerald-500',
  },
  {
    id: 8,
    category: 'Personal',
    key: 'personal',
    description:
      'Expenses related to personal grooming, hygiene and purchases.',
    Icon: HiUserCircle,
    className: 'bg-pink-300 text-pink-300',
  },
  {
    id: 9,
    category: 'Insurance',
    key: 'insurance',
    description:
      'Expenses related to insurance, such as car insurance, health insurance, or life insurance',
    Icon: HiCurrencyDollar,
    className: 'bg-sky-500 text-sky-500',
  },
  {
    id: 10,
    category: 'Savings',
    key: 'savings',
    description:
      'Expenses related to savings, such as contributions to a savings account or retirement account',
    Icon: HiLibrary,
    className: 'bg-cyan-500 text-cyan-500',
  },
  {
    id: 11,
    category: 'Investments',
    key: 'investments',
    description:
      'Expenses related to investments, such as contributions to a 401(k) or IRA',
    Icon: HiChartBar,
    className: 'bg-sky-500 text-sky-500',
  },
  {
    id: 12,
    category: 'Utilities',
    key: 'utilities',
    description:
      'Expenses related to utilities, such as electricity, gas, or water',
    Icon: HiAdjustments,
    className: 'bg-red-500 text-red-500',
  },
  {
    id: 13,
    category: 'Business',
    key: 'business',
    description:
      'Expenses related to running a business, such as rent, utilities, or employee salaries',
    Icon: HiBriefcase,
    className: 'bg-blue-600 text-blue-600',
  },
  {
    id: 15,
    category: 'Other',
    key: 'other',
    description: 'Expenses that do not fit into any other category',
    Icon: MdMiscellaneousServices,
    className: 'bg-red-500 text-red-500',
  },
];

export const incomeCategories = [
  {
    id: 1,
    Icon: CiBadgeDollar,
    key: 'salary',
    category: 'Salary',
    className: 'bg-emerald-500 text-emerald-500',
    description: 'Regular income earned from employment.',
  },
  {
    id: 2,
    Icon: BsLaptop,
    key: 'freelance',
    category: 'Freelance/Contract Work',
    className: 'bg-lime-500 text-lime-500',
    description: 'Income earned from freelance projects or contract work.',
  },
  {
    id: 3,
    Icon: BsGraphUpArrow,
    key: 'investments',
    category: 'Investments',
    className: 'bg-teal-500 text-teal-500',
    description:
      'Income generated from investments such as stocks, bonds, or real estate.',
  },
  {
    id: 4,
    Icon: HiOutlineHomeModern,
    key: 'rental',
    category: 'Rental Income',
    className: 'bg-cyan-500 text-cyan-500',
    description: 'Income received from renting out properties or assets.',
  },
  {
    id: 5,
    Icon: HiBriefcase,
    key: 'business',
    category: 'Business Income',
    className: 'bg-blue-500 text-blue-500',
    description: 'Income generated from a business or self-employment.',
  },
  {
    id: 6,
    Icon: CgMathPercent,
    key: 'interest',
    className: 'bg-sky-500 text-sky-500',
    category: 'Interest/Dividends',
    description:
      'Income earned from interest on savings accounts or dividends from investments.',
  },
  {
    id: 7,
    Icon: MdOutlineElderlyWoman,
    key: 'pension',
    category: 'Pension/Social Security',
    className: 'bg-amber-500 text-amber-500',
    description:
      'Income received from retirement pensions or government social security programs.',
  },
  {
    id: 8,
    Icon: AiOutlineGift,
    key: 'gift',
    category: 'Gifts/Inheritance',
    className: 'bg-green-500 text-green-500',
    description:
      'Income received as gifts or inheritance from family or friends.',
  },
  {
    id: 9,
    Icon: BiBadgeCheck,
    key: 'royalties',
    category: 'Royalties',
    className: 'bg-indigo-500 text-indigo-500',
    description:
      'Income earned from the use of intellectual property, such as copyrights or patents.',
  },
  {
    id: 10,
    Icon: MdPrecisionManufacturing,
    key: 'sidehustle',
    category: 'Side Hustle/Part-time Work',
    className: 'bg-violet-500 text-violet-500',
    description: 'Income earned from part-time jobs or side businesses.',
  },
  {
    id: 11,
    Icon: MdMiscellaneousServices,
    key: 'other',
    category: 'Other',
    className: 'bg-red-500 text-red-500',
    description:
      'A general category to cover any income source that does not fit into the predefined categories.',
  },
];
