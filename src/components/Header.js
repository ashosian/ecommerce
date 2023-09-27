import React, { useState } from "react";


import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Input,
} from "@material-tailwind/react";

import { useFormik } from 'formik';



import {
  UserCircleIcon,
  ChevronDownIcon,
  LifebuoyIcon,
  PowerIcon,

} from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAlls } from "../features/userInfo";


const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const adminMenuItems = [
  {
    label: "Admin Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Product List",
    icon: UserCircleIcon,
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];




const Header = () => {

  const { userInfo } = useSelector((store) => store.userInfo);



  const dispatch = useDispatch();
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      anything: ''
    },
    onSubmit: (val, { resetForm }) => {
      nav(`/searchItems/${val.anything}`)
      resetForm();
    }

  })


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);


  return (


    <Navbar className=" p-2 px-7 mx-auto bg-black ">
      <div className=" flex justify-between text-white">
        <Typography
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          <NavLink to='/' replace> Home</NavLink>
        </Typography>




        <div className="flex items-center space-x-5">

          <form onSubmit={formik.handleSubmit}>

            <div className="box2 space-x-7 flex items-center">

              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  name='anything'
                  value={formik.values.anything}
                  onChange={formik.handleChange}
                  label="Search fruits"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-[400px]",
                  }}
                />


                <Button type='submit' size="sm" className="!absolute right-1 top-1 rounded">
                  Search
                </Button>


              </div> {/* search*/}



            </div>


          </form>


          <div className="space-x-5">


            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {userInfo === null && <NavLink to='/user/login'>Login</NavLink>}
          </div>



          {userInfo !== null && <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-blue-500 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              {(userInfo.isAdmin === true ? adminMenuItems : profileMenuItems).map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={() => {
                      switch (label) {
                        case 'Sign Out':
                          dispatch(clearAlls());
                          nav('/', { replace: true });
                          closeMenu();

                          break;

                        case 'Product List':

                          nav('/products/all');
                          closeMenu();
                          break;
                        case 'My Profile':
                          nav('/user/profile');
                          closeMenu();

                          break;
                        case 'Admin Profile':
                          nav('/user/allDetail');
                          closeMenu();
                          break;
                        default:
                          closeMenu();
                      }


                    }}
                    className={`flex items-center gap-2 rounded ${isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                      }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          }

        </div>







      </div>

    </Navbar>

  )
}

export default Header
