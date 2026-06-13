import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSecurityApplicationwhitelistings implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Security Applicationwhitelistings',
                name: 'N8nDevAzureSecurityApplicationwhitelistings',
                icon: { light: 'file:./azure-security-applicationwhitelistings.png', dark: 'file:./azure-security-applicationwhitelistings.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Security Center API specification for Microsoft.Security resource provider.',
                defaults: { name: 'Azure Security Applicationwhitelistings' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSecurityApplicationwhitelistingsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
