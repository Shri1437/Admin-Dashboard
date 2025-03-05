import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  //ANALYTICS
  {
    id: 1,
    label: 'ANALYTICS',
    isTitle: true,
    systemNameList: ["DashboardRead"]
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'bx-home-circle',
    link: '/default',
    systemNameList: ["DashboardRead"]
  },
  //Support
  // {
  //   id: 3,
  //   label: 'Doctors',
  //   isTitle: true,
  //   systemNameList: [
  //     "ComplaintTypeRead",
  //     "DeptProbRead",
  //     "ComplaintRead"]
  // },
  // {
  //   id: 4,
  //   label: 'Complaint Type',
  //   icon: 'bx bx-edit-alt',
  //   link: '/complaint-type',
  //   systemNameList: ["ComplaintTypeRead"],
  // },
  // {
  //   id: 6,
  //   label: 'Department Problem',
  //   icon: 'bx bx-group',
  //   link: '/department-problem',
  //   systemNameList: ["DeptProbRead"],

  // },
  // {
  //   id: 5,
  //   label: 'Complaints',
  //   icon: 'bx bx-file',
  //   link: '/complaints',
  //   systemNameList: ["ComplaintRead"],

  // },



  // {
  //   id: 9,
  //   label: 'User Roles',
  //   icon: 'bx bx-user',
  //   link: "/user-management/user-role",
  //   systemNameList: ["Userread"]

  // },
  // {
  //   id: 9,
  //   label: 'Reports',
  //   icon: 'bx bx-bar-chart',
  //   link: "/user-management/reports",
  //   systemNameList: ["Userread"]

  // },


  //Place List
  {
    id: 10,
    label: 'Places',
    isTitle: true,
  },
  {
    id: 11,
    label: 'Places List',
    icon: 'bx bx-map',
    link: '/places-management',

  },

   //MANAGEMENT
   {
    id: 7,
    label: 'User',
    isTitle: true,
  },
  {
    id: 8,
    label: 'Users',
    icon: 'bx bx-user-plus',
    link: '/user-management',

  },


  //Appointment
  // {
  //   id: 10,
  //   label: 'Appointment',
  //   isTitle: true,
  // },
  // {
  //   id: 11,
  //   label: 'Apointment',
  //   icon: 'bx bx-user-plus',
  //   link: '/apoint-management',

  // }
];




