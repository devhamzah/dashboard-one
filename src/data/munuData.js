import {
  ContactsOutlined,
  HomeOutlined,
  PeopleOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlined,
  TimelineOutlined,
  MapOutlined,
} from "@mui/icons-material";

export const menuData = [
  {
    id: 1,
    title: "",
    links: [
      {
        id: 1,
        icon: <HomeOutlined />,
        lable: "Dashboard",
        to: "/",
      },
    ],
  },
  {
    id: 2,
    title: "data",
    links: [
      {
        id: 2,
        icon: <PeopleOutlined />,
        lable: "Manage Team",
        to: "/team",
      },
      {
        id: 3,
        icon: <ContactsOutlined />,
        lable: "Contacts Information",
        to: "/contact",
      },
      {
        id: 4,
        icon: <ReceiptOutlined />,
        lable: "Invoices Balaences",
        to: "/invoices",
      },
    ],
  },
  {
    id: 3,
    title: "Pages",
    links: [
      {
        id: 3,
        icon: <PersonOutlined/>,
        lable: "Profile Form",
        to: "/form",
      },
      {
        id: 4,
        icon: <CalendarTodayOutlined/>,
        lable: "Calendar",
        to: "/calendar",
      },
      {
        id: 5,
        icon: <HelpOutlineOutlined/>,
        lable: "FAQ page",
        to: "/faq",
      },
    ],
  },
  {
    id:4,
    title:"Charts",
    links:[
        {
            id:5,
            icon:<BarChartOutlined/>,
            lable:"Bar Chart",
            to:"/bar"
        },
        {
            id:6,
            icon:<PieChartOutlined/>,
            lable:"Pie Chart",
            to:"/pie"
        },
        {
            id:7,
            icon:<TimelineOutlined/>,
            lable:"Line Chart",
            to:"/line"
        },
        {
            id:8,
            icon:<MapOutlined/>,
            lable:"Geography Chart",
            to:"/geography"
        },
    ]
  }
];
