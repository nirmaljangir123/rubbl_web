import PersonIcon from "@mui/icons-material/Person";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
export const CartData = [
  {
    id: 0,
    count: "10/15",
    jobs: "Drivers",
    userpic: <PersonIcon />,
    status: "Active Drivers",
    styling: "bg-gray-100 shadow-2xl shadow-blue-700/50",
    hoverstyling: "hover:bg-black hover:text-white",
    // hovertextstyle: "hover:text-white",
    userpicstyle: "bg-blue-200  p-2 rounded-full",
  },
  {
    id: 1,
    count: "03",
    jobs: "Jobs",
    userpic: <HandshakeIcon />,
    status: "Active Jobs",
    styling: "bg-gray-100 shadow-2xl shadow-blue-700/50",
    hoverstyling: "hover:bg-black hover:text-white",
    // hovertextstyle: "hover:text-white hover:text-white",
    userpicstyle: "bg-yellow-200 p-2 rounded-full",
  },
  {
    id: 2,
    count: "02/03",
    jobs: "Loads",
    userpic: <FireTruckIcon />,
    status: "Completed Deliveries",
    styling: "bg-gray-100 shadow-2xl shadow-blue-700/50 ",
    hoverstyling: "hover:bg-black hover:text-white",
    // hovertextstyle: "hover:text-white",
    userpicstyle: "bg-red-200  p-2 rounded-full",
  },
  {
    id: 3,
    count: "01",
    jobs: "In Transit",
    userpic: <LocalShippingIcon />,
    status: "Active Jobs",
    styling: "bg-gray-100 shadow-2xl shadow-blue-700/50",
    hoverstyling: "hover:bg-black hover:text-white",
    // hovertextstyle: "hover:text-white",
    userpicstyle: "bg-green-200  p-2 rounded-full",
  },
];
