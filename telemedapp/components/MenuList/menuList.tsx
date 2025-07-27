import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";

const MenuList = ({
  linkTo,
  linkName,
  text,
  onSignOut,
}: {
  linkTo: string[];
  linkName: string[];
  text: React.ReactNode;
  onSignOut?: () => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (name: string, index: number) => {
    handleClose();
    if (name === "Sign Out" && onSignOut) {
      onSignOut(); // Call sign out when "Sign Out" is clicked
    } else {
      // Navigate to the specified route
      router.push(linkTo[index]);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {linkName.map((name, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(name, index)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuList;
