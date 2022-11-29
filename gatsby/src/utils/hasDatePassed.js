const hasDatePassed = (date) => {
  const today = new Date();

  console.log('********************');
  console.log('today:', today);
  console.log('gig date:', date);
  console.log(
    date.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0)
      ? 'The gig date is in the past'
      : 'The gig date is in the future'
  );

  return date.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
};

export default hasDatePassed;
