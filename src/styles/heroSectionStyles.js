import { styled } from '@mui/material/styles';

export const HeroSectionRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  minHeight: 724,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '60px 5vw',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 2vw',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px 1vw',
    minHeight: 400,
  },
}));

export const Left = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 2,
  maxWidth: '50vw',
  minWidth: 320,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100vw',
    alignItems: 'center',
  },
}));

export const MainText = styled('div')(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, Poppins, sans-serif',
  fontWeight: 600,
  fontSize: 24,
  lineHeight: 1.2,
  textTransform: 'uppercase',
  color: '#fff',
  marginBottom: 16,
  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
}));

export const SubText = styled('div')(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, Poppins, sans-serif',
  fontWeight: 400,
  fontSize: 32,
  lineHeight: 1.3,
  color: '#fff',
  marginBottom: 32,
  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
  },
}));

export const ExploreBtn = styled('button')(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, Poppins, sans-serif',
  fontWeight: 700,
  fontSize: 16,
  textTransform: 'uppercase',
  background: '#F36434',
  color: '#fff',
  borderRadius: 5,
  padding: '18px 13px',
  marginBottom: 32,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: '#d35426',
  },
}));

export const BookMeeting = styled('a')(({ theme }) => ({
  fontFamily: 'IBM Plex Sans, Poppins, sans-serif',
  fontWeight: 500,
  fontSize: 14,
  color: '#fff',
  textDecoration: 'underline',
  cursor: 'pointer',
  padding: '8px 0',
  zIndex: 3,
  alignSelf: 'flex-start',
  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
  [theme.breakpoints.down('md')]: {
    alignSelf: 'center',
  },
}));

export const Right = styled('div')(({ theme }) => ({
  flex: 1,
  minWidth: 320,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    width: '100%',
  },
})); 