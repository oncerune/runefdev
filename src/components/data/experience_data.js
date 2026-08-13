import anduril from '../../assets/anduril.webp';
import fidelity from '../../assets/fidelity.webp';
import microsoft from '../../assets/microsoft.webp';
export const experience_data = {
  Fidelity: {
    logoURL: fidelity,
    'Software Engineer Intern': {
      location: 'Remote',
      dates: 'June 2020 - Aug 2020',
      description: [
        'Added new investment-action notifications with the mobile alerts team.',
        'Tested and demoed SMS alerts extending the existing push notification service.',
      ],
      badges: [
        ['https://www.jenkins.io/', 'jenkins'],
        ['https://spring.io/', 'spring'],
        ['https://www.ibm.com/cloud/urbancode', 'UrbanCode'],
      ],
    },
  },
  'Microsoft Azure': {
    logoURL: microsoft,
    'Software Engineer Intern': {
      location: 'Remote',
      dates: 'May 2021 - Aug 2021',
      description: [
        'Built a pipeline giving developers direct endpoint output for validation, with immediate feedback on security risks and syntax violations.',
        'Automated Swagger validation across GitHub and DevOps, speeding releases to the public-facing Azure SDK.',
      ],
      badges: [
        ['https://github.com/about', 'GitHub'],
        [
          'https://docs.microsoft.com/en-us/azure/devops/user-guide/what-is-azure-devops?view=azure-devops',
          'DevOps',
        ],
        ['https://nodejs.org/en/about/', 'Node'],
        [
          'https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet',
          '.NET',
        ],
        [
          'https://azure.microsoft.com/en-us/services/devops/pipelines/',
          'Pipelines',
        ],
      ],
    },
    'UI/UX Software Engineer': {
      location: 'Redmond WA',
      dates: 'Feb 2022 - Nov 2022',
      description: [
        'Drove the Azure Container Apps CLI from private beta to public release.',
        'Engineered the first Azure CLI end-to-end managed deployment command, demoed at Microsoft Build 2022.',
        'Maintained the Azure App Service CLI commands, serving 2M monthly active users.',
      ],
      badges: [
        ['https://github.com/Azure/azure-cli','Azure CLI'],
        ['https://www.python.org/about/','Python'],
        ['https://github.com/microsoft/knack','Knack'],
        ['https://azure.microsoft.com/en-us/products/container-apps', 'Container Apps'],
      ],
    },
    'Backend Software Engineer': {
      location: 'Redmond WA',
      dates: 'Nov 2022 - Oct 2024',
      description: [
        'Scaled Azure App Service Domains from one region to 36+, eliminating the single-region point of failure for 80,000+ customers.',
        'Led the database, background-job, and data-layer redesign behind it, across a four-phase plan covering fallback, concurrency, replication, and traffic management.',
        'Cut domain fraud by over 90% with new alerting and pre-purchase validation.',
        'Automated certificate infrastructure across 40+ regions, cutting sync time from hours to minutes.',
      ],
      badges: [
        ['https://learn.microsoft.com/en-us/azure/app-service/manage-custom-dns-buy-domain','App Service Domains'],
        ['https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet','.NET'],
        ['https://azure.microsoft.com/en-us/products/cosmos-db','CosmosDB (NoSQL)'],
        ['https://azure.microsoft.com/en-us/products/azure-sql/database','Azure SQL'],
        ['https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview','ARM'],
      ],
    },

  },
  'Anduril Industries': {
    logoURL: anduril,
    // Mark is solid black on transparent; inverting it in dark mode matches
    // Anduril's own light/dark icon variants.
    invertOnDark: true,
    'Software Engineer II': {
      location: 'Seattle WA',
      dates: 'Oct 2024 - Jun 2026',
      description: [
        'Built a self-serve simulation platform that replaced fragmented manual testing, giving teams comparable results and the baselines they use to catch regressions.',
        'Scaled it to hundreds of thousands of tests per run on Flyte, designing the orchestration state machine, CLI, Go bootstrappers, and containerization.',
        'Extended an internal Kubernetes platform serving ~500 engineers, sustaining 1,200 concurrent test environments across ~1,000 nodes.',
        'Enabled self-serve observability with reusable Terraform modules for per-cluster Datadog alerts.',
        'Built the billing and cost-prediction tooling Finance uses to charge back ~$1.6M/month in compute.',
        'Surfaced a topology-spread vs. bin-packing scheduling inefficiency worth ~$1.2M/year in realized savings.',
      ],
      badges: [
        ['https://go.dev/', 'Go'],
        ['https://kubernetes.io/', 'Kubernetes'],
        ['https://www.terraform.io/', 'Terraform'],
        ['https://helm.sh/', 'Helm'],
        ['https://flyte.org/', 'Flyte'],
        ['https://www.datadoghq.com/', 'Datadog'],
      ],
    },
  },
};
