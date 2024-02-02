const appConfig = {
    port: process.env.PORT,
    timeZone: process.env.TIME_ZONE,
    secret: process.env.SECRET,
    expireInSession: process.env.EXPIRE_IN_SESSION,
    emailService: process.env.EMAIL_SERVICE,
    emailGmailUser: process.env.EMAIL_GMAIL_USER,
    emailGmailPass: process.env.EMAIL_GMAIL_PASS,
};

export default appConfig;
