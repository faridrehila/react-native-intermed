export const PAGINATION_LIMIT = 15;

export const BREAKPOINTS = {
  BREAKPOINT_SM: 700,
};

export const MEDIA_QUERIES = {
  MEDIA_QUERY_WEB_SM: {
    platform: 'web',
    maxWidth: BREAKPOINTS.BREAKPOINT_SM - 1,
  },
  MEDIA_QUERY_WEB_LG: {platform: 'web', minWidth: BREAKPOINTS.BREAKPOINT_SM},
};

export const COLORS = {
  COLOR_MAINRED: '#EF4836',
  COLOR_MAINBLUE: '#173753',

  COLOR_WHITE: '#ffffff',
  COLOR_SHADE1: '#f6f8f9',
  COLOR_SHADE3: '#d8d8d9',
  COLOR_BORDER_TILE: '#CED0CE',
};

export const TYPOGRAPHY = {
  INTERMED_TITLE_MOBILE: {
    color: COLORS.COLOR_MAINRED,
    fontSize: 24,
    letterSpacing: -0.45,
    fontWeight: '400',
  },
  MENU_TAG: {
    color: COLORS.COLOR_MAINBLUE,
    fontSize: 17,
    letterSpacing: -0.45,
    fontWeight: '100',
  },
  FEED_TITLE: {
    color: COLORS.COLOR_MAINBLUE,
    fontSize: 20,
    letterSpacing: -0.45,
    lineHeight: 27,
    fontWeight: 'bold',
  },
  FEED_SOURCE: {
    color: COLORS.COLOR_MAINBLUE,
    fontSize: 19,
    letterSpacing: -0.45,
    fontWeight: 'bold',
  },
  PARA_P2: {
    color: COLORS.COLOR_SHADE4,
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: 0,
  },
  PARA_P8: {
    color: COLORS.COLOR_MAINBLUE,
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.25,
    fontWeight: '400',
  },
};

export const WEB_SIZES = {
  WEB_CONTENT_CONTAINER_MAX_WIDTH: 960,
  WEB_CALENDAR_MAX_WIDTH: 495,
  WEB_CALENDAR_DRAWER_MAX_WIDTH: 375,
  WEB_CALENDAR_DRAWER_MIN_WIDTH: 280,
};

export const LOGO_INTERMED = {
  uri: '../../public/images/logo/logo_intermed_website.jpg',
};

export default {
  ...COLORS,
  ...TYPOGRAPHY,
  ...WEB_SIZES,
  ...BREAKPOINTS,
  ...MEDIA_QUERIES,
  LOGO_INTERMED,
  PAGINATION_LIMIT,
};
