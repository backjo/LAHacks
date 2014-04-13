module.exports = {
  db: process.env.MONGODB|| 'mongodb://localhost:27017/lahacks',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  localAuth: true,

  // mailgun: {
  //   login: process.env.MAILGUN_LOGIN || 'Your Mailgun SMTP Username',
  //   password: process.env.MAILGUN_PASSWORD || 'Your Mailgun SMTP Password'
  // },

  sendgrid: {
    user: process.env.SENDGRID_USER || 'kchan039',
    password: process.env.SENDGRID_PASSWORD || 'kc093093'
  },

  nyt: {
    key: process.env.NYT_KEY || 'Your New York Times API Key'
  },

  lastfm: {
    api_key: process.env.LASTFM_KEY || 'Your API Key',
    secret: process.env.LASTFM_SECRET || 'Your API Secret'
  },

  facebookAuth: true,
  facebook: {
    clientID: process.env.FACEBOOK_ID || '525999700842577',
    clientSecret: process.env.FACEBOOK_SECRET || '79e166238c4d1738c5afeedd6e9b6b36',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  githubAuth: false,
  github: {
    clientID: process.env.GITHUB_ID || 'Your Client ID',
    clientSecret: process.env.GITHUB_SECRET || 'Your Client Secret',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitterAuth: true,
  twitter: {
    consumerKey: process.env.TWITTER_KEY || '4ZtV9VHceQp3WKtKwZgLoxczC',
    consumerSecret: process.env.TWITTER_SECRET  || '1lMHodvLSLlTbibYSzOaY8Sih0NSviBrdXHbSCrBqFmxcIpRbY',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  googleAuth: true,
  google: {
    clientID: process.env.GOOGLE_ID || '81630051146-nmc5sjakll1ebj7bgn763tbr3nn63ifj.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'oT0hOgLBvVUbtldtPlRZvpDU',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  linkedinAuth: true,
  linkedin: {
    clientID: process.env.LINKEDIN_ID || '75su4tqs0y5ofe',
    clientSecret: process.env.LINKEDIN_SECRET || 'mdSVEx9pSSwZRNZs',
    callbackURL: '/auth/linkedin/callback',
    scope: ['r_basicprofile'],
    passReqToCallback: true
  },

  steam: {
    apiKey: process.env.STEAM_KEY || 'Your Steam API Key'
  },

  twilio: {
    sid: process.env.TWILIO_SID || 'Your Twilio SID',
    token: process.env.TWILIO_TOKEN || 'Your Twilio token'
  },

  clockwork: {
    apiKey: process.env.CLOCKWORK_KEY || 'Your Clockwork SMS API Key'
  },

  tumblr: {
    consumerKey: process.env.TUMBLR_KEY || 'Your Consumer Key',
    consumerSecret: process.env.TUMBLR_SECRET || 'Your Consumer Secret',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: process.env.FOURSQUARE_ID || 'Your Client ID',
    clientSecret: process.env.FOURSQUARE_SECRET || 'Your Client Secret',
    redirectUrl: process.env.FOURSQUARE_REDIRECT_URL || 'http://localhost:3000/auth/foursquare/callback'
  },

  venmo: {
    clientId: process.env.VENMO_ID || 'Your Venmo Client ID',
    clientSecret: process.env.VENMO_SECRET || 'Your Venmo Client Secret',
    redirectUrl: process.env.VENMO_REDIRECT_URL || 'http://localhost:3000/auth/venmo/callback'
  },

  paypal: {
    host: process.env.PAYPAL_HOST || 'api.sandbox.paypal.com',
    client_id: process.env.PAYPAL_ID || 'Your Client ID',
    client_secret: process.env.PAYPAL_SECRET || 'Your Client Secret',
    returnUrl: process.env.PAYPAL_RETURN_URL || 'http://localhost:3000/api/paypal/success',
    cancelUrl: process.env.PAYPAL_CANCEL_URL || 'http://localhost:3000/api/paypal/cancel'
  }
};
