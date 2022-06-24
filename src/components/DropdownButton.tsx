import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { TailwindColors } from 'config/tailwindConstants';
import Button from './Button';

interface Props {
  className?: string;
  label: string;
  id?: string;
  options?: string[] | React.ReactNode[];
  styles?: Record<string, string> | Record<string, Record<string, string>>;
}

const DropdownButton: React.FC<Props> = ({
  className = '',
  label = '',
  id = '',
  styles = {},
  options,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dropdownOptions, setDropdownOptions] =
    useState<{ content: React.ReactNode | string; uuid: string }[]>();

  useEffect(() => {
    if (!options) {
      return;
    }

    setDropdownOptions(
      options?.map?.((option) => ({ content: option, uuid: uuidv4() }))
    );
  }, [options]);

  return (
    <div className={className}>
      <Button
        onClickHandler={(event: React.MouseEvent<HTMLElement>) =>
          setAnchorEl(event.currentTarget)
        }
        id={id}
        outline
        content={
          <div className="flex items-center justify-center md:pl-10 md:pr-8">
            <div>{label}</div>
            <div className="text-2xl">
              <MdArrowDropDown />
            </div>
          </div>
        }
        active={Boolean(anchorEl)}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        id={id}
        MenuListProps={{
          'aria-labelledby': id,
        }}
        onClose={() => setAnchorEl(null)}
        sx={{
          marginTop: '5px',
          '& .MuiMenuItem-root': {
            fontSize: '.9rem',
            color: TailwindColors.Tertiary,
            padding: '0',
            '&:active': {
              backgroundColor: alpha(TailwindColors.Secondary, 0.7),
              color: '#fff',
            },
          },
          ...styles,
        }}
      >
        {dropdownOptions?.map((option) => (
          <MenuItem key={option.uuid}>{option.content}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownButton;
