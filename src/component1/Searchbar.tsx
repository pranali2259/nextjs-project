import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar = () => {
  const [isMounted, setIsMounted] = useState(false); // State to track client-side rendering
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const router = useRouter(); // Next.js router

  // This effect will run only on the client side, after mounting
  useEffect(() => {
    setIsMounted(true); // Set the mounted state to true after the component has mounted
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Prevent rendering the component until it's mounted (avoids SSR issue)
  if (!isMounted) return null;

  return (
    <form onSubmit={handleSearch}>
      <Search sx={{ color: 'white' }}>
        <SearchIconWrapper sx={{ color: 'white' }}>
          <SearchIcon sx={{ color: 'white' }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchQuery}
          onChange={handleInputChange}
          inputProps={{ 'aria-label': 'search' }}
          name="name"
          sx={{ color: 'white' }}
        />
      </Search>
    </form>
  );
};

export default SearchAppBar;
