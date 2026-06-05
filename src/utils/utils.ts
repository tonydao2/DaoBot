import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';

const secretsClient = new SecretsManagerClient({
  region: process.env.AWS_REGION ?? 'us-east-1',
});

export const getSecretValue = async (
  secretName: string,
): Promise<string | undefined> => {
  const command = new GetSecretValueCommand({ SecretId: secretName });
  try {
    const response = await secretsClient.send(command);
    return response.SecretString;
  } catch (error) {
    console.error('Error fetching secret:', error);
    throw error;
  }
};

export const loadSecrets = async () => {
  // Load both secrets in parallel
  const secrets = await getSecretValue('DaoBot-Secrets');

  const {
    Token: token,
    ClientID: clientId,
    ClientSecret: clientSecret,
  } = JSON.parse(secrets ?? '{}');

  return {
    token,
    clientId,
    clientSecret,
  };
};
