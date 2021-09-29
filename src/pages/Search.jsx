import { useSelector } from "react-redux";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import SchoolIcon from "@material-ui/icons/School";
import {searchService} from '../services/searchService'
import {SearchList} from '../cmps/search/SearchList'
export const Search = () => {
  const [category, setCategory] = useState("Users");

  const searchText = useSelector((state) => state.uiModule.searchText);
  let listSearch = searchService.query(category, searchText);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };


  return (
    <div className="search animate__animated animate__fadeInLeft animate__faster">
      <div className="searchWrapper">
        <BottomNavigation
          className="btnNav"
          sx={{ width: 500 }}
          value={category}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Users"
            value="Users"
            icon={<PeopleAltIcon />}
          />
          <BottomNavigationAction
            label="Articles"
            value="Articles"
            icon={<DescriptionIcon />}
          />
          <BottomNavigationAction
            label="Courses"
            value="Courses"
            icon={<SchoolIcon />}
          />
        </BottomNavigation>
        <div className="">
          <SearchList category={category} listSearch={listSearch} />
        </div>
      </div>
    </div>
  );
};
