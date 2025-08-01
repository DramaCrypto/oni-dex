import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import checkIcon from '@/assets/icons/icon_check.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding : 0,
    alignItems : 'start',
    marginLeft:0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiFormControlLabel-label': {
      color: '#ddd',
      fontSize : 14,
      marginRight : 0,
    },
  },
  icon: {
    borderRadius: 3,
    width: 21,
    height: 21,
    marginRight : 10,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: 'transparent',
    border: `1px solid #CCCEEF`,
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
  },
  checkedIcon: {
    backgroundColor: '#CA249C',
    border: `1px solid #CA249C`,
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: `url('${checkIcon.src}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '1px 3px',
      content: '""',
    },
  },
}));

const CheckBox = ({
  wrapperClassName,
  className,
  onChange,
  value,
  checked,
  name,
  label,
}) => {
  const classes = useStyles();
  const [ isChecked, setChecked ] = useState(checked);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  useEffect(() => {
      setChecked(checked);
  }, [checked])

  return (
    <FormControlLabel
      className={clsx(classes.root, wrapperClassName)}
      control={(
        <Checkbox
          className={clsx(classes.root, className)}
          disableRipple
          color="default"
          name={name}
          checkedIcon={(
            <span className={clsx(classes.icon, classes.checkedIcon)} />
          )}
          icon={<span className={classes.icon} />}
          checked={isChecked}
          onChange={handleChangeCheck}
          value={value}
        />
      )}
      label={label}
    />
  );
};

export default CheckBox;
