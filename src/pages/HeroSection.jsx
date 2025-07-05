import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, useMediaQuery, Container } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImg from '../assets/background-image.jpg';
import heroImg from '../assets/hero1.png';
import { useTheme } from '@mui/material/styles';

const BackgroundBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: theme.spacing(4, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.55)',
  zIndex: 1,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(6),
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4),
    padding: theme.spacing(1),
  },
}));

const HeroTextBox = styled(Box)(({ theme }) => ({
  flex: 1,
  color: '#fff',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    textAlign: 'left',
  },
}));

const HeroImageBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 540,
  height: 'auto',
  [theme.breakpoints.down('lg')]: {
    maxWidth: 480,
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 400,
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 300,
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: 260,
  },
}));

const CardGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(3),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(36, 70, 80, 0.85)',
  color: '#fff',
  borderRadius: 12,
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)',
  minHeight: 170,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backdropFilter: 'blur(6px)',
  background: '#ffffff1A',
  [theme.breakpoints.down('sm')]: {
    minHeight: 180,
  },
  [theme.breakpoints.down('xs')]: {
    minHeight: 200,
  },
}));

const CardActionText = styled(Typography)(({ theme }) => ({
  color: '#FF8552',
  fontWeight: 500,
  fontSize: 16,
  marginTop: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

const CarouselBox = styled(Box)(({ theme }) => ({
  width: '10px',
  height: '91px',
  transform: 'rotate(0deg)',
  opacity: 1,
  margin: '0 5px',
  transition: 'background-color 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));

  const [activeIndicator, setActiveIndicator] = useState(0);

  return (
    <BackgroundBox>
      <Overlay />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            gap: { xs: 3, sm: 4, md: 6 },
            py: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 2 },
            position: 'relative',
            zIndex: 2,
            width: '100%',
            margin: '0 auto',
            paddingTop: { xs: '60px', sm: '70px' }
          }}
        >
          {/* Content Wrapper with Carousels and Text */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: { xs: 3, sm: 4, md: 6 },
              width: '100%',
              flex: 1,
              '@media (max-width: 930px)': {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
              },
            }}
          >
            {/* Vertical Carousels - Always Visible on Left */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'column' },
                gap: 2,
                alignItems: { xs: 'center', sm: 'center', md: 'center' },
                justifyContent: 'center',
                minWidth: { xs: '40px', sm: '50px', md: '60px' },
                height: { xs: '120px', sm: '160px', md: '200px' },
                position: 'relative',
                flexShrink: 0,
                '@media (min-width: 0px)': {
                  alignItems: 'center',
                  WebkitAlignItems: 'center',
                  WebkitBoxAlign: 'center',
                  msFlexAlign: 'center',
                  gap: '24px',
                },
                '@media (max-width: 930px)': {
                  flexDirection: 'row',
                  height: 'auto',
                  minWidth: 'auto',
                  gap: 2,
                },
              }}
            >
              {/* First Carousel */}
              <Box
                sx={{
                  position: 'relative',
                  width: '10px',
                  height: { xs: '40px', sm: '91px' },
                  overflow: 'hidden',
                }}
              >
                <CarouselBox
                  sx={{
                    background: activeIndicator === 0 ? '#2D53A4' : '#393939',
                    width: '10px',
                    height: { xs: '40px', sm: '91px' },
                    transform: 'rotate(0deg)',
                    opacity: 1,
                  }}
                  onClick={() => setActiveIndicator(0)}
                />
              </Box>

              {/* Second Carousel */}
              <Box
                sx={{
                  position: 'relative',
                  width: '10px',
                  height: { xs: '40px', sm: '91px' },
                  overflow: 'hidden',
                }}
              >
                <CarouselBox
                  sx={{
                    background: activeIndicator === 1 ? '#2D53A4' : '#393939',
                    width: '10px',
                    height: { xs: '40px', sm: '91px' },
                    transform: 'rotate(0deg)',
                    opacity: 1,
                  }}
                  onClick={() => setActiveIndicator(1)}
                />
              </Box>
            </Box>

            {/* Text Content */}
            <Box sx={{ 
              flex: 1, 
              color: '#fff', 
              width: '100%',
              textAlign: { xs: 'center', md: 'left' },
              '@media (max-width: 930px)': {
                textAlign: 'left',
              },
            }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#B0B8C1',
                  fontWeight: 500,
                  letterSpacing: { xs: 0.8, sm: 1.2 },
                  fontSize: { xs: 12, sm: 13, md: 15 },
                  mb: 1,
                  textTransform: 'uppercase',
                }}
              >
                SMARTER, FASTER, AND MORE RELIABLE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { 
                    xs: 24, 
                    sm: 28, 
                    md: 32, 
                    lg: 36, 
                    xl: 40 
                  },
                  lineHeight: { xs: 1.2, sm: 1.15 },
                  mb: { xs: 1.5, sm: 2 },
                  wordBreak: 'break-word',
                }}
              >
                Streamline procurement and enhance your<br />
                supply chain with 1IGS
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  flexWrap: 'wrap',
                  gap: { xs: 1, sm: 2 },
                  mt: { xs: 2, sm: 3 },
                  '@media (max-width: 930px)': {
                    justifyContent: 'flex-start',
                  },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: '#FF8552',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: 11, sm: 12, md: 14, lg: 15 },
                    px: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                    py: { xs: 1, sm: 1.2 },
                    borderRadius: 2,
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                    '&:hover': {
                      background: '#ff6a2b',
                    },
                  }}
                >
                  EXPLORE COST-EFFECTIVE SOURCING OPTIONS
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: 11, sm: 12, md: 14, lg: 15 },
                    textTransform: 'none',
                    whiteSpace: 'nowrap',
                    minWidth: 'fit-content',
                    '&:hover': {
                      textDecoration: 'underline',
                      background: 'transparent',
                    },
                  }}
                >
                  BOOK A MEETING
                </Button>
              </Box>
            </Box>
          </Box>
          
          {/* Hero Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              mt: { xs: 2, md: 0 },
            }}
          >
            <HeroImage src={heroImg} alt="Robot hands holding globe" />
          </Box>
        </Box>

        {/* Subtitle and Cards Section */}
        <Box sx={{ 
          pb: { xs: 4, sm: 6, md: 8 },
          px: { xs: 1, sm: 2 }
        }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: '#fff',
              fontWeight: 400,
              fontSize: { xs: 13, sm: 14, md: 16 },
              mb: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center',
              maxWidth: { xs: '100%', sm: 600, md: 650 },
              margin: '0 auto',
            }}
          >
            Seamless Solutions, Endless Possibilities
          </Typography>
          
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(auto-fit, minmax(280px, 1fr))',
                md: 'repeat(auto-fit, minmax(300px, 1fr))',
                lg: 'repeat(3, 1fr)'
              },
              gap: { xs: 2, sm: 3, md: 4 },
              maxWidth: 1200,
              margin: '0 auto',
            }}
          >
            <StyledCard>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1, 
                    color: '#fff',
                    fontSize: { xs: 16, sm: 18, md: 20 }
                  }}
                >
                  Accelerate long-term growth with 1IGS's
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: 13, sm: 14, md: 15 }, 
                    color: '#fff',
                    lineHeight: 1.5
                  }}
                >
                  We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.
                </Typography>
                <CardActionText>
                  Let's Co-Create &gt;
                </CardActionText>
              </CardContent>
            </StyledCard>

            <StyledCard>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1, 
                    color: '#fff',
                    fontSize: { xs: 16, sm: 18, md: 20 }
                  }}
                >
                  Proactive, innovative, and results-focused
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: 13, sm: 14, md: 15 }, 
                    color: '#fff',
                    lineHeight: 1.5
                  }}
                >
                  We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.
                </Typography>
                <CardActionText>
                  Call to explore global sourcing options &gt;
                </CardActionText>
              </CardContent>
            </StyledCard>

            <StyledCard>
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1, 
                    color: '#fff',
                    fontSize: { xs: 16, sm: 18, md: 20 }
                  }}
                >
                  Driving success through strategic partnerships
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: { xs: 13, sm: 14, md: 15 }, 
                    color: '#fff',
                    lineHeight: 1.5
                  }}
                >
                  We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.
                </Typography>
                <CardActionText>
                  Partner for Success &gt;
                </CardActionText>
              </CardContent>
            </StyledCard>
          </Box>
        </Box>

      </Container>
    </BackgroundBox>
  );
};

export default HeroSection; 