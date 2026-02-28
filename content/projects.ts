import type { Project } from "@/content/project";

export const projects: Project[] = [
  {
    title: "Shopify Order Webhook Automation System",
    description:
      "Designed and implemented a production-grade webhook processing system using Laravel queues to handle Shopify order events at scale. Transformed payloads and integrated securely with Marketing Cloud API using environment-based credentials and retry logic.",

    impact: [
      "Reduced manual order processing time by ~60%",
      "Improved event reliability with structured background job handling",
      "Implemented fault-tolerant retry and logging mechanism",
    ],

    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "Shopify",
      "WordPress",
      "Linux",
      "Apache",
      "React",
    ],

    image: "/images/shopify-webhook.png",
  },

  {
    title: "Abandoned Cart Processing System",
    description:
      "Engineered a scalable abandoned cart automation pipeline using Shopify REST APIs with recursive pagination and background job dispatching for asynchronous processing.",

    impact: [
      "Automated cart recovery workflow",
      "Improved API efficiency with optimized pagination strategy",
      "Implemented structured logging for operational visibility",
    ],

    tech: ["Laravel", "Shopify API", "Queue System", "REST APIs"],

    image: "/images/abandoned-cart.png",
  },

  {
    title: "Laravel Production Deployment Setup",
    description:
      "Deployed and stabilized Laravel applications on Ubuntu servers by configuring Apache virtual hosts, secure environment variables, and resolving critical 500-level production errors.",

    impact: [
      "Resolved 500+ deployment-related issues",
      "Reduced production downtime through structured logging and validation checks",
      "Improved deployment reliability across environments",
    ],

    tech: ["Laravel", "Apache", "Linux", "Server Deployment"],

    image: "/images/server-deployment.png",
  },

  {
    title: "WordPress Custom Module & Interactive Slider System",
    description:
      "Built a modular WordPress system with dynamic subcategory navigation and an interactive Swiper.js testimonial carousel aligned with design specifications.",

    impact: [
      "Improved mobile performance by reducing DOM re-render issues",
      "Enhanced content flexibility for non-technical admin users",
      "Optimized front-end asset loading for better rendering performance",
    ],

    tech: ["WordPress", "Custom PHP Hooks", "Swiper.js", "AJAX", "Bootstrap", "Performance Optimization"],

    image: "/images/server-deployment.png",
  },
];
