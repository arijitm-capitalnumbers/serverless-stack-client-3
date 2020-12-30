const config = {
  STRIPE_KEY: "pk_test_07bQuZVBv3jDfvV5DsVVaVUQ",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-aoo-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://dh88xdhq17.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_gNI4SmLwE",
    APP_CLIENT_ID: "4ov40ko0g3gof56p2kdptvhqs3",
    IDENTITY_POOL_ID: "us-east-1:6d6fa5e2-0bec-4eca-920b-3c7d4484b735"
  },
};

export default config;
