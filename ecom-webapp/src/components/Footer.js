import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import BKLinkdin from '../images/bk-linkdin.jpeg'



const Footer = () => {
    const [color, setColor] = React.useState('neutral');
    return (
        <div className="footer-container">
            <Sheet
                variant="solid"
                color={color}
                invertedColors
                sx={{
                    ...(color !== 'neutral' && {
                        bgcolor: `${color}.800`,
                    }),
                    flexGrow: 1,
                    p: 2,
                    borderRadius: { xs: 0, sm: 'sm' },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton
                        variant="soft"
                        size="sm"
                        onClick={() => {
                            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

                            const nextColor = colors.indexOf(color);
                            setColor(colors[nextColor + 1] ?? colors[0]);
                        }}
                    >
                        <ColorLensRoundedIcon fontSize="small" />
                    </IconButton>
                    <Divider orientation="vertical" />
                    <IconButton variant="plain">
                        <a href=" https://www.facebook.com/profile.php?id=100088911671006&mibextid=ZbWKwL">
                            <FacebookRoundedIcon />
                        </a>
                    </IconButton>
                    <IconButton variant="plain">
                        <a href="https://github.com/behroozkhan" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                    </IconButton>
                    <IconButton variant="plain">
                        <a href="https://www.linkedin.com/in/behrooz-khan-a003b5237/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </IconButton>

                    <Input
                        variant="soft"
                        placeholder="Type in your email"
                        type="email"
                        name="email"
                        endDecorator={
                            <IconButton variant="soft" aria-label="subscribe">
                                <SendIcon />
                            </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                    />
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { md: 'flex-start' },
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}
                >
                    <Card
                        variant="soft"
                        size="sm"
                        sx={{
                            flexDirection: { xs: 'row', md: 'column' },
                            minWidth: { xs: '100%', md: 'auto' },
                            gap: 1,
                        }}
                    >
                        <AspectRatio
                            ratio="21/9"
                            minHeight={80}
                            sx={{ flexBasis: { xs: 100, } }}
                        >
                            <img alt="" src={BKLinkdin} style={{ objectFit: 'contain' }} />
                        </AspectRatio>
                        <CardContent>
                            <Typography level="body-sm">Intro to the MUI ecosystem</Typography>
                            <Typography level="body-xs" sx={{ mb: 0.5 }}>
                                MUI blog
                            </Typography>
                        </CardContent>
                    </Card>
                    <List
                        size="sm"
                        orientation="horizontal"
                        wrap
                        sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
                    >
                        <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
                            <ListSubheader>Sitemap</ListSubheader>
                            <List>
                                <ListItem>
                                    <ListItemButton>Services</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Blog</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Contact us</ListItemButton>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
                            <ListSubheader>Product</ListSubheader>
                            <List sx={{ '--ListItemDecorator-size': '32px' }}>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src={BKLinkdin}
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        MUI Core
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src={BKLinkdin}
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        MUI X
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src={BKLinkdin}
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        MUI Toolpad
                                        <Chip
                                            variant="soft"
                                            size="sm"
                                            sx={{ minHeight: 20, fontSize: 'xs2', ml: 'auto' }}
                                        >
                                            BETA
                                        </Chip>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src="/static/branding/product-designkits-dark.svg"
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        Design kits
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemDecorator>
                                            <img
                                                alt=""
                                                src={BKLinkdin}
                                                width="24"
                                            />
                                        </ListItemDecorator>
                                        Templates
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>
                </Box>
            </Sheet>
        </div>
    );
}

export default Footer;