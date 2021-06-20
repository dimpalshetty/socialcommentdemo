import React from 'react';
import '../components/body.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from 'react-bootstrap/Container';
import { PieChart } from 'react-minimal-pie-chart';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#1F2025',
        display: 'flex',
        height: '100%',

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: 100,
    },

    tab: {
        width: '70%',
        minWidth: 120,

    },


    tabpanel: {
        width: '100%',
        height: '100%',
    },

    card: {
        minWidth: 275,
        flex: 1,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    flex: {

        display: 'flex',

    },

    div: {
        flexDirection: 'row'
    }
}));

export default function Body() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const shiftSize = 1;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
        color: '#000000',
      };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab className={classes.tab} icon={<HomeIcon />}{...a11yProps(0)} />
                <Tab className={classes.tab} icon={<HomeIcon />} {...a11yProps(1)} />
                <Tab className={classes.tab} icon={<HomeIcon />} {...a11yProps(2)} />
                <Tab className={classes.tab} icon={<HomeIcon />}{...a11yProps(3)} />
                <Tab className={classes.tab} icon={<HomeIcon />} {...a11yProps(4)} />
                <Tab className={classes.tab} icon={<HomeIcon />} {...a11yProps(5)} />
                <Tab className={classes.tab} icon={<HomeIcon />} {...a11yProps(6)} />
            </Tabs>
            <TabPanel className={classes.tabpanel} value={value} index={0}>


                <Row className={classes.flex}>

                    <Col>

                        <Row className={classes.flex}>
                            <Col sm={12}><Card  border="primary" border-width='10px'  style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card 1</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card></Col>
                            <Col sm={12}><Card style={{ width: '18rem', borderWidth: 2, borderColor: '#FFFF00' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card 2</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card></Col>
                            <Col><Card style={{ width: '18rem', borderWidth: 2, borderColor: '#FFFF00' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card 3</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card></Col>

                        </Row>
                        <Row className={classes.flex}>
                        <Col><Card style={{ width: '18rem', borderWidth: 2, borderColor: '#FFFF00' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card 4</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card></Col>
                            <Col><Card style={{ width: '18rem', borderWidth: 2, borderColor: '#FFFF00' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card 5</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card></Col>
                        </Row>

                        <Row className={classes.flex}>
                        <Col><Card style={{ width: '18rem', borderWidth: 2, borderColor: '#FFFF00' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card 6</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card></Col>
                            <Col><Card style={{ width: '18rem', borderWidth: 2, borderColor: '#FFFF00' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                    <PieChart
  data={[
    { title: 'One', value: 25, color: '#2E9BFD' },
    { title: 'Two', value: 45, color: '#6543B4' },
    { title: 'Three', value: 30, color: '#FE5162' },
  ]}
  animate={true}
  segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
  label={({ dataEntry }) => dataEntry.value}
  labelStyle={{
          ...defaultLabelStyle,
        }}
      

       
/>;
                                    </Card.Body>
                                </Card></Col>
                        </Row>
                        
                    </Col>


                    <Col>


                        hiii


                    </Col>


                </Row>


                {/* <div className={classes.flex}>

                    <div>
                        <h2>col1</h2>
                    </div>

                    <div>
                        <h2>col2</h2>
                    </div>

                </div> */}







            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </div>
    );
}