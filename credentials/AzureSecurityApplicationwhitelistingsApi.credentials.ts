import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecurityApplicationwhitelistingsApi implements ICredentialType {
        name = 'N8nDevAzureSecurityApplicationwhitelistingsApi';

        displayName = 'Azure Security Applicationwhitelistings API';

        icon: Icon = { light: 'file:../nodes/AzureSecurityApplicationwhitelistings/azure-security-applicationwhitelistings.png', dark: 'file:../nodes/AzureSecurityApplicationwhitelistings/azure-security-applicationwhitelistings.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Applicationwhitelistings API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
