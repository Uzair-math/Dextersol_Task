import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const mainMenu = [
  { label: 'AI', hasDropdown: true },
  { label: 'Hybrid Cloud', hasDropdown: true },
  { label: 'Products', hasDropdown: true },
  { label: 'Consulting', hasDropdown: false },
  { label: 'Support', hasDropdown: true },
  { label: 'Think', hasDropdown: false },
];

const secondaryMenu = [
  { label: 'Consulting', active: true },
  { label: 'Capabilities', hasDropdown: true },
  { label: 'Industries', hasDropdown: true },
  { label: 'Strategic Partners', hasDropdown: true },
  { label: 'Insights', hasDropdown: true },
  { label: 'Careers', hasDropdown: false },
];

const dropdownItems = {
  AI: [
    'Overview',
    'Consulting',
    'watsonx',
    'Research',
    'Agents',
    'Ethics and governance',
    'Granite models',
  ],
  'Hybrid Cloud': [
    'Overview',
    'IT infrastructure',
    'Consulting',
    'Quantum computing',
    'Cloud platform',
  ],
  Products: [
    { label: 'Featured', children: [
      'Concert',
      'Environmental Intelligence',
      'FlashSystem',
      'HashiCorp',
      'IBM Cloud',
      'IBM Z',
      'IBM webMethods Hybrid Integration',
      'Instana',
      'MaaS360',
      'Maximo',
      'Planning Analytics',
      'Robotic Process Automation (RPA)',
      'Storage Defender',
      'Turbonomic',
      'Verify',
      'watsonx',
      'watsonx Assistant',
      'watsonx Orchestrate',
    ] },
    'AI & machine learning',
    'Analytics',
    'Asset lifecycle management',
    'Business automation',
    'Containers',
    'Databases',
    'DevOps & Engineering',
    'IT automation',
    'Middleware',
    'Network',
    'Operating systems',
    'Quantum',
    'Security & identity',
    'Servers',
    'Storage',
    'View all products',
  ],
  Support: [
    "What's New",
    'Community',
    'Developer',
    'Call for Code',
    'Generative AI',
    'Hackathons',
    'Open Source @ IBM',
    'Technologies',
    'Documentation',
    'All product documentation',
    'IBM Cloud documentation',
    'IBM Redbooks',
    'IBM Cloud platform support',
    'Implementation',
    'Expert Labs',
    'Support',
    'Download fixes, updates & drivers',
    'Download licensed software - Passport Advantage',
    'IBM Software Licensing',
    'Open a case',
    'View more',
    'View support plans',
    'View your cases',
    'Technology Lifecycle Services',
    'Enterprise networking and security',
    'Servers and storage',
    'Software',
    'Training',
    'Courses',
    'Digital learning subscriptions',
    'Learning paths & collections',
    'Professional certifications',
  ],
  Capabilities: [
    'Services',
    'Application services',
    'Artificial intelligence',
    'Automation',
    'Business strategy',
    'Cloud',
    'Customer experience',
    'Cybersecurity',
    'Finance',
    'HR and talent',
    'Marketing',
    'Supply chain',
    'Sustainability',
    { label: 'Signature Experiences', children: [
      'Consulting Advantage',
      'Garage',
      'X-Force',
    ] },
  ],
  Industries: [
    'Energy',
    'Financial Services',
    'Government',
    'Healthcare Services',
    'Retail',
    'Telecommunications',
    'US Federal',
  ],
  'Strategic Partners': [
    'Adobe',
    'AWS',
    'Microsoft',
    'Oracle',
    'Palo Alto Networks',
    'Red Hat',
    'Salesforce',
    'SAP',
    'See all consulting partners',
  ],
  Insights: [
    'Artificial Intelligence',
    'Digital Transformation',
    'Finance and Risk',
    'Operations and Supply Chain',
    'Sales and Marketing',
    'Talent and Skills',
    'Technology and Security',
    'IBM Institute for Business Value',
  ],
};

function renderDropdownItems(items, handleClose) {
  return items.map((item, idx) => {
    if (typeof item === 'string') {
      return (
        <MenuItem key={item} onClick={handleClose}>{item}</MenuItem>
      );
    } else if (item.children) {
      return [
        <MenuItem key={item.label} disabled sx={{ fontWeight: 700, opacity: 1 }}>{item.label}</MenuItem>,
        ...item.children.map((child) => (
          <MenuItem key={item.label + '-' + child} onClick={handleClose} sx={{ pl: 3 }}>{child}</MenuItem>
        ))
      ];
    }
    return null;
  });
}

const IBMLogo = (props) => (
  <svg
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="58px"
    height="23px"
    viewBox="0 0 58 23"
    {...props}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <path
          d="M58,21.4666667 L58,23 L50.3684211,23 L50.3684211,21.4666667 L58,21.4666667 Z M39.6842105,21.4666667 L39.6842105,23 L32.0526316,23 L32.0526316,21.4666667 L39.6842105,21.4666667 Z M45.6385329,21.4666667 L45.0245693,23 L44.41871,21.4666667 L45.6385329,21.4666667 Z M28.5421053,21.4666667 C27.4471432,22.4188667 26.0029202,23 24.3905263,23 L24.3905263,23 L12.2105263,23 L12.2105263,21.4666667 Z M10.6842105,21.4666667 L10.6842105,23 L0,23 L0,21.4666667 L10.6842105,21.4666667 Z M39.6842105,18.4 L39.6842105,19.9333333 L32.0526316,19.9333333 L32.0526316,18.4 L39.6842105,18.4 Z M46.8318522,18.4 L46.2377311,19.9333333 L43.8212353,19.9333333 L43.2226426,18.4 L46.8318522,18.4 Z M30.0684211,18.4 C29.9306437,18.9451697 29.7105614,19.4599515 29.4273684,19.9333333 L29.4273684,19.9333333 L12.2105263,19.9333333 L12.2105263,18.4 Z M10.6842105,18.4 L10.6842105,19.9333333 L0,19.9333333 L0,18.4 L10.6842105,18.4 Z M58,18.4 L58,19.9333333 L50.3684211,19.9333333 L50.3684211,18.4 L58,18.4 Z M54.9473684,15.3333333 L54.9473684,16.8666667 L50.3684211,16.8666667 L50.3684211,15.3333333 L54.9473684,15.3333333 Z M39.6842105,15.3333333 L39.6842105,16.8666667 L35.1052632,16.8666667 L35.1052632,15.3333333 L39.6842105,15.3333333 Z M48.0292704,15.3333333 L47.4295831,16.8666667 L42.6233978,16.8666667 L42.019006,15.3333333 L48.0292704,15.3333333 Z M29.8547368,15.3333333 C29.991899,15.8221879 30.0684211,16.3357152 30.0684211,16.8666667 L30.0684211,16.8666667 L24.4210526,16.8666667 L24.4210526,15.3333333 Z M19.8421053,15.3333333 L19.8421053,16.8666667 L15.2631579,16.8666667 L15.2631579,15.3333333 L19.8421053,15.3333333 Z M7.63157895,15.3333333 L7.63157895,16.8666667 L3.05263158,16.8666667 L3.05263158,15.3333333 L7.63157895,15.3333333 Z M54.9473684,12.2666667 L54.9473684,13.8 L50.3684211,13.8 L50.3684211,12.2666667 L54.9473684,12.2666667 Z M39.6842105,12.2666667 L39.6842105,13.8 L35.1052632,13.8 L35.1052632,12.2666667 L39.6842105,12.2666667 Z M49.2252679,12.2666667 L48.6284686,13.8 L41.4089474,13.8 L40.8168134,12.2666667 L49.2252679,12.2666667 Z M27.9773684,12.2666667 C28.5037637,12.6994848 28.9570701,13.2181697 29.3052632,13.8 L29.3052632,13.8 L15.2631579,13.8 L15.2631579,12.2666667 Z M7.63157895,12.2666667 L7.63157895,13.8 L3.05263158,13.8 L3.05263158,12.2666667 L7.63157895,12.2666667 Z M44.5987396,9.2 L45.0263158,10.4393515 L45.4535426,9.2 L54.9473684,9.2 L54.9473684,10.7333333 L50.3684211,10.7333333 L50.3684211,9.32433939 L49.8494737,10.7333333 L40.1878947,10.7333333 L39.6842105,9.3242 L39.6842105,10.7333333 L35.1052632,10.7333333 L35.1052632,9.2 L44.5987396,9.2 Z M7.63157895,9.2 L7.63157895,10.7333333 L3.05263158,10.7333333 L3.05263158,9.2 L7.63157895,9.2 Z M29.3052632,9.2 C28.9570701,9.7818303 28.5037637,10.3003758 27.9773684,10.7333333 L27.9773684,10.7333333 L15.2631579,10.7333333 L15.2631579,9.2 Z M54.9473684,6.13333333 L54.9473684,7.66666667 L45.9831118,7.66666667 L46.5234001,6.13333333 L54.9473684,6.13333333 Z M43.534302,6.13333333 L44.0745993,7.66666667 L35.1052632,7.66666667 L35.1052632,6.13333333 L43.534302,6.13333333 Z M30.0684211,6.13333333 C30.0684211,6.66414545 29.991899,7.17767273 29.8547368,7.66666667 L29.8547368,7.66666667 L24.4210526,7.66666667 L24.4210526,6.13333333 Z M19.8421053,6.13333333 L19.8421053,7.66666667 L15.2631579,7.66666667 L15.2631579,6.13333333 L19.8421053,6.13333333 Z M7.63157895,6.13333333 L7.63157895,7.66666667 L3.05263158,7.66666667 L3.05263158,6.13333333 L7.63157895,6.13333333 Z M42.4774196,3.06666667 L43.0079113,4.6 L32.0527757,4.6 L32.0526316,3.06666667 L42.4774196,3.06666667 Z M58,3.06666667 L58,4.6 L47.0390632,4.6 L47.5903678,3.06666667 L58,3.06666667 Z M29.4273684,3.06666667 C29.7105614,3.54004848 29.9306437,4.0548303 30.0684211,4.6 L30.0684211,4.6 L12.2105263,4.6 L12.2105263,3.06666667 Z M10.6842105,3.06666667 L10.6842105,4.6 L0,4.6 L0,3.06666667 L10.6842105,3.06666667 Z M41.4056725,0 L41.9462722,1.53333333 L32.05278,1.53333333 L32.0526316,0 L41.4056725,0 Z M58,0 L58,1.53333333 L48.1188427,1.53333333 L48.6466706,0 L58,0 Z M24.3905263,0 C25.9912083,0 27.4472798,0.581133333 28.5421053,1.53333333 L28.5421053,1.53333333 L12.2105263,1.53333333 L12.2105263,0 Z M10.6842105,0 L10.6842105,1.53333333 L0,1.53333333 L0,0 L10.6842105,0 Z"
          fill="#000"
        />
      </g>
    </g>
  </svg>
);

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [anchorEls, setAnchorEls] = React.useState({});
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expandedItems, setExpandedItems] = React.useState({});
  
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMenuOpen = (event, label) => {
    setAnchorEls((prev) => ({ ...prev, [label]: event.currentTarget }));
  };
  
  const handleMenuClose = (label) => {
    setAnchorEls((prev) => ({ ...prev, [label]: null }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileItemClick = (label) => {
    if (mainMenu.find(item => item.label === label)?.hasDropdown) {
      setExpandedItems(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  const renderMobileDrawer = () => (
    <Box sx={{ width: 280, pt: 2 }}>
      <List>
        {mainMenu.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleMobileItemClick(item.label)}
                sx={{
                  borderBottom: item.label === 'Consulting' ? '2px solid #161616' : '1px solid #e0e0e0',
                  fontWeight: item.label === 'Consulting' ? 700 : 400,
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  sx={{ 
                    color: item.label === 'Consulting' ? '#161616' : '#222',
                    '& .MuiListItemText-primary': {
                      fontSize: 16,
                    }
                  }}
                />
                {item.hasDropdown && (
                  expandedItems[item.label] ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
            </ListItem>
            {item.hasDropdown && (
              <Collapse in={expandedItems[item.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {dropdownItems[item.label]?.map((dropdownItem) => (
                    <ListItemButton
                      key={dropdownItem}
                      sx={{ pl: 4 }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <ListItemText 
                        primary={typeof dropdownItem === 'string' ? dropdownItem : dropdownItem.label}
                        sx={{ 
                          '& .MuiListItemText-primary': {
                            fontSize: 14,
                            color: '#666',
                          }
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const renderMainMenu = (
    <Box sx={{ 
      display: { xs: 'none', md: 'flex' }, 
      alignItems: 'center', 
      flex: 1,
      overflow: 'hidden'
    }}>
      {mainMenu.map((item, idx) => (
        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', ml: idx === 0 ? 0 : 2 }}>
          <Button
            disableRipple
            sx={{
              color: item.label === 'Consulting' ? '#161616' : '#222',
              fontWeight: item.label === 'Consulting' ? 700 : 400,
              fontSize: { md: 16, lg: 16 },
              textTransform: 'none',
              borderBottom: item.label === 'Consulting' ? '2px solid #161616' : '2px solid transparent',
              borderRadius: 0,
              minWidth: 0,
              px: { md: 1.5, lg: 2 },
              background: 'none',
              padding: { md: '12px 8px', lg: '16px' },
              whiteSpace: 'nowrap',
              '&:hover': { background: 'none', color: '#0f62fe' },
            }}
            endIcon={item.hasDropdown ? <ArrowDropDownIcon sx={{ fontSize: 20 }} /> : null}
            onClick={item.hasDropdown ? (e) => handleMenuOpen(e, item.label) : undefined}
          >
            {item.label}
          </Button>
          {item.hasDropdown && (
            <Menu
              anchorEl={anchorEls[item.label]}
              open={Boolean(anchorEls[item.label])}
              onClose={() => handleMenuClose(item.label)}
              MenuListProps={{ onMouseLeave: () => handleMenuClose(item.label) }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{
                '& .MuiPaper-root': {
                  maxHeight: '70vh',
                  overflow: 'auto',
                }
              }}
            >
              {dropdownItems[item.label] ? renderDropdownItems(dropdownItems[item.label], () => handleMenuClose(item.label)) : null}
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderSecondaryMenu = (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      width: '100%', 
      borderBottom: '1.5px solid #e0e0e0', 
      background: '#fff', 
      minHeight: 44,
      overflow: 'hidden'
    }}>
      <Tabs
        value={0}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          minHeight: 44,
          '.MuiTabs-indicator': { backgroundColor: '#0f62fe', height: 3 },
          '.MuiTabs-scrollButtons': {
            color: '#161616',
            '&.Mui-disabled': {
              opacity: 0.3,
            }
          }
        }}
      >
        {secondaryMenu.map((item, idx) => (
          <Tab
            key={item.label}
            label={
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                fontWeight: item.active ? 700 : 400, 
                color: '#161616', 
                fontSize: { xs: 14, sm: 16 },
                whiteSpace: 'nowrap'
              }}>
                {item.label}
                {item.hasDropdown && <ArrowDropDownIcon sx={{ fontSize: 18, ml: 0.5 }} />}
              </Box>
            }
            sx={{
              minHeight: 44,
              px: { xs: 1, sm: 2 },
              fontWeight: item.active ? 700 : 400,
              color: '#161616',
              borderBottom: item.active ? '3px solid #0f62fe' : '3px solid transparent',
              textTransform: 'none',
              background: 'none',
              '&.Mui-selected': { color: '#161616' },
            }}
            disableRipple
            disableFocusRipple
            onClick={item.hasDropdown ? (e) => handleMenuOpen(e, item.label) : undefined}
          />
        ))}
      </Tabs>
      {secondaryMenu.map((item) =>
        item.hasDropdown ? (
          <Menu
            key={item.label}
            anchorEl={anchorEls[item.label]}
            open={Boolean(anchorEls[item.label])}
            onClose={() => handleMenuClose(item.label)}
            MenuListProps={{ onMouseLeave: () => handleMenuClose(item.label) }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{
              '& .MuiPaper-root': {
                maxHeight: '70vh',
                overflow: 'auto',
              }
            }}
          >
            {dropdownItems[item.label] ? renderDropdownItems(dropdownItems[item.label], () => handleMenuClose(item.label)) : null}
          </Menu>
        ) : null
      )}
      <Box sx={{ flex: 1 }} />
      <Button
        variant="contained"
        sx={{
          background: '#0f62fe',
          color: '#fff',
          fontWeight: 400,
          textTransform: 'none',
          borderRadius: 0,
          px: { xs: 2, sm: 3 },
          minHeight: 44,
          fontSize: { xs: 14, sm: 16 },
          boxShadow: 'none',
          ml: 'auto',
          padding: { xs: '12px 16px', sm: '16px' },
          whiteSpace: 'nowrap',
          display: { xs: 'none', sm: 'block' },
          '&:hover': { background: '#0353e9' },
        }}
      >
        Contact IBM Consulting
      </Button>
    </Box>
  );

  const renderRightIcons = (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      ml: { xs: 1, sm: 2 },
      gap: { xs: 0.5, sm: 1 }
    }}>
      <IconButton 
        size="large" 
        sx={{ 
          color: '#161616',
          display: { xs: 'none', sm: 'flex' }
        }}
      >
        <SearchIcon />
      </IconButton>
      <IconButton 
        size="large" 
        sx={{ 
          color: '#161616',
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <ChatBubbleOutlineIcon />
      </IconButton>
      <IconButton 
        size="large" 
        sx={{ 
          color: '#161616',
          display: { xs: 'none', lg: 'flex' }
        }}
      >
        <LanguageIcon />
      </IconButton>
      <IconButton 
        size="large" 
        sx={{ 
          color: '#161616',
          display: { xs: 'none', md: 'flex' }
        }}
      >
        <PersonOutlineIcon />
      </IconButton>
      {/* Mobile menu button */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
        sx={{ 
          display: { xs: 'flex', md: 'none' },
          color: '#161616'
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={0} 
        sx={{ 
          borderBottom: '1.5px solid #e0e0e0', 
          background: '#fff', 
          px: { xs: 1 }, 
          pr: { sm: 0 },
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 1100,
        }}
      >
        <Toolbar disableGutters sx={{ 
          minHeight: { xs: 48, sm: 56 }, 
          px: { xs: 1, sm: 2 },
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 1, sm: 3 } }}>
            <IBMLogo />
          </Box>
          {renderMainMenu}
          {renderRightIcons}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            zIndex: 1200
          },
        }}
      >
        {renderMobileDrawer()}
      </Drawer>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <Box sx={{ height: { xs: 48, sm: 56 } }} />
      
      {/* Secondary Navbar - also fixed but always visible */}
      <Box 
        sx={{ 
          position: 'fixed', 
          top: isVisible ? { xs: 48, sm: 56 } : 0, 
          left: 0, 
          right: 0, 
          zIndex: 1099,
          transition: 'top 0.3s ease-in-out',
        }}
      >
        {renderSecondaryMenu}
      </Box>
      
      {/* Spacer for secondary navbar */}
      <Box sx={{ height: 44 }} />
    </Box>
  );
} 