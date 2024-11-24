import { AdminType, DashboardConfig } from './types';

export const dashboardConfigs: Record<AdminType, DashboardConfig> = {
  masterSuperAdmin: {
    type: 'masterSuperAdmin',
    sidebarItems: [
      {
        id: 'overview',
        icon: '/icons/overview.svg',
        label: "Vue d'ensemble",
        path: '/overview'
      },
      {
        id: 'admins',
        icon: '/icons/admins.svg',
        label: 'Gestion des Administrateurs',
        path: '/admins'
      },
      {
        id: 'companies',
        icon: '/icons/companies.svg',
        label: 'Gestion des Entreprises',
        path: '/companies'
      }
    ],
    allowedRoutes: ['/overview', '/admins', '/companies'],
    permissions: ['all']
  },
  superAdmin: {
    type: 'superAdmin',
    sidebarItems: [
      {
        id: 'dashboard',
        icon: '/icons/dashboard.svg',
        label: 'Tableau de Bord',
        path: '/dashboard'
      },
      {
        id: 'staff',
        icon: '/icons/staff.svg',
        label: 'Gestion du Personnel',
        path: '/staff'
      }
    ],
    allowedRoutes: ['/dashboard', '/staff'],
    permissions: ['manage_staff', 'view_reports']
  },
  secretary: {
    type: 'secretary',
    sidebarItems: [
      {
        id: 'daily',
        icon: '/icons/daily.svg',
        label: 'Aperçu Quotidien',
        path: '/daily'
      },
      {
        id: 'orders',
        icon: '/icons/orders.svg',
        label: 'Gestion des Commandes',
        path: '/orders'
      }
    ],
    allowedRoutes: ['/daily', '/orders'],
    permissions: ['manage_orders']
  },
  deliveryPerson: {
    type: 'deliveryPerson',
    sidebarItems: [
      {
        id: 'deliveries',
        icon: '/icons/deliveries.svg',
        label: 'Mes Livraisons',
        path: '/deliveries'
      },
      {
        id: 'navigation',
        icon: '/icons/navigation.svg',
        label: 'Navigation',
        path: '/navigation'
      }
    ],
    allowedRoutes: ['/deliveries', '/navigation'],
    permissions: ['view_deliveries']
  },
  customerService: {
    type: 'customerService',
    sidebarItems: [
      {
        id: 'tickets',
        icon: '/icons/tickets.svg',
        label: 'Tickets Support',
        path: '/tickets'
      },
      {
        id: 'clients',
        icon: '/icons/clients.svg',
        label: 'Base Clients',
        path: '/clients'
      }
    ],
    allowedRoutes: ['/tickets', '/clients'],
    permissions: ['manage_tickets']
  },
  supervisor: {
    type: 'supervisor',
    sidebarItems: [
      {
        id: 'performance',
        icon: '/icons/performance.svg',
        label: 'Performance Équipe',
        path: '/performance'
      },
      {
        id: 'team',
        icon: '/icons/team.svg',
        label: 'Gestion Équipe',
        path: '/team'
      }
    ],
    allowedRoutes: ['/performance', '/team'],
    permissions: ['manage_team']
  }
};