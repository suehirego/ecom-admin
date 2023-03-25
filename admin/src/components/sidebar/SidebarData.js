import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
export const SidebarData = [
   {
      title: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
      cName: "nav-text",
   },
   {
      title: "Users",
      path: "/users",
      icon: <PeopleAltOutlinedIcon />,
      cName: "nav-text",
   },
   {
      title: "Products",
      path: "/products",
      icon: <Inventory2OutlinedIcon />,
      cName: "nav-text",
   },
   {
      title: "Orders",
      path: "/orders",
      icon: <DescriptionOutlinedIcon />,
      cName: "nav-text",
   },

]

