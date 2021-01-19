const dev = {
  STRIPE_KEY: "pk_test_07bQuZVBv3jDfvV5DsVVaVUQ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1r8zgsjv4mgv1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ptcztg7710.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_p0RICiR0I",
    APP_CLIENT_ID: "ulq0f5vmjlffmohn1si3mugik",
    IDENTITY_POOL_ID: "us-east-1:c48898a8-4ec3-4f7c-b778-61bc5a0a697f"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_07bQuZVBv3jDfvV5DsVVaVUQ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-aojay7x8kzwg"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dh88xdhq17.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_3XmAyvYDk",
    APP_CLIENT_ID: "646iao4o1q8kjojv5li2f1ueqq",
    IDENTITY_POOL_ID: "us-east-1:1ab3fdfa-57d7-40c0-b935-5a18eab7a637"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;