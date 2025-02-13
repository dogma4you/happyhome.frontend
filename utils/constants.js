export const AUTH_VIEW = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  VERIFY_YOUR_EMAIL: "VERIFY_YOUR_EMAIL",
  RESET_PASSWORD: "RESET_PASSWORD",
  CONGRATS: "CONGRATS",
};

export const GET_AN_OFFER_VIEW = {
  GET_STARTED: "GET_STARTED",
  PROPERTY_TYPE: "PROPERTY_TYPE",
  HOME_TYPE: "HOME_TYPE",
  HOME_BUILT_INFO: "HOME_BUILT_INFO",
  HOME_BUILT_DETAILS: "HOME_BUILT_DETAILS",
  CONDITION_OF_YOUR_PROPERTY: "CONDITION_OF_YOUR_PROPERTY",
  HOME_RATE: "HOME_RATE",
  UPLOADING_PICTURES: "UPLOADING_PICTURES",
  UPLOAD_IMAGES: "UPLOAD_IMAGES",
  UPLOAD_DOCUMENTS: "UPLOAD_DOCUMENTS",
  ACCEPT_YOUR_OFFER: "ACCEPT_YOUR_OFFER",
};

export const SELLER_TYPES = {
  HOMEOWNER: 1,
  REAL_ESTATE_AGENT: 2,
  WHOLESALER: 3,
};

export const PROPERTY_TYPE = {
  HOME: 1,
  MULTI_FAMILY: 2,
};

export const HOME_TYPE = {
  DETACHED: 1,
  TOWNHOUSE_CONDO: 2,
  MULTI_FAMILY: 3,
};

export const NOTIFICATIONS_TABS = {
  ALL: "ALL",
  UNREAD: "UNREAD",
};

export const SETTINGS_TABS = {
  PERSONAL_INFORMATION: "PERSONAL_INFORMATION",
  ACCOUNT_MANAGEMENT: "ACCOUNT_MANAGEMENT",
};

export const EDIT_TYPE = {
  NAME: "NAME",
  EMAIL: "EMAIL",
  PHONE: "PHONE",
  PASSWORD: "PASSWORD",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
};

export const FIND_HOME_FILTER_TYPE = {
  ALL_LISTINGS: "ALL_LISTINGS",
  WITHIN_MAP_AREA: "WITHIN_MAP_AREA",
};

export const FIND_HOME_FILTER_PROPERTY_STATUS = {
  ALL: 0,
  LOCKED: 1,
  UNLOCKED: 2,
};

export const FORGOT_PASSWORD_VIEWS = {
  CHECK_EMAIL_VIEW: "CHECK_EMAIL_VIEW",
  RESET_PASSWORD_VIEW: "RESET_PASSWORD_VIEW",
  CONGRATS_VIEW: "CONGRATS_VIEW",
};

export const REGISTER_VIEWS = {
  CHECK_EMAIL_VIEW: "CHECK_EMAIL_VIEW",
  CONGRATS_VIEW: "CONGRATS_VIEW",
};

export const HEATING_OPTIONS = {
  NONE: 0,
  GAS: 1,
  ELECTRIC: 2,
  BASEBOARD: 3,
  OTHER: 4,
};

export const AIR_CONDITIONING_OPTIONS = {
  NONE: 0,
  CENTRAL_AIR: 1,
  WINDOW_UNIT: 2,
  OTHER: 3,
};

export const WATER_SUPPLY_OPTIONS = {
  NONE: 0,
  MUNICIPAL_SUPPLY: 1,
  WELL: 2,
};

export const SEWER_OPTIONS = {
  NONE: 0,
  MUNICIPAL_WASTE: 1,
  SEPTIC: 2,
};

export const ELECTRIC_PANEL_OPTIONS = {
  NONE: 0,
  AMP_100: 1,
  AMP_200: 2,
  OTHER: 3,
};

export const EXTERIOR_TYPE_OPTIONS = {
  VINYL: 1,
  ALUMINUM: 2,
  BRICK: 3,
  CEDAR: 4,
  OTHER: 5,
};

export const HOA_TYPE = {
  MONTLY: 1,
  ANNUAL: 2,
};

export const PROOF_OF_FUNDS = {
  PENDING: 1,
  ERROR: 2,
  SUCCESS: 3,
  UPDATE: 4,
};

export const PROOF_OF_FOUND_CONTENT = {
  [PROOF_OF_FUNDS.PENDING]: {
    title: "Proof of funds",
    description: "The review of your documents is in process.",
  },
  [PROOF_OF_FUNDS.ERROR]: {
    title: "Proof of funds",
    description: "In order to buy contracts, please upload proof of funds.",
  },
  [PROOF_OF_FUNDS.SUCCESS]: {
    title: "Proof of funds",
    description: "Your documents are compliant.",
  },
  [PROOF_OF_FUNDS.UPDATE]: {
    title: "Update Proof of funds",
    description: "In order to buy contracts, please update proof of funds.",
  },
  not_uploaded: {
    title: "Proof of funds",
    description: "In order to buy contracts, please upload proof of funds.",
  },
};

export const DELETE_ACCOUNT_MODAL = {
  FIRST_PAGE: "FIRST_PAGE",
  VERIFY_YOUR_EMAIL: "VERIFY_YOUR_EMAIL",
  ACCOUNT_DELETED: "ACCOUNT_DELETED",
};

export const PURCHASE_BALANCE_MODAL = {
  AMOUNT_PAGE: "AMOUNT_PAGE",
  CONFIRMATION: "CONFIRMATION",
};

export const TRANSACTIONS = {
  PENDING: 1,
  COMPLETED: 2,
  REJECT: 3,
};

export const TRANSACTIONS_TYPE = {
  BALANCE_FILL: 1,
  CREDITS_FILL: 2,
  CREDIT_FILL_BY_ADMIN: 3,
  BALANCE_FILL_BY_ADMIN: 4,
};

export const FIND_HOME_MEASUREMENT = {
  MILE: "mile",
  KM: "km",
};

export const FIND_HOME_FILTER_PRICE_TYPE = {
  LOW_TO_HIGH: 1,
  HIGHT_TO_LOW: 2,
};
