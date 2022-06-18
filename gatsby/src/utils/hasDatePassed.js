const hasDatePassed = (date) => {
  const today = new Date();

  console.log('today:', today);
  console.log('gig date:', date);

  return date.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
};

export default hasDatePassed;
