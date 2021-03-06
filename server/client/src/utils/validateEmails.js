export default emails => {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => !re.test(email));

  if (invalidEmails.length) {
    if (invalidEmails.includes('')) {
      return 'Please remove any trailing commas or add another email address';
    }
    return ` These emails are invalid: ${invalidEmails}`;
  }
};
