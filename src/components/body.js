
import React from 'react';
import '../components/body.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from 'react-bootstrap/Container';
import { PieChart } from 'react-minimal-pie-chart';

import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from "../components/graph.js";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";


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

        backgroundColor: '#1F2025',
      
        height: '100%',
        width: '100%'


    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: 100,
    },

    tab: {
        width: '70%',
        minWidth: 120,

    },

    flex: {
        flexDirection:'row',
        display : 'flex',
        flex: 'none',
    },



    cards: {
        minWidth: 300,
        minHeight: 250,
        flex: 1,
        border: `1px solid`,
        borderColor: '#B1ADC9',
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#87CEEB'
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


    pie: {

        height: '40%',
        position: 'relative',
        width: 380,
        padding: 0,

    },


    col: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    flex1 :{
        flexDirection: 'row',
        display: 'flex',
    }




}));



export default function Body() {
    const classes = useStyles();
    const [bigChartData, setbigChartData] = React.useState("data1");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };

    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="root">
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

                <div className="content">
                    <Row className={classes.flex1}>
                        <Col lg="4" xs="12" sm="12" >
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg= ' 4' xs="12" sm="12">
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" >
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg="8" >
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col lg ="4" xs="12" sm="12" >
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className={classes.flex}>
                        <Col lg="8" >
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        
                        <Col lg ="4" xs="12" sm="12" >
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">Total Shipments</h5>
                                            <CardTitle tag="h2">Performance</CardTitle>
                                        </Col>

                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line
                                            data={chartExample1[bigChartData]}
                                            options={chartExample1.options}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </div>





            </TabPanel>
            <TabPanel tabClassName="tab2" value={value} index={1}>
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