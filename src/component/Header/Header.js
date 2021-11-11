import { Drawer } from "@mui/material";
import React, { useState } from "react";
import DrawerContainer from "../DrawerContainer/DrawerContainer";
import Navigation from "./../Navigation/Navigation";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Navigation setDrawerOpen={setDrawerOpen} />

      {/* navigation drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
          <DrawerContainer setDrawerOpen={setDrawerOpen}/>
      </Drawer>
    </div>
  );
};

export default Header;
