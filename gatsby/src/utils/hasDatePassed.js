const hasDatePassed = (date) => {
  const today = new Date();

  return date.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
};

export default hasDatePassed;
